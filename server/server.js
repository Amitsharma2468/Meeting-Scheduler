const express = require('express');
const authRoutes = require('./routes/authRoutes');
const slotRoutes = require('./routes/slotRoutes');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = ['http://localhost:5173'];

app.use(
    cors({
      origin: allowedOrigins, 
      methods: ['GET', 'POST', 'PUT', 'DELETE'], 
      credentials: true, 
    })
  );

app.use('/api/auth', authRoutes);
app.use('/api/slots', slotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
