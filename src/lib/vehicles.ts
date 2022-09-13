import { VehicleType } from "../types";

export function sanitiseVehicleType(inputType: string): VehicleType {
    let type: VehicleType;

    switch (inputType) {
        case 'Camper':
        case 'Goods Van/Truck/Utility':
        case 'Bus':
        case 'Motor Caravan':
        case 'Trailer/Caravan':
        case 'TRAILER_CARAVAN':
        case 'TRAILER_NOT_DESIGNED_FOR_HIGHWAY_USE':
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
        case 'TRACTOR':
        case 'AGRICULTURAL_MACHINE':
        case 'HIGH_SPEED_AGRICULTURAL_VEHICLE': {
            type = 'motorcycle';
            break;
        }

        case 'Passenger Car/Van':
        case 'PASSENGER_CAR_VAN':
        case 'SPECIAL_PURPOSE_VEHICLE':
        case 'UNKNOWN':
        default:
            type = 'car';
    }

    return type;
}
