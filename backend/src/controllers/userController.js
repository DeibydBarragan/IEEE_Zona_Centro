const userControl ={};

const User = require('../models/userModels');
// Encriptar contraseña
const bcrypt = require('bcryptjs');
// Validar token
const jwt = require('jsonwebtoken');

userControl.crearUser = async(req, res) =>{
    const{name, mail, password, state, role} = req.body;
    const NewUser = new User({ name, mail, password, state, role}); // crearUser
    const mailUser = await User.findOne({mail: mail});

    if (mailUser){
        res.status(500).json({
            mensaje: "Algunos de los datos ingresados ya se encuentran en nuestra base de datos"
        })
    }
    else{
        NewUser.password = await bcrypt.hash(password, 10);
        const token = jwt.sign({_id: NewUser._id}, 'Secreta')
        await NewUser.save()
        res.status(200).json({
            mensaje: 'Se ha registrado correctamente',
            id: NewUser._id,
            name: NewUser.name,
            token
        })
    }

}

userControl.listUser = async(req,res) => {
    const response = await User.find();
    res.status(200).json(response);
}

userControl.login = async(req, res) =>{
    const {mail, password} = req.body
    const user = await User.findOne({mail: mail})
    if (!user){
        return res.json({
            mensaje: 'Los datos ingresados no concuerdan con los consignados en nuestra base de datos'
        })
    }
    
    const matchMail = await User.findOne({mail: { $regex: ".*" + mail + ".*" }});
    const matchPassword = await bcrypt.compare(password, user.password)
    
    if (matchPassword && matchMail){
        const token = jwt.sign({_id: user._id}, 'Secreta')
        res.status(200).json({
            mensaje: `Bienvenido ${user.name}`,
            id: user._id,
            name: user.name,
            role: user.role,
            token
        })
    }
    else if (!matchPassword && matchMail) {
        res.status(200).json({
            mensaje: 'Credenciales incorrectas'
        })
    }
}

userControl.validarInformacion = async(req, res) =>{
    try{
        const mail = req.params.mail;
        const mailUser = await User.findOne({mail: { $regex: ".*" + mail + ".*" }});
        if (!mailUser){
            return res.json({
                mensaje: 'Los datos ingresados no concuerdan con los consignados en nuestra base de datos'
            })
        }
        res.json({mailUser,
            mensaje: "Valores confirmados", 
        });
    }catch(err){
        res.json({
            mensaje: "elemento no actualizado", 
            err
        });
    }
}

userControl.actualizarContrasena = async(req, res) => {
    try{
        const mail = req.params.mail;
        const password = req.params.password;

        const filter = {mail: { $regex: ".*" + mail + ".*" }};
        const validacionCorreo = User.findOne(filter);

        const update = {password: await bcrypt.hash(password, 10)};
        // console.log(respuesta)
        if (!validacionCorreo){
            const respuesta = await User.findOneAndUpdate(filter, update);
            res.status(500).json({
                mensaje: "Correo no encontrado en nuesta base de datos",
                respuesta
            });
        }else{
            res.status(200).json({
                mensaje: "Contraseña actualizada",
                respuesta
            });
        }
    }catch(err){
        res.json({
            mensaje: "Error del sistema", 
            err
        });
    }
}

userControl.listUserId = async (req, res) => {
    const id = req.params.id;
    try{
        const response = await User.findOne({ _id: id });
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({
            mensaje: "Usuario no enviado",
            err
        })
    }
}

userControl.updateUserId = async(req, res) => {
    try{
        const id = req.params.id;
        const response = await User.findByIdAndUpdate({_id: id}, req.body);
        res.status(200).json({
            mensaje: "Usuario actualizado", 
            response
        });
    }catch(err){
        res.status(500).json({
            mensaje: "Usuario no actualizado", 
            err
        });
    }
}

userControl.deleteUserId = async(req, res) => {
    try{
        const id = req.params.id;
        const idUser = await User.findOne({_id: id});
        if (idUser){
            const response = await User.findByIdAndDelete({_id: id});
            res.status(200).json(
                response
            );
        }
        else{
            res.status(500).json({
                mensaje: "Ocurrio un error interno"
            });
        }
    }
    catch(err){
        res.status(500).json({
            mensaje: "Usuario no eliminado", 
            // "Ocurrio un error Interno"
            err
        });
    }
}


module.exports = userControl