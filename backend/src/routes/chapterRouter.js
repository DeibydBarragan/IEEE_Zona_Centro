const {Router} = require('express');

const router = Router();

const chapterControl = require("../controllers/chapterController");

router.post('/create', chapterControl.createChapter); 
router.get('/list', chapterControl.listChapter); 
router.put('/update/:id', chapterControl.updateChapterId);
router.get('/delete/:id', chapterControl.deleteChapterId);

module.exports = router


