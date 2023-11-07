import React from "react";
import { FilterOption } from "../../types";
import Button from "../common/Button"
import { FilterItem } from "./FilterItem";
import { router } from "@inertiajs/react";

export function FilterOptions({ filterOptions }: { filterOptions: FilterOption[] }) {    
    function handleClear() {
        router.get(`${window.location.pathname}`);
    }

    return (
        <div className="flex items-center">
            {filterOptions.map(filter => (
                <FilterItem filter={filter} key={filter.name} />
            ))}
            <Button onClick={handleClear}>Clear filters</Button>
        </div>
    );
}

