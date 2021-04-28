const categoryController = require("../controllers/category.controller");

const router = require("express").Router();

router.route("/category").get(categoryController.getCategories);

module.exports = router;
