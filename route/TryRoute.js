const { Router } = require("express");
const { OutModel } = require("../controller/TryController");
const route = Router();
route.get("/", (req, res) => {
	OutModel(req, res);
});
module.exports = route;