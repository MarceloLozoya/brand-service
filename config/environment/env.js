// TODO - Default values are present for this project's purposes only. They should be removed.

let env = {};

/**
 *  BASE VALUES
 */
env.ENVIRONMENT = process.env.NODE_ENV || 'development';


/**
 *  DATABASE
 */
env.DATABASE_NAME = process.env.databaseName || 'graphql-project';
env.DATABASE_USER = process.env.databaseUser || 'admin';
env.DATABASE_PASS = process.env.databasePass || 'JGNBuyto6GprBr7r';


module.exports = env;