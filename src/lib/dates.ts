import { format } from "date-fns";

/**
 * Formats a date like "Jan 1, 2022"
 */
export function formatDateNice(date: string) {
    return format(new Date(date), "MMM d, yyyy");
}

/**
 * Formats a date like "01/01/2022 9:50AM"
 */
export function formatDateForTable(date: string, includeTime: boolean = true) {
    const formatString = includeTime ? 'dd/MM/yyyy h:mma' : 'dd/MM/yyyy';
    return format(new Date(date), formatString);
}
