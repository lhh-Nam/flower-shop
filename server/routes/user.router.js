const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post("/register", userController.register); // xác định controller =>> register
router.get("/refresh_token", userController.refreshToken); // xác định controller =>> register

module.exports = router;
