export const toRomanNumeral = (num: number) => {
    validateNumber(num);

    return romanValues
        .reduce(({romanSymbols, remainder}, romanValue) => {
            const newRemainder = remainder % romanValue;
            const romanNumeralCount = Math.floor(remainder / romanValue);

            const newRomanSymbols = [
                ...romanSymbols,
                ...createRomanSymbols(romanNumeralCount, romanValue),
            ];

            return {
                romanSymbols: newRomanSymbols,
                remainder: newRemainder,
            };
        }, {romanSymbols: [] as string[], remainder: num})
        .romanSymbols
        .join('');
};


const romanValueSymbolMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};

const romanValues = Object
    .keys(romanValueSymbolMap)
    .map(key => Number(key))
    .sort((a, b) => b - a);

const createRomanSymbols = (count, romanValue) =>
    Array(count).fill(romanValueSymbolMap[romanValue]);

const validateNumber = num => {
    if (num < 0) {
        throw new Error('Negative number values are not allowed');
    }
    if (num % 1 !== 0) {
        throw new Error('Float number values are not allowed');
    }
};