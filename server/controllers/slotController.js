const Slot = require('../models/Slot');
const Booking = require('../models/Booking'); 


exports.createSlot = async (req, res) => {
  const { startTime, endTime } = req.body;

  
  if (!startTime || !endTime) {
    return res.status(400).json({ message: 'Start time and End time are required' });
  }

  try {
    
    const startTimeUTC = new Date(startTime).toISOString();
    const endTimeUTC = new Date(endTime).toISOString();

    
    await Slot.create(req.user.id, startTimeUTC, endTimeUTC);

    res.status(201).json({ message: 'Slot created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating slot' });
  }
};


exports.getAvailableSlots = async (req, res) => {
  try {
    const slots = await Slot.getAvailable();
    res.status(200).json(slots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching available slots' });
  }
};
