import React from 'react';
import { Button } from '../common';
import { useQuoteRequestForm } from '../../lib';

interface Props {
    populatePurchaseOptions: boolean;
}

export default function FormTester({ populatePurchaseOptions = false }: Props) {
    const { form } = useQuoteRequestForm();
    const [keys, setKeys] = React.useState<string[]>([]);
    const [isDev, setDev] = React.useState<boolean>(false);

    function handlePopulate() {
        form?.setData(prevData => ({
            ...prevData,
            first_name: 'TEST',
            last_name: 'TEST',
            email: 'dev@sual.co.nz',
            phone: '021 234 5678',
            mobile: '021 234 5678',
            dob: '1990-01-01',
            licence: 'Other',
            licence_other: 'Test',
            club_id: 50,
            club_membership_number: '12345',
            street_address: {
                address: '123 Street Name',
                unit: 'Level 1',
                suburb: 'Suburb',
                city: 'Auckland',
                post_code: '1234',
            },
            promo_code: 'TEST',
            declaration: {
                had_incident: true,
                incidents: [{
                    description: 'Lorem ipsum dolor sit amet.',
                    month: 'January',
                    year: '2020',
                }],
                has_demerit_points: true,
                demerit_points: '1-24',
                has_lost_licence: true,
                lost_licence_details: 'Lorem ipsum dolor sit amet.',
                was_refused_insurance: true,
                refused_insurance_details: 'Lorem ipsum dolor sit amet.',
                has_criminal_conviction: true,
                criminal_conviction_details: 'Lorem ipsum dolor sit amet.',
                has_vehicle_modifications: true,
                vehicle_modifications_details: 'Lorem ipsum dolor sit amet.',
                has_previous_insurer: true,
                previous_insurer_details: 'AA',
                previous_insurer_expires_at: '2020-01-01',
                additional_details: 'I am a robot, beep boop. Please ignore this submission.',
            },
            vehicles: [
                {
                    make: 'Tesla',
                    model: 'Cybertruck',
                    year: '2023',
                    registration: 'ELMUSK',
                    vehicle_type: 'car',
                    product: 'star-enthusiast-prestige-everyday-plus',
                    value: 100000,
                    is_heavy: false,
                    usage: 'Childrens car',
                    storage_location: 'Carport',
                    has_financially_interested_party: true,
                    financially_interested_party_detail: 'MTA',
                    owned_duration: 'Less than 12 months',
                    drivers: [
                        {
                            first_name: 'X Æ',
                            last_name: 'A-12',
                            dob: '2000-05-04',
                            licence: 'Other',
                            licence_other: 'None',
                            relationship: 'Child',
                        }
                    ],
                },
            ],
            purchase_options: populatePurchaseOptions ? [
                {
                    premium_type: 'annual',
                    level_of_insurance_id: 12,
                    authorised_drivers: 'TEST',
                    excess_details: 'TEST',
                    terms: 'TEST',
                    description: 'This is a test purchase option',
                    premium: 100000,
                    monthly_premium: 8500,
                    show_monthly: true,
                    fsl: 100,
                    sort_order: 1,
                    enhancements: [
                        { name: 'Test enhancement', premium: 2500, disable_rounding: false, description: 'Test enhancement', auto_select: true },
                        { name: 'Test enhancement', premium: 5000, disable_rounding: false, description: 'Test enhancement', auto_select: false }
                    ],
                },
                {
                    premium_type: 'total-due',
                    level_of_insurance_id: 13,
                    authorised_drivers: 'TEST',
                    excess_details: 'TEST',
                    terms: 'TEST',
                    description: 'This is a test purchase option',
                    premium: 100000,
                    show_monthly: false,
                    fsl: 100,
                    sort_order: 2,
                    enhancements: [
                        { name: 'Test enhancement', premium: 2500, disable_rounding: false, description: 'Test enhancement', auto_select: true },
                        { name: 'Test enhancement', premium: 5000, disable_rounding: false, description: 'Test enhancement', auto_select: false }
                    ],
                }
            ] : [],
        }))
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            return setKeys([]);
        }

        setKeys(prevKeys => [...prevKeys, e.key]);
    }

    React.useEffect(() => {
        // Detect when the user has typed the word "debug"
        if (keys.join('') === 'debug') {
            handlePopulate();
        }
    }, [keys]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.location.href.includes('dev')
                || window.location.href.includes('localhost')
                || window.location.href.includes('test')
                || window.location.href.includes('local')
            ) {
                setDev(true);
            }

            window.addEventListener('keydown', (e: KeyboardEvent) => handleKeydown(e));

            return () => {
                window.removeEventListener('keydown', (e: KeyboardEvent) => handleKeydown(e));
            }
        }

        return;
    }, []);

    if (isDev) {
        return (
            <Button onClick={handlePopulate} type="button" status="primary" className="fixed bottom-4 right-4">
                Populate data
            </Button>
        )
    }

    return <></>;
}
