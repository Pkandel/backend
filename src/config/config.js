//joi allows you to create blueprints or schemas for JavaScript objects
// (an object that stores information) to ensure validation of key information
const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

//define validation for all env vars
const envVarsSchema = Joi.object().keys({
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test'])
        .default(process.env.NODE_ENV),
    PORT: Joi.number()
        .default(process.env.PORT || 80),
    JWT_SECRET: Joi.string().required()
        .description('JWT Secret is required to get access')
}).unknown()
    .required();

//If does not match to the schema then throw an error
const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

//export all env through envVars

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwtSecret: envVars.JWT_SECRET
};

export default config;