let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {

  this.getNum = function(input) {
      var result;
      result= input.match(inputRegex)[0]
      return result        }
  
  };

  this.getUnit = function(input) {
   var result;
    result= input.match(inputRegex)[1]
    return result
  };

  this.getReturnUnit = function(initUnit) {
    const map = { gal:'L', L:'gal', mi:'km', km:'mi', lbs:'kg', kg:'lbs' };
    return map[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const map = { gal:'gallons', L:'liters', mi:'miles', km:'kilometers', lbs:'pounds', kg:'kilograms' };
    return map[unit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL  = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm  = 1.60934;
    const map = {
      gal: n => parseFloat((n * galToL).toFixed(5)),
      L:   n => parseFloat((n / galToL).toFixed(5)),
      mi:  n => parseFloat((n * miToKm).toFixed(5)),
      km:  n => parseFloat((n / miToKm).toFixed(5)),
      lbs: n => parseFloat((n * lbsToKg).toFixed(5)),
      kg:  n => parseFloat((n / lbsToKg).toFixed(5)),
    };
    return map[initUnit](initNum);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;