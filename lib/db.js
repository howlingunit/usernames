import pkg from 'pg';
const { Pool } = pkg;


import env from '../env.json' assert { type: "json" }; //If env is is not there then you need to create it


const pool = new Pool({
  user: env.username,
  database: env.database,
  password: env.password,
  port: env.port,
  host: env.host,
});

export { pool }