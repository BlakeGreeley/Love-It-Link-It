const mongoose = require('mongoose');

const LinkSchema = {
    linkOne: {
        type: String,
        required: [true, 'URL can\'t be empty'],
        minLength: [3, "Link must be 3 or more characters."],
        maxLength: [256, "Link must be no more than characters 256."],
        unique: true
    },

    linkOneDescription: {
        type: String, 
        required: [true, 'description is required'],
        minLength: [3, "Link must be 3 or more characters."],
        maxLength: [256, "Link must be no more than characters 256."],
    },

    linkTwo: {
        type: String,
        required: [false, 'second URL can be empty'],
        maxLength: [256, "Link must be no more than characters 256."],
        unique: true
    },

    linkTwoDescription: {
        type: String, 
        required: [false, 'second description is not required'],
        maxLength: [256, "Link must be no more than characters 256."],
    },

    linkThree: {
        type: String,
        required: [false, 'third URL can be empty'],
        maxLength: [256, "Link must be no more than characters 256."],
        unique: true
    },

    linkThreeDescription: {
        type: String, 
        required: [false, 'third description is not required'],
        maxLength: [256, "Link must be no more than characters 256."],
    },

    linkFour: {
        type: String,
        required: [false, 'Fourth URL can be empty'],
        maxLength: [256, "Link must be no more than characters 256."],
        unique: true
    },

    linkFourDescription: {
        type: String, 
        required: [false, 'fourth description is not required'],
        maxLength: [256, "Link must be no more than characters 256."],
    },

};

LinkSchema.path('downloadURL').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

module.exports = mongoose.model('Link', LinkSchema);