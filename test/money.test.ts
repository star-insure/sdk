import { addGst, subtractGst, getGst, round, formatMoney, formatNumber } from '../src/lib/money';

describe('money', () => {
    it('can_add_gst', () => {
        expect(addGst(1023.56)).toEqual(1177.09);
    });

    it('can_subtract_gst', () => {
        expect(subtractGst(4394.76)).toEqual(3821.53);
    });

    it('can_get_gst', () => {
        expect(getGst(100)).toEqual(13.04);
    });

    it('can_round_numbers', () => {
        expect(round(10385.396)).toEqual(10385.40);
    });

    it('can_format_money', () => {
        expect(formatMoney(542)).toEqual('542.00');
    });

    it('can_format_numbers', () => {
        expect(formatNumber('$10.54')).toEqual(10.54);
    });
});
