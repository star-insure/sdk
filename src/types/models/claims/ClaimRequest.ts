import { Condition, Frequency, VehicleType } from "../../api";

export type ClaimRequestStatus = 'new' | 'draft' | 'in-progress' | 'exported';

export interface ClaimRequest {
    'id': string;
    'reference'?: string;
    'status'?: ClaimRequestStatus;
    'submitted_at'?: string;
    'reminder_sent_at'?: string;
    'claim_number'?: string;
    'policyholder'?: string;
    'policy_number'?: string;
    'policy_cover_number'?: string;
    'policy_version_number'?: string;
    'policy_contact_name'?: string;
    'mobile'?: string;
    'email'?: string;
    'alternative_contact'?: string;
    'broker_firm'?: string;
    'broker_name'?: string;
    'address'?: string;
    'terms_accepted_by'?: string;
    'loss_estimate'?: number;
    'excess'?: number;
    'excess_status'?: string;
    'sum_insured'?: number;
    'cover_type'?: string;
    'reserve_expense'?: number;
    'fault_flag'?: string;
    'category'?: string;
    'substatus'?: string;
    'severity_code'?: string;
    'action'?: string;
    'vehicle_type_code'?: string;
    'vehicle_make_code'?: string;
    'eglobal_user_id'?: string;
    'client_comments'?: string;
    'insurer_comments'?: string;
    'status_line'?: string;
    'claim_summary'?: string;
    'driver_gender'?: string;
    'is_assessor_required'?: boolean;
    'acceptance_code'?: string;
    'client_number'?: string;
    'attachments'?: ClaimRequestAttachment[];
    'notes'?: string;
}

export interface ClaimRequestAttachment {
    'id': number;
    'created_at': string;
    'updated_at': string;
    'claim_request_id': ClaimRequest['id'];
    'title': string;
    'url': string;
    'disk'?: string;
    'claim_request_type'?: string;
}

export interface DamageClaimRequest extends ClaimRequest {
    'claim_type': 'damage';
    'vehicle_registration'?: string;
    'vehicle_vin'?: string;
    'vehicle_make_and_model'?: string;
    'vehicle_make'?: string;
    'vehicle_model'?: string;
    'vehicle_year'?: string|number;
    'vehicle_type'?: VehicleType;
    'finance_company'?: string;
    'finance_phone'?: string;
    'driver_name'?: string;
    'driver_dob'?: string;
    'driver_relationship'?: string;
    'driver_licence_number'?: string;
    'driver_licence_version'?: string;
    'driver_licence_issuer'?: string;
    'was_intoxicated'?: boolean;
    'intoxicated_details'?: string;
    'has_conviction'?: boolean;
    'conviction_details'?: string;
    'has_recent_claim'?: boolean;
    'incident_details'?: Incident[];
    'was_disqualified'?: boolean;
    'disqualified_details'?: string;
    'was_vehicle_used_without_consent'?: boolean;
    'vehicle_used_without_consent_details'?: string;
    'has_existing_vehicle_damage'?: boolean;
    'existing_vehicle_damage_details'?: string;
    'was_refused_insurance'?: boolean;
    'refused_insurance_details'?: string;
    'has_additional_information'?: boolean;
    'additional_information_details'?: string;
    'accident_location'?: string;
    'accident_suburb'?: string;
    'accident_happened_at'?: string;
    'accident_speed'?: string;
    'impact_speed'?: string;
    'road_surface'?: string;
    'weather_conditions'?: string;
    'had_passengers'?: boolean;
    'passenger_details'?: Passenger[];
    'has_witnesses'?: boolean;
    'witness_details'?: Witness[];
    'accident_description'?: string;
    'vehicle_location'?: string;
    'is_vehicle_drivable'?: boolean;
    'vehicle_drivable_details'?: string;
    'was_warning_given'?: boolean;
    'warning_given_details'?: string;
    'was_third_party_responsible'?: boolean;
    'third_party_responsible_details'?: string;
    'was_third_party_involved'?: boolean;
    'third_party_vehicle_registration'?: string;
    'third_party_vehicle_owner'?: string;
    'third_party_vehicle_make'?: string;
    'third_party_vehicle_model'?: string;
    'third_party_vehicle_driver_name'?: string;
    'third_party_vehicle_driver_mobile'?: string;
    'third_party_vehicle_driver_phone'?: string;
    'third_party_vehicle_driver_address'?: string;
    'third_party_vehicle_insurance_company'?: string;
    'third_party_vehicle_damage'?: string;
    'third_party_details_provided'?: string;
    'were_police_notified'?: boolean;
    'did_police_attend'?: boolean;
    'police_officer_name'?: string;
    'police_officer_email'?: string;
    'police_reference'?: string;
    'police_station_address'?: string;
    'police_did_test'?: boolean;
    'police_issued_notice'?: boolean;
    'repairer_name'?: string;
    'repairer_phone'?: string;
    'repairer_email'?: string;
    'is_claiming_protective_gear'?: boolean;
    'is_protective_gear_insured_elsewhere'?: boolean;
    'protective_gear_details'?: ClaimItem[];
    'is_claiming_contents'?: boolean;
    'is_contents_insured_elsewhere'?: boolean;
    'contents_details'?: ClaimItem[];
}

