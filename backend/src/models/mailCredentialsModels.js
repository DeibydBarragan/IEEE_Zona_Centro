const mongoose = require('mongoose');

const { Schema } = mongoose;

const MailCredentialsSchema = new Schema({
    mail:{
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model("mailCredentials", MailCredentialsSchema);

