import React from 'react';
import { calculateAge } from '../../lib';
import { padStart } from 'lodash';

interface Props {
  name?: string;
  id?: string;
  onChange: (dateString: string) => void;
  value?: string;
  maxYear?: number;
  showAge?: boolean;
  isRequired?: boolean;
}

export default function DateOfBirthField({
  name = 'dob',
  id = 'dob',
  onChange,
  value,
  maxYear = 0,
  showAge = false,
  isRequired = true
}: Props) {
  const dayOptions = [...Array.from(Array(31).keys())].map(value => {
    return padStart(`${value + 1}`, 2, '0');
  });

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthOptions = [...Array.from(Array(12).keys())].map(value => {
    return {
      title: months[value],
      value: padStart(`${value + 1}`, 2, '0'),
    };
  });

  // Create 100 years of options, subtracting the maximum year if provided
  const yearOptions = [...Array.from(Array(100).keys())].map(value => {
    return maxYear ? maxYear - value : new Date().getFullYear() - value;
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.currentTarget;

    let y = name.includes('year') ? value : year;
    let m = name.includes('month') ? value : month;
    let d = name.includes('day') ? value : day;

    onChange(`${y}-${m}-${d}`);
  }

  const [year, month, day] = value ? value.split('-') : ['', '', ''];
  const isValidDate =
    year && month && day && !isNaN(Date.parse(`${year}-${month}-${day}`));

  const styleReq = {
    backgroundPosition: 'top 10px right 3px, center right 10px',
  }

  const style = {
    backgroundPosition: 'right 0.5rem center',
    paddingRight: '1.5rem'
  }

  return (
    <span className="flex flex-col gap-2">
      <span className="flex w-full border border-gray-300 rounded-lg bg-white">
        <select
          name={`${name}_day`}
          id={`${id}_day`}
          value={day}
          className="flex-grow focus:outline-none border-0 !mr-[3px] lg:pl-4 xl:pl-2"
          onChange={handleChange}
          required={isRequired}
          style={isRequired ? styleReq : style}
        >
          <option value="">Day</option>
          {dayOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name={`${name}_month`}
          id={`${id}_month`}
          value={month}
          className="flex-grow focus:outline-none border-0 !mr-[3px] lg:pl-4 xl:pl-2"
          onChange={handleChange}
          required={isRequired}
          style={isRequired ? styleReq : style}
        >
          <option value="">Month</option>
          {monthOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
        <select
          name={`${name}_year`}
          id={`${id}_year`}
          value={year}
          className="flex-grow focus:outline-none border-0 !mr-[3px] lg:pl-4 xl:pl-2"
          onChange={handleChange}
          required={isRequired}
          style={isRequired ? styleReq : style}
        >
          <option value="">Year</option>
          {yearOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
      {showAge && value && isValidDate && (
        <span className="font-bold">Age: {calculateAge(value)} years</span>
      )}
    </span>
  );
}
