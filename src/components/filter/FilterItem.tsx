import { router } from "@inertiajs/react";
import { format, subYears } from "date-fns";
import React from "react";
import { FilterOption, FilterValue } from "../../types";
import Select from 'react-select';
import { HiChevronDown } from "react-icons/hi2";
import Dropdown from "./Dropdown";
import cn from 'classnames';
import { Button } from "../common";

export function FilterItem({ filter }: { filter: FilterOption, path?: string }) {
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<string[]>([]);

    const [selectedOptions, setSelectedOptions] = React.useState<FilterValue[]>([]); // Filter type: select
    const hasFilters = selected.length > 0;

    // Populate values on load
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const search = new URLSearchParams(window.location.search);

            // Strip all index keys from the square brackets
            const filtersFromUrl = [];
            for (const [key, value] of search.entries()) {
                const updatedKey = key.replaceAll(/\[\d+\]/g, '[]');
                filtersFromUrl.push([updatedKey, value]);
            }

            // Conditional logic dependent on the filter type
            if (filter.type === 'date') {
                const fromDate = filtersFromUrl.find(([key]) => key === `${filter.name}[from]`)?.[1];
                const toDate = filtersFromUrl.find(([key]) => key === `${filter.name}[to]`)?.[1];
                if (fromDate && toDate) {
                    setSelected([fromDate, toDate]);
                }
            } else if (filter.type === 'greaterThan') {
                const selectedFromUrl = filtersFromUrl
                    .filter(([key]) => key === `${filter.name}-GTE`)
                    .map(([_, value]) => value);
                if (selectedFromUrl.length > 0) {
                    setSelected(selectedFromUrl);
                }
            } else if (filter.type === 'scope') {
                const selectedFromUrl = filtersFromUrl
                    .filter(([key]) => key === `scope${filter.name}`)
                    .map(([_, value]) => value);
                if (selectedFromUrl.length > 0) {
                    setSelected(selectedFromUrl);
                }
            } else if (filter.type === 'select') {
                const selectedFromUrl = filtersFromUrl
                    .filter(([key]) => key === `${filter.name}[]`)
                    .map(([_, value]) => value);
                if (selectedFromUrl.length > 0) {
                    setSelected(selectedFromUrl);
                    const selectedOptions = filter.options && filter.options.filter(item =>
                        selectedFromUrl.includes(item.value.toString())
                    );
                    if (selectedOptions && selectedOptions.length > 0) {
                        setSelectedOptions(selectedOptions);
                    }
                }
            } else {
                // Default case for 'options' type and others
                const selectedFromUrl = filtersFromUrl
                    .filter(([key]) => key === `${filter.name}[]`)
                    .map(([_, value]) => value);
                if (selectedFromUrl.length > 0) {
                    setSelected(selectedFromUrl);
                }
            }
        }
    }, [filter]);

    function handleInput(e: React.SyntheticEvent<HTMLInputElement>) {
        const { value, checked } = e.currentTarget;

        if (checked) {
            setSelected((curr) => [...curr, value]);
        } else {
            setSelected(selected.filter((f) => f !== value));
        }
    }

    function handleDateSelect(e: React.SyntheticEvent<HTMLInputElement>) {
        const { name, value } = e.currentTarget;

        // First value in "selected" will be the "from", second will be the "to"
        if (name.includes('from')) {
            return setSelected([value]);
        }

        if (name.includes('to')) {
            // Make sure we have a "from" value first
            if (selected.length === 0) {
                // We'll default to a year ago if nothing entered
                return setSelected([format(subYears(new Date(), 1), 'yyyy-MM-dd'), value]);
            }
            return setSelected([selected[0], value]);
        }

        return setSelected([]);
    }

    /**
     * Handle Select for FilterType: Select
     */
    const handleSelectedOptions = (options: FilterValue[] | any) => {
        setSelectedOptions(options);
        const selectedValues = options.map((option : FilterValue) => option.value.toString());

        if (selectedValues.length > 0) {
            setSelected(selectedValues);
        } else {
            setSelected([]);
        }
    };

    /**
     * For Filter Select
     * Removes the Clear Button
     */
    function NullComponent() {
        return null;
    }

    function handleSelect(e: React.SyntheticEvent<HTMLSelectElement>) {
        const { value } = e.currentTarget;

        if (value) {
            setSelected([value]);
        } else {
            setSelected([]);
        }
    }

    function handleText(e: React.SyntheticEvent<HTMLInputElement>) {
        const { value } = e.currentTarget;

        if (value) {
            setSelected([value]);
        } else {
            setSelected([]);
        }
    }

    function handleApply(e: React.FormEvent) {
        e.preventDefault();

        const search = new URLSearchParams(window.location.search);

        // Reset the page in the query
        search.set('page', '1');

        if (filter.type === 'date') {
            const [from, to] = selected;

            search.set(`${filter.name}[from]`, from ?? format(new Date(), 'yyyy-MM-dd'));
            search.set(`${filter.name}[to]`, to ?? format(new Date(), 'yyyy-MM-dd'));
        } else if (filter.type === 'greaterThan') {
            search.delete(`${filter.name}-GTE`);

            if (selected.length > 0) {
                search.set(`${filter.name}-GTE`, selected[0]);
            }
        } else if (filter.type === 'scope') {
            search.delete(`${filter.name}`);
            if (selected.length > 0) {
                search.set(`scope${filter.name}`, selected[0]);
            }
        } else {
            // Clear this filter first
            search.delete(`${filter.name}[]`);

            // Apply the filters to the query string
            selected.forEach((selectedValue) => {
                // Fall back to option equality filters
                search.append(`${filter.name}[]`, selectedValue);
            });
        }

        // Fetch new data
        router.get(`${window.location.pathname}?${search.toString()}`);
    }

    function handleClear() {
        const search = new URLSearchParams(window.location.search);

        // Reset the page in the query
        search.set('page', '1');

        // Clear this filter
        if (filter.type === 'date') {
            search.delete(`${filter.name}[from]`);
            search.delete(`${filter.name}[to]`);
        } else if (filter.type === 'greaterThan') {
            search.delete(`${filter.name}-GTE`);
        } else if (filter.type === 'scope') {
            search.delete(`scope${filter.name}`);
        } else {
            search.delete(`${filter.name}[]`);
        }

        // Reset the local state
        setSelected([]);
        setSelectedOptions([]);

        // Fetch new data
        router.get(`${window.location.pathname}?${search.toString()}`);
    }

    function handleClick(force?: boolean) {
        if (typeof force === 'boolean') {
            return setOpen(force);
        }

        setOpen(!isOpen);
    }

    return (
        <Dropdown onClose={() => setOpen(!open)} active={isOpen} title={
            <div
                onClick={() => handleClick()}
                className={cn(
                    'flex rounded-2xl border hover:cursor-pointer hover:border-accent bg-gray-600 px-2 py-1 items-center justify-between shrink-0 gap-2 text-xs text-white hover:bg-accent transition-colors',
                    {
                        '!bg-accent border-accent': hasFilters,
                    }
            )}>
                <p className="whitespace-nowrap">{filter.label}</p>
                <HiChevronDown />
            </div>
        }>
            <form
                className={`mt-2 flex max-h-[350px] min-w-[200px] max-w-[260px] flex-col gap-2 rounded-md border border-gray-300 bg-white shadow-lg ${ filter.type && filter.type === 'select' ? '' : 'overflow-y-scroll'}`}
                onSubmit={handleApply}
            >
                <div className="flex flex-col items-start gap-1 p-4">
                    {(!filter.type || filter.type === 'options') &&
                        filter.options?.map((option, i) => (
                            <div className="checkbox text-sm " key={`${option.label}-${i}`}>
                                <input
                                    type="checkbox"
                                    name={filter.name}
                                    id={option.label}
                                    value={option.value.toString()}
                                    checked={selected.includes(option.value.toString())}
                                    onChange={handleInput}
                                />
                                <label className="leading-tight" htmlFor={option.label}>
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    {filter.type === 'greaterThan' && filter.options && (
                        <label className="mb-2 w-full">
                            <div className="text-sm">Greater than or equal to</div>
                            <select
                                name={filter.name}
                                id={filter.label}
                                value={selected[0]}
                                onChange={handleSelect}
                                className="!p-2 text-sm w-full"
                            >
                                <option value="">Select option</option>
                                {filter.options?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}
                    {filter.type === 'scope' && filter.options && (
                        <label className="mb-2 w-full">
                            <select
                                name={filter.name}
                                id={filter.label}
                                value={selected[0]}
                                onChange={handleSelect}
                                className="!p-2 text-sm w-full"
                            >
                                <option value="">Select option</option>
                                {filter.options?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}
                    {filter.type === 'date' && (
                        <div className="mb-2 flex flex-col gap-4 w-full">
                            <label className="text-xs w-full">
                                From
                                <input
                                    type="date"
                                    name={`${filter.name}[from]`}
                                    id={`${filter.name}[from]`}
                                    onChange={handleDateSelect}
                                    value={selected[0] ?? ''}
                                    className="!p-2 text-sm w-full"
                                />
                            </label>
                            <label className="text-xs w-full">
                                To
                                <input
                                    type="date"
                                    name={`${filter.name}[to]`}
                                    id={`${filter.name}[to]`}
                                    onChange={handleDateSelect}
                                    value={selected[1] ?? ''}
                                    className="!p-2 text-sm w-full"
                                />
                            </label>
                        </div>
                    )}
                    {filter.type === 'select' && filter.options && (
                        <div className="w-full">
                            <Select
                                isMulti
                                options={filter.options}
                                className="basic-multi-select text-xs w-52 !transition-none"
                                classNamePrefix="select"
                                onChange={handleSelectedOptions}
                                components={{
                                    ClearIndicator: NullComponent, // Hide the ClearIndicator (X button) -> exits filter when clicked
                                }}
                                value={selectedOptions}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'rgb(111, 199, 182)',
                                        primary: 'rgb(111, 199, 182)',
                                    },
                                })}
                            />
                        </div>
                    )}
                    {filter.type === 'text' && (
                        <div className={'w-full'}>
                            <input
                                type="text"
                                name={filter.name}
                                placeholder={filter.label}
                                value={selected[0] ?? ''}
                                onChange={handleText}
                                className="!p-2 text-sm w-full"
                            />
                        </div>
                    )}
                </div>
                <div className="bg-gray-100 border-t border-gray-200 flex items-center gap-2 p-4 bottom-0 sticky">
                    <Button type="button" className="!min-w-[0px] flex-grow !px-2 text-sm !transition-none" onClick={handleClear} small>
                        Clear
                    </Button>
                    <Button type="submit" status="primary" className="!min-w-[0px] flex-grow !px-2 text-sm !transition-none" small>
                        Apply
                    </Button>
                </div>
            </form>
        </Dropdown>
    );
}
