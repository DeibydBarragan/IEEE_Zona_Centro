const mailCredentialsControl = {};

const MailCredentials = require('../models/mailCredentialsModels');

// mailCredentialsControl.loadCredentials = async(req, res) => {
//     const response = await MailCredentials.find()
//     res.status(200).json({
//         text: "data cargada correctamente",
//         response
//     })      
// }

mailCredentialsControl.loadCredentials = async(req, res) => {
    const response = await MailCredentials.find()
    res.status(200).json(response)      
}

module.exports = mailCredentialsControl