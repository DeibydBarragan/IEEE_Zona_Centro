const memberControl = {}; 

const Member = require('../models/membersModels');

memberControl.createMember = async(req, res) =>{    
    const{name, role, id ,linkLinkedin, linkVarios} = req.body;
    const NewMember = new Member({name, role, id, linkLinkedin, linkVarios})
    try{
        const response = await NewMember.save()
        res.status(200).json({
            mensaje: "El miembro a sido anexado a la base de datos",
            response
        })
    }catch(err){
        res.status(500).json({
            mensaje: "Error miembro no anexado",
            err
        })
    }
}

memberControl.listMember = async(req, res) =>{
    const response = await Member.find()
    res.status(200).json(response)      
}

memberControl.updateMemberId = async(req, res) => {
    try{
        const id = req.params.id;
        const response = await Member.findByIdAndUpdate({_id: id}, req.body);
        res.status(200).json({
            mensaje: "Miembro actualizado", 
            response
        });
    }catch(err){
        res.status(500).json({
            mensaje: "Miembro no actualizado", 
            err
        });
    }
}


memberControl.deleteMemberId = async(req, res) => {
    try{
        const id = req.params.id;
        const idMember = await Member.findOne({_id: id});
        if (idMember){
            const response = await Member.findByIdAndDelete({_id: id});
            res.status(200).json(
                response
            );
        }
        else{
            res.status(500).json({
                mensaje: "Ocurrio un error Interno"
            });
        }
    }
    catch(err){
        res.status(500).json({
            mensaje: "Miembro no eliminado", 
            // "Ocurrio un error Interno"
            err
        });
    }
}

module.exports = memberControl
