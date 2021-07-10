const pgp = require('pg-promise')({});

const db = pgp({
  user: 'postgres',
  host: '/tmp',
  database: 'postgres',
  password: 'railforce515',
  port: 5432,
});

module.exports = db;
