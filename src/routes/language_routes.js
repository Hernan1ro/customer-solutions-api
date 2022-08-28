const Router = require("express");
const methods = require("./../controllers/lenguage.controller.js");

const router = Router();

router.get("/", methods.getUsers);

module.exports = router;
