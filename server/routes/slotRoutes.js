const express = require('express');
const { createSlot, getAvailableSlots, updateSlot, deleteSlot, } = require('../controllers/slotController');
const { bookSlot } = require('../controllers/bookingController'); // Import the booking controller
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');
const router = express.Router();

// Route for creating a slot (only accessible by hosts)
router.post('/slots',   createSlot);

// Route to get available slots (for anyone to view)
router.get('/slots', getAvailableSlots);

// Route to book a slot (only accessible by guests)
router.post('/book', authenticate, authorize('guest'), bookSlot);

// Route to update a slot (only accessible by hosts)
router.put('/slots/:id', authenticate, updateSlot);

// Route to delete a slot (only accessible by hosts)
router.delete('/slots/:id', authenticate,  deleteSlot);

module.exports = router;
