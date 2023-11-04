const chapterControl = {};

const Chapter = require('../models/chapterModels')

chapterControl.createChapter = async(req, res) =>{
    const {name, nameLong, info, colorId, facebook, instagram} = req.body
    const NewChapter = new Chapter({name, nameLong, info, colorId, facebook, instagram})
    try{
        const response = await NewChapter.save()
        res.status(200).json({
            mensaje: "Capitulo creado",
            response
        })
    }
    catch(err){
        res.status(500).json({
            mensaje: "Capitulo no creado", 
            err
        })
    }
}

chapterControl.listChapter = async(req, res) => {
    const response = await Chapter.find()
    res.status(200).json(response)  

}

chapterControl.updateChapterId = async(req, res) => {
    try{
        const id = req.params.id;
        const response = await Chapter.findByIdAndUpdate({_id: id}, req.body)
        res.status(200).json({
            mensaje: "Capitulo actualizado", 
            response
        })
    }
    catch(err){
        res.status(500).json({
            mensaje: "Capitulo no actualizado", 
            response
        })
    }
}

chapterControl.deleteChapterId = async(req, res) => {
    try{
        const id = req.params.id;
        const idChapter = await Chapter.findOne({_id: id});
        if (idChapter){
            const response = await Chapter.findByIdAndDelete({_id: id});
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
            mensaje: "Capitulo no eliminado",
            err
        })
    }
        
}


module.exports = chapterControl