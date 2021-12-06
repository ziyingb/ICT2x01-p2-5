process.env.NODE_ENV = 'test';
const Challenge = require("../models/challenge")
const Programs = require("../models/program");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();