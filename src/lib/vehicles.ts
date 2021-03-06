import { VehicleType } from "../types";

export function sanitiseVehicleType(inputType: string): VehicleType {
    let type: VehicleType;

    switch (inputType) {
        case 'TRAILER_CARAVAN':
        case 'TRAILER_NOT_DESIGNED_FOR_HIGHWAY_USE':
        case 'MOBILE_MACHINE':
        case 'GOODS_VAN_TRUCK_UTILITY':
        case 'BUS':
        case 'MOTOR_CARAVAN': {
            type = 'motorhome';
            break;
        }
        case 'MOTORCYCLE':
        case 'ATV':
        case 'MOPED':
        case 'TRACTOR':
        case 'AGRICULTURAL_MACHINE':
        case 'HIGH_SPEED_AGRICULTURAL_VEHICLE': {
            type = 'motorcycle';
            break;
        }
        case 'PASSENGER_CAR_VAN':
        case 'SPECIAL_PURPOSE_VEHICLE':
        case 'UNKNOWN':
        default:
            type = 'car';
    }

    return type;
}
