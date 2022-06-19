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
export function formatDateForTable(date: string) {
    return format(new Date(date), 'dd/MM/yyyy h:mma');
}
