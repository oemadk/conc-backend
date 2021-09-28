const mongoose = require("mongoose");

const Rfa = mongoose.model(
    "Rfa",
    new mongoose.Schema({
        name: String,
        date_of_birth: Date,
        age: Number,
        gender:Number,
        height:Number,
        weight:Number,
        department:String,
        date_of_admission:Date,
        original_diagnosis:String,
            shortness_of_breath: Boolean,
            altered_state_of_mind:Boolean,
            chest_pain:Boolean,
            hypotension:Boolean,
            cardiac_arrest:Boolean,
            bleeding:Boolean,
            arrhythmia:Boolean,
            seizure:Boolean,
            focal_deficit:Boolean,
            posto:Boolean,
            other:Boolean,
            clinical:String,
            lab:String,
            xray:String,
            cat:String,
            mri:String,
            ultrasound:String,
            clinical2:Boolean,
            lab2:Boolean,
            xray3:Boolean,
            cat4:Boolean,
            mri5:Boolean,
            ultrasound6:Boolean,
            voice_notes:String,
            status:String,
            reasons:String
    })
);
module.exports = Rfa;
