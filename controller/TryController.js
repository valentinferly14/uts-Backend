const { UpModel } = require("../model/TryModel");
const OutModel = async (req, res) => {
	const data = await UpModel();
	res.json({ ContohData: data });
};
module.exports = { OutModel };