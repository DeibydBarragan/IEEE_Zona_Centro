const mongoose = require("mongoose");
const { Schema } = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const AdminSchema = new Schema({
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
        unique : true, // para validar que cada correo sea unico
        lowercase : true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']  
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 100
    }
})

module.exports = mongoose.model('admin', AdminSchema)
