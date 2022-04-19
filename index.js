const express = require('express')
const App = express()
const route = require("./route/TryRoute");

App.use("/utsbackend", route);
App.listen(3002, () => {
	console.log('server oke')
});