var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');
chai.use(chaiHttp);
suitev ('Functional Tests', function() {