const {Router} = require('express');

const router = Router();

const memberControl = require("../controllers/membersController");

router.post('/create', memberControl.createMember); 
router.get('/list', memberControl.listMember); 
router.put('/update/:id', memberControl.updateMemberId);
router.get('/delete/:id', memberControl.deleteMemberId);

module.exports = router


