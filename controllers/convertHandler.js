let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {

this.getNum = function(input) {
  var result;
  
  result = input.match(inputRegex)[0]
  
  if(isNaN(result)){
    return 'invalid number'
  }
      
  return result;
};
  this.getUnit = function (input) {
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    const unit = input.replace(/[\d\/.]+/g, '').toLowerCase();
    if (!validUnits.includes(unit)) return 'invalid unit';
    return unit === 'l' ? 'L' : unit;
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    if (initUnit == 'gal' || initUnit == 'GAL') {
      result = 'L';
    } else if (initUnit == 'L' || initUnit == 'l') {
      result = 'gal';
    }
    if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = 'kg'
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = 'lbs'
    }
    if (initUnit === 'mi' || initUnit === 'MI') {
      result = 'km'
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = 'mi'
    }

    return result;
  };

this.spellOutUnit = function(unit) {
  const map = {
    gal: 'gallons', L: 'liters', mi: 'miles',
    km: 'kilometers', lbs: 'pounds', kg: 'kilograms'
  };
  return map[unit];
};

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initUnit === 'gal') {
      result = initNum * galToL;
    } else if (initUnit === 'L') {
      result = initNum / galToL;
    } else if (initUnit === 'mi') {
      result = initNum * miToKm;
    } else if (initUnit === 'km') {
      result = initNum / miToKm;
    } else if (initUnit === 'lbs') {
      result = initNum * lbsToKg;
    } else if (initUnit === 'kg') {
      result = initNum / lbsToKg;
    }

    return parseFloat(result.toFixed(5));
  };
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;