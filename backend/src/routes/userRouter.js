const {Router} = require('express');

const router = Router();

const userControl = require('../controllers/userController');

router.post('/create', userControl.crearUser);
router.get('/list', userControl.listUser);
router.get('/list/:id', userControl.listUserId);
router.post('/login', userControl.login);
router.get('/validarInfo/:correo/:telefono', userControl.validarInformacion);
router.put('/cambiarContrasena/:correo/:contrasena',userControl.actualizarContrasena);
router.get('/delete/:id', userControl.deleteUserId);

router.put('/update/:id', userControl.updateUserId);

module.exports = router