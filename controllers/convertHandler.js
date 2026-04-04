function ConvertHandler() {

  this.getNum = function(input) {
    let result;
    const numStr = input.replace(/[a-zA-Z]+$/i, '');
    if (!numStr) return 1;
    const doubleFrac = numStr.match(/\//g);
    if (doubleFrac && doubleFrac.length > 1) return 'invalid number';
    if (numStr.includes('/')) {
      const parts = numStr.split('/');
      result = parseFloat(parts[0]) / parseFloat(parts[1]);
    } else {
      result = parseFloat(numStr);
    }
    return isNaN(result) ? 'invalid number' : result;
  };

  this.getUnit = function(input) {
    const validUnits = ['gal','l','mi','km','lbs','kg'];
    const unit = input.replace(/[\d\/.]+/g, '').toLowerCase();
    if (!validUnits.includes(unit)) return 'invalid unit';
    return unit === 'l' ? 'L' : unit;
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
    const galToL   = 3.78541;
    const lbsToKg  = 0.453592;
    const miToKm   = 1.60934;
    const map = {
      gal:  n => parseFloat((n * galToL).toFixed(5)),
      L:    n => parseFloat((n / galToL).toFixed(5)),
      mi:   n => parseFloat((n * miToKm).toFixed(5)),
      km:   n => parseFloat((n / miToKm).toFixed(5)),
      lbs:  n => parseFloat((n * lbsToKg).toFixed(5)),
      kg:   n => parseFloat((n / lbsToKg).toFixed(5)),
    };
    return map[initUnit](initNum);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;