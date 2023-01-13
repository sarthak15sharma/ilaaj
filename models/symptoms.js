const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SymptomSchema = new Schema({
    ID: Number,
    Name: String
});

module.exports = mongoose.model('Symptom', SymptomSchema);