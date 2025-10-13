import {Product, VehicleType, VehicleTypeProduct} from '../../api';
import { QuoteRequestVehicleDriver } from './QuoteRequestVehicleDriver';

export interface QuoteRequestVehicle {
  id?: number;
  vehicle_type?: VehicleType;
  vehicle_type_product?: VehicleTypeProduct;
  registration?: string;
  make?: string;
  model?: string;
  year?: string;
  usage?: string;
  product?: Product;
  has_financially_interested_party?: boolean;
  financially_interested_party_detail?: string;
  owned_duration?: string;
  value?: number;
  storage_location?: string;
  storage_location_other?: string;
  is_heavy?: boolean;
  quote_request_id?: string;
  drivers?: QuoteRequestVehicleDriver[];
  key?: string;
  main_driver?: string;
}
