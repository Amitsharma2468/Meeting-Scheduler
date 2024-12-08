const pool = require('../config/db');

const User = {
  create: async (name, email, password, role) => {
    const query = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
    await pool.query(query, [name, email, password, role]);
  },
  findByEmail: async (email) => {
    const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);
    return rows[0];
  },
};

module.exports = User;
