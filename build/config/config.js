'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//joi allows you to create blueprints or schemas for JavaScript objects
// (an object that stores information) to ensure validation of key information
var Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

//define validation for all env vars
var envVarsSchema = Joi.object().keys({
    NODE_ENV: Joi.string().allow(['development', 'production', 'test']).default(process.env.NODE_ENV),
    PORT: Joi.number().default(process.env.PORT || 80),
    JWT_SECRET: Joi.string().required().description('JWT Secret is required to get access')
}).unknown().required();

//If does not match to the schema then throw an error

var _Joi$validate = Joi.validate(process.env, envVarsSchema),
    error = _Joi$validate.error,
    envVars = _Joi$validate.value;

if (error) {
    throw new Error('Config validation error: ' + error.message);
}

//export all env through envVars

var config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwtSecret: envVars.JWT_SECRET
};

exports.default = config;