import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "3443",
  host: "localhost",
  port: "5432",
  database: "social_media",
});

export default pool;
