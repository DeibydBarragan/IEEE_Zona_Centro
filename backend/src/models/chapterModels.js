const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChapterSchema = new Schema({
    name: {type: String, required: [true, 'Campo Nombre obligatorio']}, 
    nameLong: {type: String, required: [true, 'Campo Nombre Completo obligatorio']},
    info: {type: String, required: [true, 'Campo info obligatorio']},
    colorId: {type: String, required: [true, 'Campo colorId obligatorio']},
    facebook: {type: String, required: [true, 'Campo enlace obligatorio']},
    instagram: {type: String, required: [true, 'Campo enlace obligatorio']}
    // colorId: name.toLowercase(),
})

module.exports = mongoose.model( "chapter" , ChapterSchema )