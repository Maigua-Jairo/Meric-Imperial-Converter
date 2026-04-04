test('invalid input 32g', done => {
  chai.request(server).get('/api/convert').query({input:'32g'}).end((err, res) => {
    assert.equal(res.body, 'invalid unit');  // string, no objeto
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