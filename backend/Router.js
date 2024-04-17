// routes/data.js

const express = require('express');
const router = express.Router();
const SampleData = require('./SampleData');

router.get('/filter', async (req, res) => {
  try {
    const { startTime, endTime } = req.query;
    const data = await SampleData.find({
      ts: { $gte: new Date(startTime), $lte: new Date(endTime) }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;