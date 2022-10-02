import { format, parse } from "date-fns";

export function parseDate(dateString: string): Date {
    // Make sure we've only got 10 characters
    return parse(dateString.substring(0, 10), 'yyyy-MM-dd', new Date());
}

export function parseDateTime(dateTimeString: string): Date {
    return parse(dateTimeString, 'yyyy-MM-dd HH:mm:ss', new Date());
}

/**
 * Formats a date like "Jan 1, 2022 at 9:50am"
 */
export function formatDateNice(date: string, includeTime: boolean = true) {
    const formatString = includeTime ? "MMM d, yyyy 'at' h:mma" : 'MMM d, yyyy';
    const parsed = includeTime ? parseDateTime(date) : parseDate(date);

    return format(parsed, formatString);
}

/**
 * Formats a date like "01/01/2022 9:50AM"
 */
export function formatDateForTable(date: string, includeTime: boolean = true) {
    const formatString = includeTime ? 'dd/MM/yyyy h:mma' : 'dd/MM/yyyy';
    const parsed = includeTime ? parseDateTime(date) : parseDate(date);

    return format(parsed, formatString);
}
