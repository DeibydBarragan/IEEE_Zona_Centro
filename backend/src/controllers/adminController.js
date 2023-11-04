const adminControl = {};

const Admin = require('../models/adminModels')

// Encriptar contraseña
const bcrypt = require('bcryptjs');
// Validar token
const jwt = require('jsonwebtoken');

adminControl.createAdmin = async(req, res) =>{
    const{fullName, mail, password} = req.body;
    const NewAdmin = new Admin({
        fullName, 
        mail, 
        password
    });// crearAdmin
    const mailAdmin = await Admin.findOne({mail: mail});

    if (mailAdmin){
        res.json({
            mensaje: "El mail ya existe"
        })
    }
    else{
        NewAdmin.password = await bcrypt.hash(password, 10);
        const token = jwt.sign({_id: NewAdmin._id}, 'Secreta')
        await NewAdmin.save()
        res.json({
            mensaje: 'Se ha registrado correctamente',
            id: NewAdmin._id,
            fullName: NewAdmin.nombre,
            token
        })
    }
}

adminControl.login = async(req, res) =>{
    const {mail, password} = req.body
    const admin = await Admin.findOne({mail: mail})
    if (!admin){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(password, admin.password)

    if (match){
        const token = jwt.sign({_id: admin._id}, 'Secreta')
        res.json({
            mensaje: 'Bienvenidos al himalaya',
            id: admin._id,
            fullName: admin.nombre,
            token
        })
    }
    else{
        res.json({
            mensaje: 'Constraseña o mail incorrectos'
        })
    }
}

module.exports = adminControl