const express = require('express');
const { createSlot, getAvailableSlots } = require('../controllers/slotController');
const { bookSlot } = require('../controllers/bookingController'); // Import the booking controller
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');
const router = express.Router();

// Route for creating a slot (only accessible by hosts)
router.post('/slots', authenticate, authorize('host'), createSlot);

// Route to get available slots (for anyone to view)
router.get('/slots', getAvailableSlots);

// Route to book a slot (only accessible by guests)
router.post('/book', authenticate, authorize('guest'), bookSlot);

module.exports = router;
