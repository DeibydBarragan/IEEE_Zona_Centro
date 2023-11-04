const leaderChapterControl = {}; 

const LeaderChapter = require('../models/leaderChapterModels');

// Encriptar contraseña
const bcrypt = require('bcryptjs');
// Validar token
const jwt = require('jsonwebtoken');

leaderChapterControl.createLeaderChapter = async(req, res) =>{
    const {fullName, mail, chapter, password} = req.body

    const NewLeader = new LeaderChapter({fullName, mail, chapter, password})

    const mailLeader = await LeaderChapter.findOne({mail: mail});

    if (mailLeader){
        res.json({
            mensaje: "El mail ya existe"
        })
    }
    else{
        NewLeader.password = await bcrypt.hash(password, 10);
        const token = jwt.sign({_id: NewLeader._id}, 'Secreta')
        await NewLeader.save()
        res.json({
            mensaje: 'Se ha registrado correctamente',
            id: NewLeader._id,
            fullName: NewLeader.nombre,
            token
        })
    }
}

leaderChapterControl.listLeaderChapter = async(res) =>{
    const response = await LeaderChapter.find()
    res.json(response)
}

// leaderChapterControl.listarId = async(req,res) => {
//     const id = req.params.id;
//     const response = await LeaderChapter.findOne({_id: id}); 
//     res.json(response)
// }

// leaderChapterControl.listarEmpleadoPorJefe = async(req, res) => {
//     const id = req.params.id;
//     const response = await LeaderChapter.find({jefe: id}) ;
//     res.json(response);
// }



leaderChapterControl.updateLeaderChapterId = async(req, res) => {
    const id = req.params.id;
    const response = await LeaderChapter.findByIdAndUpdate({_id: id}, req.body);

    res.json({
        mensaje: "LeaderChapter actualizado"
    });
}

leaderChapterControl.deleteLeaderChapterId = async(req, res) => {
    const id = req.params.id;
    const response = await LeaderChapter.findByIdAndDelete({_id: id}) ;
    res.json({
        mensaje: "LeaderChapter eliminado"
    });
}

leaderChapterControl.searchLeaderChapterName = async(req, res) =>{
    const nombre = req.params.nombre;
    const response = await LeaderChapter.find({nombre:{$regex:'.*'+nombre+'.*'}})
    res.json(response);
}

leaderChapterControl.login = async(req, res) =>{
    const {mail, password} = req.body
    const leader = await LeaderChapter.findOne({mail: mail})
    if (!leader){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(password, leader.password)

    if (match){
        const token = jwt.sign({_id: leader._id}, 'Secreta')
        res.json({
            mensaje: 'Bienvenidos al himalaya',
            id: leader._id,
            fullName: leader.nombre,
            token
        })
    }
    else{
        res.json({
            mensaje: 'Constraseña o mail incorrectos'
        })
    }
}


module.exports = leaderChapterControl