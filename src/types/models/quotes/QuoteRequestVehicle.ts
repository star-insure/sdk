import { Product, VehicleType } from "../../api";
import { QuoteRequestVehicleDriver } from "./QuoteRequestVehicleDriver";

export interface QuoteRequestVehicle {
    id: number;
    vehicle_type: VehicleType | null;
    registration: string | null;
    make: string | null;
    model: string | null;
    year: string | null;
    usage: string | null;
    product: Product | null;
    has_financially_interested_party: boolean | null;
    financially_interested_party_detail: string | null;
    owned_duration: string | null;
    value: number | null;
    storage_location: string | null;
    is_heavy: boolean | null;
    quote_request_id: string;
    drivers?: QuoteRequestVehicleDriver[];
}
