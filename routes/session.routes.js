const express = require("express")
const router = express.Router();
const { SessionController } = require("../controllers/session.controller")

router.post("/signin", SessionController.login)
router.post('/signup', SessionController.createUser);

module.exports = {
    SessionRouter: router,
}