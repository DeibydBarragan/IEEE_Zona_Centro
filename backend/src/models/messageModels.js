const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
    fullName : {
        type: String, 
        required : true,
        maxlength : 100,
        required: [true, 'Campo Nombre obligatorio']
    },
    mail : {
        type : String,
        required : true,
        maxlength : 100,
        trim : true,  // si mandan espacios en blanco, el los quita
        lowercase : true
    },
    program : {
        type : String,
        required : true,
        maxlength : 100
    },
    chapter : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 9,
        trim : true,
        default : "RAS"
    },
    message : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        default : "Sin enviar"
    },
    createdMessage : {type : Date, default : Date.now},
})

module.exports = mongoose.model('messages', MessageSchema)