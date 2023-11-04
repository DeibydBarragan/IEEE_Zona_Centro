const {Router} = require('express');

const router = Router();

const adminControl = require('../controllers/adminController');

router.post('/crear', adminControl.createAdmin);
router.post('/login', adminControl.login);


module.exports = router