const mongoose = require('mongoose');

const SampleDataSchema = new mongoose.Schema({
  timestamp: Date,
  sample: Number
});

const SampleData = mongoose.model('Praveen', SampleDataSchema);

module.exports = SampleData;