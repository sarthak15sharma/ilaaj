const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SymptomSchema = new Schema({
    ID: Number,
    Name: String
});

const DiseaseSchema = new Schema({
    Issue: Object,
    Specialisation: [
        {
            type: Object
        }
    ]
});

module.exports = [mongoose.model('Symptom', SymptomSchema), mongoose.model('Disease', DiseaseSchema)];