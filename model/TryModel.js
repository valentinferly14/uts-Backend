const { readFileSync } = require("fs")
const UpModel = async () => {
	const data = await readFileSync('model/TryData.json', 'utf-8');
	return JSON.parse(data)
};

module.exports = { UpModel };