const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SymptomSchema = new Schema({
    ID: Number,
    Name: String
});

const DiseaseSchema = new Schema({
    
})

module.exports = mongoose.model('Symptom', SymptomSchema);