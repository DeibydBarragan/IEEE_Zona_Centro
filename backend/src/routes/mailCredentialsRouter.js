const {Router} = require('express');

const router = Router();

const mailCredentialsControl = require("../controllers/mailCredentialsController");

router.get('/send', mailCredentialsControl.loadCredentials)

module.exports = router