/**
 * Safely rounds a number
 */
export function round(value: number): number {
    return Number(Math.round(parseFloat(value + 'e' + 2)) + 'e-' + 2)
}

/**
 * Gets the GST value from a number
 */
export function getGst(value: number): number {
    return round(value * 3 / 23);
}

/**
 * Adds GST to a number
 */
export function addGst(value: number): number {
    return round(value * 1.15);
}

/**
 * Subtracts GST from a number
 */
export function subtractGst(value: number): number {
    return round(value - getGst(value));
}

/**
 * Calculates the various GST values on a figure
 */
export function gstCalc(input: number|string): {
    gst: number,
    amountInclusive: number,
    amountExclusive: number
} {
    let value = input;

    if (typeof value === 'string') {
        value = parseFloat(value.replace(/[^0-9.]/g, ''));
    }

    value = round(value);

    return {
        gst: getGst(value),
        amountInclusive: addGst(value),
        amountExclusive: subtractGst(value)
    }
}

/**
 * Formats a value nicely
 */
 export function formatMoney(value: string|number, decimals: number = 2): string {
    let toFormat = value;
    if (typeof value === 'string') {
        toFormat = value.replace(/[^\d.-]/g, '')
    }

    return Number(toFormat).toLocaleString('en', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
}

/**
 * Turns a formatted value in to a float
 */
export function formatNumber(value: string): number {
    return parseFloat(value.replace(/[^0-9.]/g, ''));
}
