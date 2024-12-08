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
  
    try {
      // Find the user by email
      const user = await User.findByEmail(email);
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate the authentication token
      const token = generateToken({ id: user.id });
  
      // Set the token as a cookie
      res.cookie('token', token, {
        httpOnly: true, // Prevents client-side scripts from accessing the cookie
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Prevents CSRF attacks
        maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      });
  
      // Send the response including the role
      res.json({
        message: 'Logged in successfully',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // Include the role in the response
        },
      });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
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