export interface Incident {
    'year': string;
    'month': string;
    'description': string;
}

export interface Passenger {
    'name': string;
    'phone'?: string;
    'email'?: string;
    'address'?: string;
}

export interface Witness {
    'name': string;
    'phone'?: string;
    'email'?: string;
    'address'?: string;
}

export interface ClaimItem {
    'description': string;
    'purchased_from'?: string;
    'age'?: string;
    'purchase_price'?: string;
    'replacement_cost'?: string;
}

export interface GlassClaimRequest extends ClaimRequest {
    'claim_type': 'glass';
    'vehicle_registration'?: string;
    'vehicle_vin'?: string;
    'vehicle_make_and_model'?: string;
    'vehicle_make'?: string;
    'vehicle_model'?: string;
    'vehicle_year'?: string|number;
    'accident_location'?: string;
    'accident_happened_at'?: string;
    'accident_description'?: string;
    'repairer_name'?: string;
    'repairer_phone'?: string;
    'repairer_email'?: string;
}

export interface TheftClaimRequest extends ClaimRequest {
    'claim_type': 'theft';
    // Registered owner details
    'is_registered_under_same_name'?: boolean;
    'registered_name'?: string;
    'registered_address'?: string;
    'registered_phone'?: string;
    // Lease/hire-purchase details
    'is_leased'?: boolean;
    'lease_name'?: string;
    'lease_address'?: string;
    'lease_phone'?: string;
    'lease_number'?: string;
    'lease_payment_amount'?: string|number;
    'lease_payment_frequency'?: Frequency;
    // Declaration details
    'has_conviction'?: boolean;
    'conviction_details'?: string;
    'has_recent_claim'?: boolean;
    'incident_details'?: Incident[];
    'was_disqualified'?: boolean;
    'disqualified_details'?: string;
    'was_vehicle_used_without_consent'?: boolean;
    'vehicle_used_without_consent_details'?: string;
    'has_existing_vehicle_damage'?: boolean;
    'existing_vehicle_damage_details'?: string;
    'was_refused_insurance'?: boolean;
    'refused_insurance_details'?: string;
    'has_additional_information'?: boolean;
    'additional_information_details'?: string;
    // Vehicle details
    'vehicle_registration'?: string;
    'vehicle_vin'?: string;
    'vehicle_make_and_model'?: string;
    'vehicle_make'?: string;
    'vehicle_model'?: string;
    'vehicle_year'?: string|number;
    'vehicle_type'?: VehicleType;
    'finance_company'?: string;
    'finance_phone'?: string;
    'vehicle_purchased_on'?: string;
    'vehicle_purchased_from'?: string;
    'vehicle_purchased_price'?: string|number;
    'vehicle_value'?: number;
    'was_vehicle_for_sale'?: boolean;
    'vehicle_first_asking_price'?: string|number;
    'vehicle_last_asking_price'?: string|number;
    'vehicle_sale_duration'?: string;
    'vehicle_purchaser_name'?: string;
    'vehicle_purchaser_address'?: string;
    'vehicle_purchaser_phone'?: string;
    'vehicle_hp_cc_rating'?: string;
    'vehicle_transmission'?: string;
    'vehicle_engine_number'?: string;
    'vehicle_has_air_conditioning'?: boolean;
    'vehicle_has_cng'?: boolean;
    'vehicle_has_lpg'?: boolean;
    'vehicle_colour'?: string;
    'vehicle_colour_changes'?: string;
    'was_vehicle_repaired'?: boolean;
    'vehicle_repaired_damage_details'?: string;
    'vehicle_repairer'?: string;
    'vehicle_repaired_on'?: string;
    'was_vehicle_damaged'?: boolean;
    'vehicle_damage_details'?: string;
    'vehicle_tyre_condition_front_right'?: Condition;
    'vehicle_tyre_condition_front_left'?: Condition;
    'vehicle_tyre_condition_rear_right'?: Condition;
    'vehicle_tyre_condition_rear_left'?: Condition;
    'vehicle_tyre_condition_spare'?: string;
    'wheel_assembly_details'?: string;
    'vehicle_radio_type'?: string;
    'vehicle_radio_make'?: string;
    'vehicle_radio_location'?: string;
    'vehicle_radio_fixing'?: string;
    'vehicle_speaker_make'?: string;
    'has_additional_accessories'?: boolean;
    'accessory_details'?: Accessory[];
    'has_identifiable_contents'?: boolean;
    'identifiable_contents_details'?: Contents[];
    'vehicle_serviced_by'?: string;
    'has_service_invoices'?: boolean;
    'vehicle_wof_issued_by'?: string;
    'vehicle_wof_issued_on'?: string;
    'vehicle_wof_expires_on'?: string;
    'vehicle_floor_type'?: string;
    'vehicle_interior_details'?: string;
    'vehicle_seatbelt_type'?: string;
    'vehicle_seatbelt_condition'?: Condition;
    'vehicle_engine_condition'?: Condition;
    'vehicle_gearbox_condition'?: Condition;
    'vehicle_transmission_condition'?: Condition;
    'vehicle_suspension_condition'?: Condition;
    'vehicle_steering_condition'?: Condition;
    'vehicle_seats_condition'?: Condition;
    'vehicle_trims_condition'?: Condition;
    'vehicle_body_condition'?: Condition;
    'vehicle_paint_condition'?: Condition;
    'vehicle_dashboard_condition'?: Condition;
    'did_engine_use_oil'?: boolean;
    'vehicle_engine_oil_per_month'?: string;
    'vehicle_ran_well'?: boolean;
    'vehicle_ran_poorly_details'?: string;
    // Theft details
    'theft_details'?: string;
    'theft_happened_on'?: string;
    'theft_discovered_at'?: string;
    'last_seen_at'?: string;
    'vehicle_last_used_by'?: string;
    'address_stolen_from'?: string;
    'were_windows_up'?: boolean;
    'windows_down_details'?: string;
    'were_doors_locked'?: boolean;
    'doors_unlocked_details'?: string;
    'has_theft_evidence'?: boolean;
    'theft_evidence_details'?: string;
    'has_steering_lock'?: boolean;
    'was_steering_lock_activated'?: boolean;
    'has_alarm'?: boolean;
    'was_alarm_active'?: boolean;
    'alarm_inactive_details'?: string;
    'was_boot_locked'?: boolean;
    'boot_unlocked_details'?: string;
    'keys_count'?: string;
    'key_holder_name'?: string;
    'key_holder_phone'?: string;
    'key_holder_address'?: string;
    'keys_location'?: string;
    'policyholder_whereabouts_details'?: string;
    // Police details
    'were_police_notified'?: boolean;
    'did_police_attend'?: boolean;
    'police_officer_name'?: string;
    'police_officer_email'?: string;
    'police_reference'?: string;
    'police_station_address'?: string;
    'police_not_notified_details'?: string;
    'police_have_suspect'?: boolean;
    'police_suspect_details'?: string;
    'policyholder_has_suspect'?: boolean;
    'policyholder_suspect_details'?: string;
    'was_theft_witnessed'?: boolean;
    'theft_witnessed_details'?: string;
    'has_cctv_footage'?: boolean;
    'cctv_footage_details'?: string;
    // Contents details
    'is_claiming_contents'?: boolean;
    'is_contents_insured_elsewhere'?: boolean;
    'contents_details'?:  ClaimItem[];
}

export interface Accessory {
    'description': string;
    'age': string;
    'condition': string;
}

export interface Contents {
    'description': string;
}
