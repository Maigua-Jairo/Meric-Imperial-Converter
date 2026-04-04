const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');
chai.use(chaiHttp);

suite('Functional Tests', function() {

  test('valid input 10L', done => {
    chai.request(server).get('/api/convert').query({input:'10L'}).end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.body.initNum, 10);
      assert.equal(res.body.initUnit, 'L');
      assert.approximately(res.body.returnNum, 2.64172, 0.001);
      done();
    });
  });

 test('invalid input 32g', done => {
  chai.request(server).get('/api/convert').query({input:'32g'}).end((err, res) => {
    assert.equal(res.body, 'invalid unit');  
    done();
  });
});

test('invalid number 3/7.2/4kg', done => {
  chai.request(server).get('/api/convert').query({input:'3/7.2/4kg'}).end((err, res) => {
    assert.equal(res.body, 'invalid number');
    done();
  });
});

test('invalid number and unit 3/7.2/4kilomegagram', done => {
  chai.request(server).get('/api/convert').query({input:'3/7.2/4kilomegagram'}).end((err, res) => {
    assert.equal(res.body, 'invalid number and unit');
    done();
  });
});

  test('no number kg', done => {
    chai.request(server).get('/api/convert').query({input:'kg'}).end((err, res) => {
      assert.equal(res.body.initNum, 1);
      assert.equal(res.body.initUnit, 'kg');
      done();
    });
  });
});