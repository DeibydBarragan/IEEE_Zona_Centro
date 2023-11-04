const {Router} = require('express');

const router = Router();

const leaderChapter = require("../controllers/leaderChapterController");
const Auth = require('../helper/Auth');

router.post('/create', leaderChapter.createLeaderChapter); 
router.get('/list', leaderChapter.listLeaderChapter); 
router.put('/upload/:id', leaderChapter.updateLeaderChapterId);
router.get('/delete/:id', leaderChapter.deleteLeaderChapterId);
router.get('/searchByName/:nombre', Auth.verificarToken, leaderChapter.searchLeaderChapterName);
router.post('/login', leaderChapter.login);

module.exports = router