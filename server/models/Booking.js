const pool = require('../config/db');

const Booking = {
 
  bookSlot: async (slotId, guestId) => {
    // Check if the slot is already booked
    const [checkSlot] = await pool.query('SELECT * FROM slots WHERE id = ? AND booked = 0', [slotId]);
    
    if (checkSlot.length === 0) {
      throw new Error('Slot is either already booked or does not exist');
    }

    //checking the slot availability
    const query = `UPDATE slots SET booked = 1, guest_id = ? WHERE id = ?`;
    await pool.query(query, [guestId, slotId]);

    return { message: 'Slot booked successfully' };
  },
};

module.exports = Booking;
