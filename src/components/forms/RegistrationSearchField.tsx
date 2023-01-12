import React from 'react';
import { sanitiseVehicleType } from '../../lib';
import {
  ApiResponse,
  FormStatus,
  MotorwebVehicleResponse,
  VehicleType,
} from '../../types';
import { useToast } from '../../lib/toast';

export interface VehicleData extends MotorwebVehicleResponse {
  make: string;
  model: string;
  year: string;
  vehicle_type: VehicleType;
  is_heavy: boolean;
}

export interface RegistrationSearchOnChange {
  registration: string;
}

interface Props {
  name?: string;
  onChange?: (values: RegistrationSearchOnChange) => void;
  onVehicleDataFound: (vehicleData: VehicleData) => void;
  apiUrl?: string;
  showOdometerReadingField?: boolean;
  showConditionField?: boolean;
  initialRegistrationValue?: string;
}

export const conditionOptions = [
  'POOR',
  'FAIR',
  'AVERAGE',
  'GOOD',
  'VERY_GOOD',
  'AS_NEW',
  'NEW',
];

export default function RegistrationSearchField({
  name = 'registration_search',
  initialRegistrationValue = '',
  onVehicleDataFound,
  apiUrl = '/api/rego-search',
  showOdometerReadingField = false,
  showConditionField = false,
  onChange,
}: Props) {
  const [rego, setRego] = React.useState<string>(initialRegistrationValue);
  const [odo, setOdo] = React.useState<string>('');
  const [condition, setCondition] = React.useState<string>('GOOD');

  const [status, setStatus] = React.useState<FormStatus>('idle');
  const { addToast } = useToast();

  function handleChange(
    e: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (e.currentTarget.name === 'registration_search') {
      setRego(e.currentTarget.value?.toUpperCase() || '');
    }

    if (e.currentTarget.name === 'odo_search') {
      setOdo(e.currentTarget.value);
    }

    if (e.currentTarget.name === 'condition_search') {
      setCondition(e.currentTarget.value);
    }

    if (onChange) {
      onChange({ registration: e.currentTarget.value.toUpperCase() });
    }
  }

  function handleKeydown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  async function handleSearch() {
    setStatus('processing');

    const payload = {
      registration: rego,
      odometerReading: odo,
      condition,
    };

    // Turn the payload in to a query string
    // @ts-ignore
    const query = new URLSearchParams(payload).toString();

    const res = await fetch(`${apiUrl}?${query}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      addToast({
        message: `There was an error with the provided registration.`,
        status: 'error',
        timeout: 3000,
      });
      setStatus('error');
      return;
    }

    const { data, ok }: ApiResponse<MotorwebVehicleResponse> = await res.json();

    if (!ok || !data) {
      addToast({
        message: `Failed to find vehicle, please complete manually.`,
        status: 'error',
        timeout: 3000,
      });
      setStatus('error');
      return;
    }

    const vehicleData = data.data.vehicle;

    const make = vehicleData.make;
    const model = vehicleData.model;
    const year = vehicleData['year-of-manufacture'];
    const weight = vehicleData['gross-vehicle-mass']
      ? parseInt(vehicleData['gross-vehicle-mass'].replaceAll(',', ''))
      : 0;
    const vehicleType = vehicleData['vehicle-type'];

    if (!make || !model || !year || !vehicleType) {
      addToast({
        message: `We couldn't find all of your data, please complete manually.`,
        status: 'error',
        timeout: 3000,
      });
      setStatus('error');
    }

    onVehicleDataFound({
      ...data,
      make: make || '',
      model: model || '',
      year: year || '',
      vehicle_type: vehicleType ? sanitiseVehicleType(vehicleType) : 'car',
      is_heavy: (weight && weight > 3500) || false,
    });

    setStatus('success');
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-wrap gap-3 bg-gray-100 rounded-md p-3">
        {showOdometerReadingField ||
          (showConditionField && (
            <div className="w-full grid grid-cols-2 gap-3">
              {showOdometerReadingField && (
                <label>
                  Approx. km travelled
                  <input
                    onKeyDown={handleKeydown}
                    type="number"
                    name="odo_search"
                    id="odo_search"
                    value={odo}
                    onChange={handleChange}
                    className={`transition-all ${
                      status === 'processing'
                        ? 'pointer-events-none opacity-50'
                        : ''
                    }`}
                    disabled={status === 'processing'}
                  />
                </label>
              )}

              {showConditionField && (
                <label>
                  Vehicle condition
                  <select
                    name="condition_search"
                    id="condition_search"
                    value={condition}
                    onChange={handleChange}
                    className={`transition-all ${
                      status === 'processing'
                        ? 'pointer-events-none opacity-50'
                        : ''
                    }`}
                    disabled={status === 'processing'}
                  >
                    {conditionOptions.map(conditionOption => (
                      <option key={conditionOption}>{conditionOption}</option>
                    ))}
                  </select>
                </label>
              )}
            </div>
          ))}

        <input
          onKeyDown={handleKeydown}
          placeholder="Search for your rego"
          type="text"
          name={name}
          id={name}
          value={rego}
          onChange={handleChange}
          className={`flex-grow transition-all ${
            status === 'processing' ? 'pointer-events-none opacity-50' : ''
          }`}
          disabled={status === 'processing'}
        />

        <button
          title="Search"
          type="button"
          onClick={handleSearch}
          disabled={status === 'processing'}
          className={`bg-teal px-4 py-3 rounded-md transition-all`}
        >
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
