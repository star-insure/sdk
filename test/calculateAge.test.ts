import { format, subDays, subYears } from 'date-fns';
import { calculateAge } from '../src/lib/calculateAge';

describe('calculateAge', () => {
    it('can_calculate_age_from_date_string', () => {
        const age = 18;
        const source = format(subYears(new Date(), age), 'yyyy-MM-dd');

        expect(calculateAge(source)).toEqual(age);
    });

    it('can_calculate_age_from_datetime_string', () => {
        const age = 25;
        const source = format(subYears(new Date(), age), 'yyyy-MM-dd HH:mm:ss');

        expect(calculateAge(source)).toEqual(age);
    });

    it('can_calculate_age_from_date_object', () => {
        const age = 85;
        const source = subYears(new Date(), age);

        expect(calculateAge(source)).toEqual(age);
    });

    it('can_calculate_age_from_undefined', () => {
        expect(calculateAge(undefined)).toEqual(0);
    });

    it('can_calculate_age_from_null', () => {
        expect(calculateAge(null)).toEqual(0);
    });

    it('can_calculate_age_under_1', () => {
        expect(calculateAge(format(subDays(new Date(), 1), 'yyyy-MM-dd'))).toEqual(0);
    });
});
