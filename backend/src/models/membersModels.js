const mongoose = require("mongoose");
const { Schema } = mongoose;

const MembersSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Campo nombre obligatorio']
    },
    role: {
        type: String,
        // required: [true, 'Campo rol obligatorio']
    },
    id : {
        type: String,
        // required: [true, 'Campo id obligatorio']
    },
    linkLinkedin: {
        type: String,
        // required: [true, 'Campo enlace obligatorio']
    },
    linkVarios: {
        type: String,
        // required: [true, 'Campo enlace obligatorio']
    }
    // id: this.name.toLowerCase(),
})

module.exports = mongoose.model( 'member' , MembersSchema )