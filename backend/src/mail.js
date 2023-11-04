const nodemailer = require('nodemailer');
const Axios = require('axios');


// const response = await Axios.post('/message/load', userData);
// const messageDB = response.data.text
// console.log(res)

// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'jflancherosm@unal.edu.com',
//         pass: ''
//     }
// });

// let mailDetails = {
//     from: 'xyz@gmail.com',
//     to: 'abc@gmail.com',
//     subject: 'Test mail',
//     text: 'Node.js testing mail for GeeksforGeeks'
// };
 
// mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//     } else {
//         console.log('Email sent successfully');
//     }
// });


// enviarMail = () => {
//     const config = {
//         host: setp.gmail.com,
//         port: 587,
//         auth: {
//             user: "jflancherosm@unal.edu.co",
//             pass: ""
//         }
//     }

//     const mensaje = {
//         from: "julianfel_@hotmail.com", 
//         to: "jflancherosmunal.edu.co", 
//         subject: "correo de prueba ",
//         text: "Envio de correo de prueba, este correo es enviado desde nodemailer"
//     }
    
//     const transport = nodemailer.createTransport(config);

//     const info = trasnport.sendMail(mensaje)

// enviarMail()
      

let setCredentials; 
Axios.get("/credentials/send").then((result) => {
    setCredentials(result.data);
    console.log(setCredentials)
});

// const enviarMail = () => {
//     const config = {
//         host: "setp.gmail.com",
//         port: 587,
//         auth: {
//             user: mailCredentials,
//             pass: passwordCredentials
//         }
//     }

//     const mailOptions = {
//         from: mail, 
//         to: "jflancherosm@unal.edu.co", 
//         subject: `correo de prueba from ${mail}`,
//         text: `Hola soy ${fullName} y pertenezco al ${program} estoy interesado en el capitulo ${chapter} y el mesanje que les envio por el formulario es: ${message}`
//     }

//     const transport = nodemailer.createTransport(config);
//     transport.sendMail(mailOptions)
    
//     const info = transport.sendMail(mailOptions, (error,info) => {
//     	if(error){
//     		console.log(error);
//     	}
//     	else{
//     		console.log(`Email send: ${info}`)
//     	}
//     })
// }