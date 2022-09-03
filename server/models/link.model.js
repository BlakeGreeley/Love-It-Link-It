const mongoose = require('mongoose');

const LinkSchema = {
    linkOne: {
        type: String,
        required: [true, 'URL can\'t be empty'],
        minLength: [3, "Link must be 3 or more characters."],
        maxLength: [256, "Link must be no more than characters 256."],
        unique: true
    },


}

LinkSchema.path('downloadURL').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');