const jwt = require('jsonwebtoken');
require('dotenv').config();
const { verifyToken } = require('../utils/jwtUtils');

const authenticate = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });
  
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid or expired token' });
    }
  };
  
  module.exports = authenticate;
