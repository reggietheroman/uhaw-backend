const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let plantSchema = new Schema({
  name: String,
  type: String
});

let Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;

