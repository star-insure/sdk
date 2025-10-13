import {VehicleType, VehicleTypeProduct} from "../types";

export function sanitiseVehicleType(inputType: string): VehicleType {
    let type: VehicleType;

    switch (inputType) {
        case 'Camper':
        case 'Goods Van/Truck/Utility':
        case 'Bus':
        case 'Motor Caravan':
        case 'Trailer/Caravan':
        case 'TRAILER_CARAVAN':
        case 'Trailer Not Designed For Highway Use':
        case 'TRAILER_NOT_DESIGNED_FOR_HIGHWAY_USE':
        case 'Mobile Machine':
        case 'MOBILE_MACHINE':
        case 'GOODS_VAN_TRUCK_UTILITY':
        case 'BUS':
        case 'MOTOR_CARAVAN': {
            type = 'motorhome';
            break;
        }

        case 'Motorcycle':
        case 'Moped':
        case 'ATV':
        case 'Agricultural Machine':
        case 'MOTORCYCLE':
        case 'MOPED':
        case 'Tractor':
        case 'TRACTOR':
        case 'AGRICULTURAL_MACHINE':
        case 'High Speed Agricultural Vehicle':
        case 'HIGH_SPEED_AGRICULTURAL_VEHICLE': {
            type = 'motorcycle';
            break;
        }

        case 'Passenger Car/Van':
        case 'PASSENGER_CAR_VAN':
        case 'Special Purpose Vehicle':
        case 'SPECIAL_PURPOSE_VEHICLE':
        case 'UNKNOWN':
        default:
            type = 'car';
    }

    return type;
}

export function identifyMotorhomeOrCaravan(inputType: string): VehicleTypeProduct {
    let type: VehicleTypeProduct;

    switch (inputType) {
        case 'CC': // Cab-Chassis only
        case 'FT': // Flat Deck Truck
        case 'HB': // Heavy Bus/Service Coach
        case 'HV': // Heavy Van
        case 'LB': // Minibus
        case 'LV': // Light Van
        case 'OT': // Other Truck
        case 'SC': // Self Propelled Caravan
        case 'UT': { // Utility
            type = 'motorhome';
            break;
        }

        case 'TC': // Caravan
        case 'TD': // Domestic Trailer
        case 'TF': // Flat Deck Trailer
        case 'TO': { // Other Commercial Trailer
            type = 'caravan';
            break;
        }

        default:
            type = 'car';
    }

    return type;
}

export function isTinyHome(input: string): boolean {
    const normalized = input.toLowerCase();
    return (
        normalized.includes('tiny home') ||
        normalized.includes('tinyhome') ||
        normalized.includes('tiny house') ||
        normalized.includes('tinyhouse')
    );
}

export function getVehicleType(vehicleType: string, model: string, bodyStyle?: string) : VehicleTypeProduct {
    var vehicle: VehicleType = sanitiseVehicleType(vehicleType);

    if (vehicle === 'motorhome' && bodyStyle) {
        // Check for Tiny home value in model
        if (isTinyHome(model)) {
            return 'tinyhome';
        }
        // Check for motorhome or caravan value in body style
        if (identifyMotorhomeOrCaravan(bodyStyle) === 'caravan') {
            return 'caravan';
        }
        return vehicle;
    }

    return vehicle ?? 'car'; // Default
}
