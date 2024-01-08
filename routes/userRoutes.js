const router = require("express").Router();
const { registerUser, login } = require("../controllers/userController.js");

router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
