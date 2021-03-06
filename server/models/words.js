const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WordSchema = new Schema({
    conlang: {
        type: String,
        trim: true,
        required: true
    },
    language: {
        type: String,
        trim: true,
        default: "Tukren"
    },
    english: {
        type: String,
        trim: true,
        required: true
    },
    pos: {
        type: String,
        trim: true,
        maxlength: 15,
        required: true
    },
    sentence: {
        type: String,
    },
    created_at: { type: Date, default: Date.now }
});

const WordModel = mongoose.model("word", WordSchema);


module.exports = WordModel;
