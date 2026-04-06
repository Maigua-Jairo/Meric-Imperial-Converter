var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');
var convertHandler = new ConvertHandler();
suite('Unit Tests', function () {
  suite('Function convertHandler.getNum(input)', function () {
    test('Whole number input', function (done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    test('Decimal Input', function (done) {
      assert.equal(convertHandler.getNum('3.1mi'), 3.1);
      done();
    });

    test('Fractional Input w/ Decimal', function (done) {
      assert.equal(convertHandler.getNum('3.5/2kg'), 1.75);
      done();
    });

    test('Invalid Input (double fraction)', function (done) {
      assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number');
      done();
    });

    test('No Numerical Input', function (done) {
      assert.equal(convertHandler.getNum('kg'), 1);
      done();
    });
  });
  suite('Function convertHandler.getUnit(input)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
      var expected = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'gal', 'L', 'mi', 'km', 'lbs', 'kg'];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getUnit('32' + ele), expected[i]);
      });
      done();
    });
  });
  test('Unknown Unit Input', function (done) {
    let input = 'g'
    let expected = 'invalid unit'
    assert.equal(convertHandler.getUnit(32 + input), expected)
    done()
  });
});
suite('Function convertHandler.getReturnUnit(initUnit)', function () {
  test('For Each Valid Unit Inputs', function (done) {
    var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    var expect = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
    input.forEach(function (ele, i) {
      assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
    });
    done();
  });
});
suite('Function convertHandler.spellOutUnit(unit)', function () {
  test('For Each Valid Unit Inputs', function (done) {
    //see above example for hint
    done();
  });
});
suite('Function convertHandler.convert(num, unit)', function () {
  test('For Each Valid Unit Inputs', function (done) {
    var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    var expected = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    input.forEach(function (ele, i) {
      assert.equal(convertHandler.getUnit('32' + ele), expected[i]);
    });
    done();
  });

  test('L to Gal', function (done) {
    var input = [5, 'L'];
    var expected = 1.32086;
    assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    done();
  });
});
