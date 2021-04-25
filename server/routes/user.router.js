const router = require("express").Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

router.post("/register", userController.register); // xác định controller =>> register

router.post("/login", userController.login); // xác định controller =>> login

router.get("/logout", userController.logout); // xác định controller =>> login

router.get("/refresh_token", userController.refreshToken); // xác định controller =>> register

router.get('/infor', auth, userController.getUser)

module.exports = router;
