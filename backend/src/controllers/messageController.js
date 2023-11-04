const messageControl = {};

const Message = require("../models/messageModels");

messageControl.createMessage = async(req, res) =>{
    const {fullName, mail, program, chapter, message} = req.body;
    const NewMessage = new Message({fullName, mail, program, chapter, message})
    try{
        const response = await NewMessage.save()
        res.status(200).json({
            text: "Mensaje enviado",
            response
        })
    }catch(err){
        res.status(500).json({
            text: "Mensaje no enviado",
            err
        })
    }
}

messageControl.listMessage = async(req,res) => {
    const response = await Message.find();
    res.status(200).json(response);
}

messageControl.listMessageId = async (req, res) => {
    const id = req.params.id;
    try{
        const response = await Message.findOne({ _id: id });
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({
            mensaje: "Mensaje no enviado",
            err
        })
    }
}


messageControl.deleteMessageId = async(req, res) => {
    try{
        const id = req.params.id;
        const idMessage = await Message.findOne({_id: id});
        if (idMessage){
            const response = await Message.findByIdAndDelete({_id: id});
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
            mensaje: "Mensage no eliminado", 
            // "Ocurrio un error Interno"
            err
        });
    }
}

module.exports = messageControl

