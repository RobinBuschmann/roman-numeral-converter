import {expect} from 'chai';
import {toRomanNumeral} from './roman-numeral-converter';

describe('toRomanNumeral()', () => {

    type TestSet = [number, string];

    it('should convert integer number to simple roman numeral', () => {
        const testValues: TestSet[] = [
            [5, 'V'],
            [115, 'CXV'],
            [1115, 'MCXV'],
            [1666, 'MDCLXVI'],
        ];
        testValues.forEach(([num, expectedRomanNumeral]) => {
            expect(toRomanNumeral(num)).to.equal(expectedRomanNumeral);
        });
    });

    it('should convert integer number to simple roman numeral considering subtractive notation', () => {
        const testValues: TestSet[] = [
            [4, 'IV'],
            [9, 'IX'],
            [345, 'CCCXLV'],
            [945, 'CMXLV'],
        ];
        testValues.forEach(([num, expectedRomanNumeral]) => {
            expect(toRomanNumeral(num)).to.equal(expectedRomanNumeral);
        });
    });

    it('should fail due to passed negative integer value', () => {
        const testValue = -99;
        expect(toRomanNumeral(testValue)).to.throw(/Negative number values are not allowed/);
    });

    it('should fail due to passed float number', () => {
        const testValue = 1.2345;
        expect(toRomanNumeral(testValue)).to.throw(/Flout number values are not allowed/);
    });

});