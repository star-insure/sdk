import { formatDateForTable, formatDateNice, formatDate, formatDateTime } from '../src/lib/dates';

describe('dates', () => {
    it('can_format_date_for_table', () => {
        expect(formatDateForTable('2022-06-17 09:32:54')).toEqual('17/06/2022 09:32');
    });

    it('can_format_date_nice', () => {
        expect(formatDateNice('2022-06-17 09:32:54', false)).toEqual('Jun 17, 2022');
        expect(formatDateNice('2022-06-17 09:32:54', true)).toEqual('Jun 17, 2022 at 9:32AM');
    });

    it('can format date to Star Insure standard format', () => {
        const dateObj = new Date(2024, 2, 23);
        const expected = '23/03/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    });

    it('can format undefined date to empty string', () => {
        const dateObj = undefined;
        const expected = '';

        expect(formatDate(dateObj)).toEqual(expected);
    });

    it('can format ISO date string to Star Insure standard format', () => {
        const dateObj = '2024-03-23T20:00:00.000Z';
        const expected = '24/03/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    });

    it('can format UTC date string to Star Insure standard format', () => {
        const dateObj = 'Sat, 23 Mar 2024 20:00:00 GMT';
        const expected = '24/03/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    });

    it('can format date string even when its Star Insure standard format', () => {
        const dateObj = '23/03/2024, 8:00:00 PM';
        const expected = '23/03/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    });

    it('can format js date object toString to Star Insure standard format', () => {
        const dateObj = new Date(2024, 1, 23).toString();
        const expected = '23/02/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    });

    it('can format js date object toDateString to Star Insure standard format', () => {
        const dateObj = new Date(2024, 2, 23).toDateString();
        const expected = '23/03/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    });

    it('can convert date string of format MM/dd/YYYY to Star Insure standard format', () => {
        const dateObj = '04/23/2024';
        const expected = '23/04/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    })

    it('can convert date string of format MM-dd-YYYY to Star Insure standard format', () => {
        const dateObj = '04-23-2024';
        const expected = '23/04/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    })

    it('can convert date string of format MM.dd.YYYY to Star Insure standard format', () => {
        const dateObj = '04.23.2024';
        const expected = '23/04/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    })

    it('can convert date string of format dd/MM/YYYY to Star Insure standard format', () => {
        const dateObj = '23/04/2024';
        const expected = '23/04/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    })

    it('can convert date string of format dd-MM-YYYY to Star Insure standard format', () => {
        const dateObj = '23-04-2024';
        const expected = '23/04/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    })

    it('can convert date string of format dd.MM.YYYY to Star Insure standard format', () => {
        const dateObj = '23.04.2024';
        const expected = '23/04/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    })

    it('can return empty string if date string is invalid', () => {
        const dateObj = '02 - 05 - 2024';
        const expected = '';

        expect(formatDate(dateObj)).toEqual(expected);
    })

    it('can format date with single digit day and month', () => {
        const dateObj = '2/3/2024';
        const expected = '02/03/2024';

        expect(formatDate(dateObj)).toEqual(expected);
    });
});

describe('dateTime', () => {
    it('can format dateTime to Star Insure standard format', () => {
        const dateObj = new Date(2024, 2, 23, 20, 0);
        const expected = '23/03/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    });

    it('can format undefined dateTime to empty string', () => {
        const dateObj = undefined;
        const expected = '';

        expect(formatDateTime(dateObj)).toEqual(expected);
    });

    it('can format ISO dateTime string to Star Insure standard format', () => {
        const dateObj = '2024-03-23T20:00:00.000Z';
        const expected = '24/03/2024 01:30';

        expect(formatDateTime(dateObj)).toEqual(expected);
    });

    it('can format UTC dateTime string to Star Insure standard format', () => {
        const dateObj = 'Sat, 23 Mar 2024 20:00:00 GMT';
        const expected = '24/03/2024 01:30';

        expect(formatDateTime(dateObj)).toEqual(expected);
    });

    it('can format dateTime string with non standard time format', () => {
        const dateObj = '23/03/2024, 8:00:00 PM';
        const expected = '23/03/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    });

    it('can format js date object toString to Star Insure standard format', () => {
        const dateObj = new Date(2024, 1, 23, 20, 0).toString();
        const expected = '23/02/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    });

    it('can convert date string of format MM/dd/YYYY hh:mm a to Star Insure standard format', () => {
        const dateObj = '04/23/2024 08:00 PM';
        const expected = '23/04/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    })

    it('can convert date string of format MM-dd-YYYY hh:mm a to Star Insure standard format', () => {
        const dateObj = '04-23-2024 08:00 PM';
        const expected = '23/04/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    })

    it('can convert date string of format MM.dd.YYYY HH:mm to Star Insure standard format', () => {
        const dateObj = '04.23.2024 20:00';
        const expected = '23/04/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    })

    it('can convert date string of format dd/MM/YYYY HH:mm to Star Insure standard format', () => {
        const dateObj = '23/04/2024 20:00';
        const expected = '23/04/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    })

    it('can convert date string of format dd-MM-YYYY hh:mm a to Star Insure standard format', () => {
        const dateObj = '23-04-2024 08:00 PM';
        const expected = '23/04/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    })

    it('can convert date string of format dd.MM.YYYY HH:mm to Star Insure standard format', () => {
        const dateObj = '23.04.2024 20:00';
        const expected = '23/04/2024 20:00';

        expect(formatDateTime(dateObj)).toEqual(expected);
    })

    it('can return empty string if dateTime string is invalid', () => {
        const dateObj = '02 - 05 - 2024 08:00 PM';
        const expected = '';

        expect(formatDateTime(dateObj)).toEqual(expected);
    })

    it('can format dateTime with single digit numbers', () => {
        const dateObj = '2/3/2024 8:5 PM';
        const expected = '02/03/2024 20:05';

        expect(formatDateTime(dateObj)).toEqual(expected);
    });
});
