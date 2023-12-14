import EulerNumbers from "./../src/euler.js"

describe('EulerNumbers', () => {
    test('should correctly create a EulerNumbers object', () => {
        const newObj = new EulerNumbers(10);
        expect(newObj.number).toEqual(10);
    });
    test('should create a new property from the sums multiples of 3 within from this.number', () => {
        const newObj = new EulerNumbers(1000);
        newObj.eulerNumber();
        expect(newObj.eulerNumber).toEqual(233168);
    });
});