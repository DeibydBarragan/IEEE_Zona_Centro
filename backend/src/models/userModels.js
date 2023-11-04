const mongoose = require('mongoose');
const {Schema} = mongoose;

// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
        maxlength : 100
    },
    mail : {
        type : String,
        required : true,
        maxlength : 100,
        required : true,
        trim : true,  // si mandan espacios en blanco, el los quita
        lowercase : true,
        // unique : true, // para validar que cada correo sea unico
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] ,
        // validate: {
        //     validator: function(v) {
        //         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
        // }
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 100
    },
    state : {
        type : String,
        default : 'Activo',
        enum :["Activo", "Inactivo"] 
    },
    role : {
        type : String,
        required : true,
        default : 'Gestor',
        enum :["Administrador", "Gestor"] 
    }
})


module.exports = mongoose.model('user', UserSchema)