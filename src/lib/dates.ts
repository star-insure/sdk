import { format } from "date-fns";

/**
 * Formats a date like "Jan 1, 2022 at 9:50am"
 */
export function formatDateNice(date: string, includeTime: boolean = true) {
    const formatString = includeTime ? "MMM d, yyyy 'at' h:mma" : 'MMM d, yyyy';
    return format(new Date(date), formatString);
}

/**
 * Formats a date like "01/01/2022 9:50AM"
 */
export function formatDateForTable(date: string, includeTime: boolean = true) {
    const formatString = includeTime ? 'dd/MM/yyyy H:mm' : 'dd/MM/yyyy';
    return format(new Date(date), formatString);
}
