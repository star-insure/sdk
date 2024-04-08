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

describe('format money', () => {
    it('can format 0 to 0.00', () => {
        expect(formatMoney(0)).toEqual('0.00');
    });

    it('can format 123 to 123.00', () => {
        expect(formatMoney(123)).toEqual('123.00');
    });

    it('can format 123456.789 to 123,456.79', () => {
        expect(formatMoney(123456.789)).toEqual('123,456.79');
    });

    it('can format 789123456.789 to 789,123,456.79', () => {
        expect(formatMoney(789123456.789)).toEqual('789,123,456.79');
    });

    it('can format string 789123456.789 to 789,123,456.79', () => {
        expect(formatMoney('789123456.789')).toEqual('789,123,456.79');
    });

    it('can format -123 to -123.00', () => {
        expect(formatMoney(-123)).toEqual('-123.00');
    });

    it('can format -123456.789 to -123,456.79', () => {
        expect(formatMoney(-123456.789)).toEqual('-123,456.79');
    });

    it('can format -789123456.789 to -789,123,456.79', () => {
        expect(formatMoney(-789123456.789)).toEqual('-789,123,456.79');
    });

    it('can format string -789123456.789 to -789,123,456.79', () => {
        expect(formatMoney('-789123456.789')).toEqual('-789,123,456.79');
    });

    it('can return 0.00 for invalid input', () => {
        expect(formatMoney('abc')).toEqual('0.00');
        expect(formatMoney('')).toEqual('0.00');
        expect(formatMoney(' ')).toEqual('0.00');
    });

    it('can return empty string for null input', () => {
        expect(formatMoney(null)).toEqual('');
        expect(formatMoney(undefined)).toEqual('');
    });


});
