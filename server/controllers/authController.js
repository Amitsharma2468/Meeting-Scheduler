const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create(name, email, hashedPassword, role);
  res.status(201).json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  
    const token = generateToken({ id: user.id });
    res.cookie('token', token, {
        httpOnly: true, // Prevents client-side scripts from accessing the cookie
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Prevents CSRF attacks
        maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      });
    
      res.json({ message: 'Logged in successfully', token });
    
  };

  exports.logout = (req, res) => {
    // Clear the authentication cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
  
    res.json({ message: 'Logged out successfully' });
  };