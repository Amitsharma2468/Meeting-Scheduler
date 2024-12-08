const Booking = require('../models/Booking'); 
const Slot = require('../models/Slot'); 

// Controller for booking a slot
exports.bookSlot = async (req, res) => {
  const { id } = req.body;
  const guest_id = req.user.id; // Assuming the user's ID is stored in req.user (from authMiddleware)

  if (!id) {
    return res.status(400).json({ message: 'Slot ID is required' });
  }

  try {
    // Check if the slot is available
    const slot = await Slot.getById(id);
    if (!slot || slot.booked === 1) {
      return res.status(400).json({ message: 'Slot is already booked or does not exist' });
    }

    // Book the slot
    await Booking.bookSlot(id, guest_id);

    res.status(200).json({ message: 'Slot successfully booked' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error booking slot' });
  }
};
