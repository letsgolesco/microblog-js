'use strict';

var mongoose = require('mongoose');

var MicroblogSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true,
        match: /^([\w ,.!?]{1,100})$/
    }
});

var EntrySchema = new mongoose.Schema({
    text: {
        required: true,
        type: String,
        trim: true,
        match: /^([\w ,.!?]{1,160})$/
    },

    image: {
        type: String,
        required: false
    },

    microblog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Microblog'
    }
});

module.exports = {
    Microblog: mongoose.model('Microblog', MicroblogSchema),
    Entry: mongoose.model('Entry', EntrySchema)
};
