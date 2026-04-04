const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
const convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  test('whole number input', () => assert.equal(convertHandler.getNum('32L'), 32));
  test('decimal number input', () => assert.equal(convertHandler.getNum('3.1mi'), 3.1));
  test('fractional input', () => assert.equal(convertHandler.getNum('1/2km'), 0.5));
  test('fractional with decimal', () => assert.equal(convertHandler.getNum('3.5/2gal'), 1.75));
  test('double-fraction returns error', () => assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number'));
  test('no number defaults to 1', () => assert.equal(convertHandler.getNum('kg'), 1));

  test('valid units', () => {
    ['gal','L','mi','km','lbs','kg'].forEach(u => assert.notEqual(convertHandler.getUnit(`1${u}`), 'invalid unit'));
  });
  test('invalid unit', () => assert.equal(convertHandler.getUnit('32g'), 'invalid unit'));

  test('return unit for each valid input', () => {
    const pairs = {gal:'L', L:'gal', mi:'km', km:'mi', lbs:'kg', kg:'lbs'};
    Object.entries(pairs).forEach(([k,v]) => assert.equal(convertHandler.getReturnUnit(k), v));
  });

  test('spelled-out unit', () => {
    const map = {gal:'gallons',L:'liters',mi:'miles',km:'kilometers',lbs:'pounds',kg:'kilograms'};
    Object.entries(map).forEach(([k,v]) => assert.equal(convertHandler.spellOutUnit(k), v));
  });

  test('gal to L', () => assert.approximately(convertHandler.convert(1,'gal'), 3.78541, 0.001));
  test('L to gal', () => assert.approximately(convertHandler.convert(1,'L'), 0.26417, 0.001));
  test('mi to km', () => assert.approximately(convertHandler.convert(1,'mi'), 1.60934, 0.001));
  test('km to mi', () => assert.approximately(convertHandler.convert(1,'km'), 0.62137, 0.001));
  test('lbs to kg', () => assert.approximately(convertHandler.convert(1,'lbs'), 0.45359, 0.001));
  test('kg to lbs', () => assert.approximately(convertHandler.convert(1,'kg'), 2.20462, 0.001));
});