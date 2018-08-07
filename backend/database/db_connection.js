const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl, ssl;
if(process.env.PORT) {
  // deployment
  dbUrl = process.env.DATABASE_URL;
  ssl = true;
} else {
  // development
  dbUrl = process.env.DB_URL;
  ssl = false;
}
if (!dbUrl) {
  throw new Error('DB url not found ');
} else {
  module.exports = new Pool({ connectionString: dbUrl, ssl });
}
