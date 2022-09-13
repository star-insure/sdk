import { formatDateForTable, formatDateNice } from '../src/lib/dates';

describe('dates', () => {
    it('can_format_date_for_table', () => {
        expect(formatDateForTable('2022-06-17 09:32:54')).toEqual('17/06/2022 9:32AM');
    });

    it('can_format_date_nice', () => {
        expect(formatDateNice('2022-06-17 09:32:54', false)).toEqual('Jun 17, 2022');
    });
});
