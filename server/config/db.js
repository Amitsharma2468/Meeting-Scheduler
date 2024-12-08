const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('DB connected');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error('DB connection failed:', error.message);
    process.exit(1); // Exit the process if the database is not connected
  }
})();

module.exports = pool;
