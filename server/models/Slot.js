const pool = require('../config/db');

const Slot = {
  // Create a new slot and return the newly created slot details
  create: async (hostId, startTimeUTC, endTimeUTC) => {
    const query = `INSERT INTO slots (host_id, start_time, end_time, booked) VALUES (?, ?, ?, 0)`;
    const [result] = await pool.query(query, [hostId, startTimeUTC, endTimeUTC]);

    // Fetch the newly created slot details using its primary key `id`
    const [rows] = await pool.query(`SELECT * FROM slots WHERE id = ?`, [result.insertId]);
    return rows[0]; // Return the newly created slot
  },

  // Get all available slots
  getAvailable: async () => {
    const [rows] = await pool.query(`
      SELECT *,
        CONVERT_TZ(start_time, '+00:00', @@session.time_zone) AS local_start_time,
        CONVERT_TZ(end_time, '+00:00', @@session.time_zone) AS local_end_time
      FROM slots
      WHERE booked = 0
    `);
    return rows;
  },

  // Get a slot by its primary key `id`
  getById: async (id) => {
    const [rows] = await pool.query(`
      SELECT *,
        CONVERT_TZ(start_time, '+00:00', @@session.time_zone) AS local_start_time,
        CONVERT_TZ(end_time, '+00:00', @@session.time_zone) AS local_end_time
      FROM slots
      WHERE id = ?
    `, [id]);
    return rows[0]; // Return the first matching slot
  },

  // Update a slot by its primary key `id`
  update: async (id, startTimeUTC, endTimeUTC) => {
    const query = `
      UPDATE slots 
      SET start_time = ?, end_time = ? 
      WHERE id = ?
    `;
    const [result] = await pool.query(query, [startTimeUTC, endTimeUTC, id]);

    // Fetch the updated slot details
    const [rows] = await pool.query(`SELECT * FROM slots WHERE id = ?`, [id]);
    return rows[0]; // Return the updated slot
  },

  // Delete a slot by its primary key `id`
  delete: async (id) => {
    const query = `DELETE FROM slots WHERE id = ?`;
    await pool.query(query, [id]);
  },
};

module.exports = Slot;
