const Router = require("express");
const methods = require("../controllers/user.controller.js");

const router = Router();

router.get("/", methods.getUsers);
router.post("/", methods.addUser);

module.exports = router;
