import { format, parse } from "date-fns";

/**
 * Formats a date like "Jan 1, 2022 at 9:50am"
 */
export function formatDateNice(date: string|null|undefined, includeTime: boolean = true) {
    const formatString = includeTime ? "MMM d, yyyy 'at' h:mma" : 'MMM d, yyyy';
    const formatFunc = includeTime ? formatDateTime : formatDate;

    return formatFunc(date, formatString);
}

/**
 * Formats a date like "01/01/2022 09:50"
 */
export function formatDateForTable(date: string|null|undefined, includeTime: boolean = true) {
    return includeTime ? formatDateTime(date) : formatDate(date);
}

/**
 * Formats a date to Star Insure standard format - dd/mm/yyyy
 */
export function formatDate(date: Date|string|null|undefined, overrideFormatString?: string) {
    // If date is undefined or null
    if (!date) {
        return '';
    }

    const formatString = overrideFormatString || 'dd/MM/yyyy';

    // If date is a date object
    if (date instanceof Date) {
        return format(date, formatString);
    }

    /*
     * If date is a string, first attempt to parse it in non-standard formats
     * Only parse the first 10 characters of the string
     * dd/MM/yyyy, dd-MM-yyyy, dd.MM.yyyy
     */
    const nonStandardDate = date
        .substring(0, 10)
        .split('-').join('/')
        .split('.').join('/');

    const parsedDate = parse(nonStandardDate, 'dd/MM/yyyy', new Date());
    if (parsedDate.toString() !== 'Invalid Date') {
        return format(parsedDate, formatString);
    }

    // Then attempt to parse it natively
    const nativelyParsedDate = new Date(date);
    if (nativelyParsedDate.toString() !== 'Invalid Date') {
        return format(nativelyParsedDate, formatString);
    }

    // All attempts failed, log error in debug environment and return empty string
    if (process.env.NODE_ENV === 'development') {
        console.error(`Date format not recognized: ${date}`);
    }
    return '';
}

/**
 * Formats a dateTime to Star Insure standard format - dd/mm/yyyy hh:mm
 */
export function formatDateTime(dateTime: Date|string|null|undefined, overrideFormatString?: string) {
    // If date is undefined or null
    if (!dateTime) {
        return '';
    }

    const formatString = overrideFormatString || 'dd/MM/yyyy HH:mm';

    // If date is a date object
    if (dateTime instanceof Date) {
        return format(dateTime, formatString);
    }

    /*
     * If date is a string, first attempt to parse it in non-standard formats
     * dd/MM/yyyy HH:mm, dd-MM-yyyy HH:mm, dd.MM.yyyy HH:mm,
     * dd/MM/yyyy hh:mm a, dd-MM-yyyy hh:mm a, dd.MM.yyyy hh:mm a,
     * dd/MM/yyyy HH:mm:ss, dd-MM-yyyy HH:mm:ss, dd.MM.yyyy HH:mm:ss,
     * dd/MM/yyyy hh:mm:ss a, dd-MM-yyyy hh:mm:ss a, dd.MM.yyyy hh:mm:ss a
     */
    const nonStandardDateTime = dateTime
        // Remove commas between date and time
        .split(',').join('')

        // Only parse the first 22 characters of the string
        .substring(0, 22)

        // Replace dashes and dots with slashes
        .split('-').join('/')
        .split('.').join('/');

    const is12Hour = ['AM', 'PM'].includes(nonStandardDateTime.slice(-2).toUpperCase());
    const hasSeconds = nonStandardDateTime.split(':').length === 3;

    const nonStandardFormat = (`dd/MM/yyyy ${is12Hour ? 'hh' : 'HH'}:mm${hasSeconds ? ':ss' : ''} ${is12Hour ? 'a' : ''}`).trim();

    const parsedDateTime = parse(nonStandardDateTime, nonStandardFormat, new Date());
    if (parsedDateTime.toString() !== 'Invalid Date') {
        return format(parsedDateTime, formatString);
    }

    // Then attempt to parse it natively
    const nativelyParsedDateTime = new Date(dateTime);
    if (nativelyParsedDateTime.toString() !== 'Invalid Date') {
        return format(nativelyParsedDateTime, formatString);
    }

    // All attempts failed, log error in debug environment and return empty string
    if (process.env.NODE_ENV === 'development') {
        console.error(`Date format not recognized: ${dateTime}`);
    }
    return '';
}
