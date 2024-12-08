const Slot = require('../models/Slot');
const Booking = require('../models/Booking'); 


exports.createSlot = async (req, res) => {
    const { host_id, startTime, endTime } = req.body;
  
    if (!startTime || !endTime) {
      return res.status(400).json({ message: 'Start time and End time are required' });
    }
  
    try {
      const startTimeUTC = new Date(startTime).toISOString();
      const endTimeUTC = new Date(endTime).toISOString();
  
      // Create a new slot in the database
      const newSlot = await Slot.create(host_id, startTimeUTC, endTimeUTC);
  
      console.log("New Slot Created:", {
        id: newSlot.id,
        host_id: newSlot.host_id,
        start_time: newSlot.start_time,
        end_time: newSlot.end_time,
        created_at: newSlot.created_at,
        updated_at: newSlot.updated_at,
      });
  
      // Send the created slot details in the response
      res.status(201).json({
        message: 'Slot created successfully',
        slot: {
          id: newSlot.id,
          host_id: newSlot.host_id,
          start_time: newSlot.start_time,
          end_time: newSlot.end_time,
          created_at: newSlot.created_at,
          updated_at: newSlot.updated_at,
        },
      });
    } catch (error) {
      console.error('Error creating slot:', error);
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

exports.updateSlot = async (req, res) => {
    const { id, startTime, endTime } = req.body;
  
    if (!id || !startTime || !endTime) {
      return res.status(400).json({ message: 'Slot ID, Start time, and End time are required' });
    }
  
    try {
      const startTimeUTC = new Date(startTime).toISOString();
      const endTimeUTC = new Date(endTime).toISOString();
  
      const slot = await Slot.getById(id);
      if (!slot) {
        return res.status(404).json({ message: 'Slot not found' });
      }
  
      if (slot.host_id !== req.user.id) {
        return res.status(403).json({ message: 'You are not authorized to update this slot' });
      }
  
      await Slot.update(id, startTimeUTC, endTimeUTC);
      res.status(200).json({ message: 'Slot updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating slot' });
    }
  };
  
  exports.deleteSlot = async (req, res) => {
    const { id } = req.body;
  
    if (!id) {
      return res.status(400).json({ message: 'Slot ID is required' });
    }
  
    try {
      const slot = await Slot.getById(id);
      if (!slot) {
        return res.status(404).json({ message: 'Slot not found' });
      }
  
      if (slot.host_id !== req.user.id) {
        return res.status(403).json({ message: 'You are not authorized to delete this slot' });
      }
  
      await Slot.delete(id);
      res.status(200).json({ message: 'Slot deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting slot' });
    }

  };


