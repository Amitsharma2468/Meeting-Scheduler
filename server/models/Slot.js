const pool = require('../config/db');

const Slot = {
  create: async (hostId, startTimeUTC, endTimeUTC) => {
    const query = `INSERT INTO slots (host_id, start_time, end_time) VALUES (?, ?, ?)`;
    await pool.query(query, [hostId, startTimeUTC, endTimeUTC]);
  },
  getAvailable: async () => {
    const [rows] = await pool.query(`SELECT *, 
      CONVERT_TZ(start_time, '+00:00', @@session.time_zone) AS local_start_time,
      CONVERT_TZ(end_time, '+00:00', @@session.time_zone) AS local_end_time
    FROM slots WHERE booked = 0`);
    return rows;
  },

  // Get a slot by ID
  getById: async (slotId) => {
    const [rows] = await pool.query(
      `SELECT *, 
       CONVERT_TZ(start_time, '+00:00', @@session.time_zone) AS local_start_time,
       CONVERT_TZ(end_time, '+00:00', @@session.time_zone) AS local_end_time
      FROM slots WHERE id = ?`,
      [slotId]
    );
    return rows[0]; // Return the first matching slot
  },
};

module.exports = Slot;
