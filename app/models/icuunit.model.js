const mongoose = require("mongoose");

const Icuunit = mongoose.model(
    "Icuunit",
    new mongoose.Schema({
        icu_number: Number,
        icu_available_beds: Number,
        total_number_beds: Number,
        occupied_by: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    })
);

module.exports = Icuunit;
