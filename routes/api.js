'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {
  const convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function(req, res) {
      var input    = req.query.input;
      var initNum  = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
if (initNum === 'invalid number' && initUnit === 'invalid unit') {
  return res.json({ error: 'invalid number and unit' });
}
if (initNum === 'invalid number') return res.json({ error: 'invalid number' });
if (initUnit === 'invalid unit')  return res.json({ error: 'invalid unit' });
      var returnNum  = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString   = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      res.json({ initNum, initUnit, returnNum, returnUnit, string: toString });
    });
};