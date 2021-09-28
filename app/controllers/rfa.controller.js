const db = require("../models");
const fs = require("fs");
const Rfa = db.rfa;

console.log('is error here?');
exports.rfaAdmission = (req, res) => {
    const rfa = new Rfa({
        name: req.body.name,
        date_of_birth: req.body.date_of_birth,
        age: req.body.age,
        gender: req.body.gender,
        height: req.body.height,
        weight: req.body.weight,
        department: req.body.department,
        date_of_admission: req.body.date_of_admission,
        original_diagnosis: req.body.original_diagnosis,
        shortness_of_breath: req.body.shortness_of_breath,
        altered_state_of_mind:req.body.altered_state_of_mind,
        chest_pain:req.body.chest_pain,
        hypotension:req.body.hypotension,
        cardiac_arrest:req.body.cardiac_arrest,
        bleeding:req.body.bleeding,
        arrhythmia:req.body.arrhythmia,
        seizure:req.body.seizure,
        focal_deficit:req.body.focal_deficit,
        posto:req.body.posto,
        other:req.body.other,
        clinical:req.body.clinical,
        lab:req.body.lab,
        xray:req.body.xray,
        cat:req.body.cat,
        mri:req.body.mri,
        ultrasound:req.body.ultrasound,
        clinical2:req.body.clinical2,
        lab2:req.body.lab2,
        xray3:req.body.xray3,
        cat4:req.body.cat4,
        mri5:req.body.mri5,
        ultrasound6:req.body.ultrasound6,
        voice_notes:req.body.voice_notes,
        status:req.body.status


    });

    rfa.save((err, rfa) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        res.send({ message: rfa });
    });
}
exports.pendingRfa = (req, res) => {
    Rfa.find({ status: 'pending'}, function (err, docs) {
        res.status(200).send(docs);
    });

}
exports.declinedRfa = (req, res) => {
    Rfa.find({ status: 'declined'}, function (err, docs) {
        res.status(200).send(docs);
    });
}
exports.acceptedRfa = (req, res) => {
    Rfa.find({ status: 'accepted'}, function (err, docs) {
        res.status(200).send(docs);
    });
}

exports.rfaFilled = (req, res) => {
    const id = req.params.id;
    Rfa.find({_id: id}, function (err, docs) {
        res.status(200).send(docs);
    });
}
exports.rfaAccept = (req, res) => {
    const id = req.body.id;
    Rfa.find({_id: id}, function (err, docs) {
        res.status(200).send(docs);
    });
}
exports.rfaDecline = (req, res) => {
    const id = req.params.id;
    Rfa.findById({_id: id}, function (err, docs) {
        docs.reasons = req.body.reasons;
        docs.status = 'declined';
        docs.save((err, docs) => {
            if (err) {
                res.status(500).send({message: err});
                return;
            }
            res.send(docs);
        });
        // res.status(200).send(docs);
    });
}
