const {Router} = require('express');

const router = Router();

const messageControl = require('../controllers/messageController');

router.post("/send", messageControl.createMessage);
router.get('/list', messageControl.listMessage);
router.get("/load/:id", messageControl.listMessageId);
router.get('/delete/:id', messageControl.deleteMessageId);

module.exports = router