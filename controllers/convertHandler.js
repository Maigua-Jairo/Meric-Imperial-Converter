let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {

  this.getNum = function (input) {
    var result;
    result = input.match(inputRegex)[0]
    return result
  };

  this.getUnit = function (input) {
    var result;
    result = input.match(inputRegex)[1]
    return result
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    if (initUnit == 'gal' || initUnit == 'GAL') {
      result = 'L';
    } else if (initUnit == 'L' || initUnit == 'l') {
      result = 'gal';
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if (initUnit == 'gal' || initUnit == 'GAL') {
      result = (initNum * galToL).toFixed(5);
    } else if (initUnit == 'L' || initUnit == 'l') {
      result = (initNum / galToL).toFixed(5);
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;