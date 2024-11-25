const express = require('express');
const Message = require('./models/Message');
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, cell, subject, message } = req.body;
  try {
    const newMessage = new Message({ name, email, cell, subject, message });
    await newMessage.save();
    res.status(200).json({ message: 'Message received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;


