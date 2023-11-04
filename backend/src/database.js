const mongoose = require('mongoose');


// const url = ''; // Aqui va el enlace de la conexion con la base de datos 
const url = 'mongodb://localhost:27017/IeeeUnal';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
// Or using promises
mongoose.connect(url, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to 
   mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
);

module.exports=mongoose