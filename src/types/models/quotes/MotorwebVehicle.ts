export interface MotorwebVehicleResponse {
    id: number;
    created_at: string;
    updated_at: string;
    check_type: 'bvi' | 'motorcheck' | 'valuation';
    plate_or_vin: string;
    data: MotorwebVehicle;
}

export interface MotorwebVehicle {
    '@attributes': Attributes;
    'vehicle': BviCheck | MotorvehicleCheck;
}

interface Attributes {
    'version'?: string;
}

interface FirstRegistrationDateOverseas {
    'month'?: string;
    'year'?: string;
    'description'?: string;
}

interface Registration {
    'previous-country-of-registration'?: string;
    'first-registration-date-in-new-zealand'?: string;
    'registration-status'?: string;
    'cause-of-last-registration'?: string;
    'registered-overseas'?: string;
    'first-registration-date-overseas'?: FirstRegistrationDateOverseas;
    'last-registration-date'?: string;
}

interface Licence {
    'expiry-date'?: string;
    'licence-type'?: string;
    'issue-date'?: string;
    'issue-time'?: string;
    'continuous'?: string;
}

interface Wof {
    'last-inspection-date'?: string;
    'last-inspection-result'?: string;
    'expiry-date'?: string;
    'is-subject-to'?: string;
}

interface Cof {
    'is-subject-to'?: string;
}

interface Attributes2 {
    'data-retrieved'?: string;
}

interface Ruc {
    '@attributes': Attributes2;
    'is-subject-to'?: string;
}

interface Attributes3 {
    'current'?: string;
    'past-plate'?: string;
}

interface Plate {
    '@attributes'?: Attributes3;
    'plate-number'?: string;
    'plate-type'?: string;
    'effective-date'?: string;
}

interface Attributes4 {
    'latest'?: string;
}

interface OdometerReading {
    '@attributes'?: Attributes4;
    'reading'?: string;
    'reading-date'?: string;
    'reading-unit'?: string;
    'source'?: string;
}

interface Transmission {
    'type'?: string;
}

interface Attributes5 {
    'current': string;
    'owner-number': string;
    'suppressed-reason': string;
}

interface Owner {
    '@attributes': Attributes5;
    'ownership-date': string;
    'owner-status': string;
}

interface BviCheck {
    'registration'?: Registration;
    'licence'?: Licence;
    'wof'?: Wof;
    'cof'?: Cof;
    'ruc'?: Ruc;
    'year-of-manufacture'?: string;
    'make'?: string;
    'model'?: string;
    'mvr-model'?: string;
    'body-style'?: string;
    'vehicle-type'?: string;
    'vin'?: string;
    'chassis'?: string;
    'engine-number'?: string;
    'main-colour'?: string;
    'cc-rating'?: string;
    'country-of-origin'?: string;
    'assembly-type'?: string;
    'gross-vehicle-mass'?: string;
    'number-of-seats'?: string;
    'fuel-type'?: string;
    'vehicle-usage'?: string;
    'odometer-unit'?: string;
    'plate'?: Plate;
    'odometer-reading'?: OdometerReading;
    'transmission'?: Transmission;
    'model-code'?: string;
    'model-variant'?: string;
}

interface MotorvehicleCheck extends BviCheck {
    'number-of-owners'?: string;
    owner?: Owner;
}
