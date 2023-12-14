import EulerNumbers from "./../src/euler.js"

describe('EulerNumbers', () => {
    test('should correctly create a EulerNumbers object', () => {
        const newObj = new EulerNumbers(100);
        expect(newObj.number).toEqual(100);
    });
    test('should create an array from this.number', () => {
        const newObj = new EulerNumbers(100);
        expect(newObj.threeMultiple()).toEqual(100);
    });
    test('should create an array from this.number', () => {
        const newObj = new EulerNumbers(100);
        expect(newObj.threeMultiple()).toEqual(100);
    });

});