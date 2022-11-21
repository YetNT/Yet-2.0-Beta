// update aoi.js on startup

const { exec } = require("child_process");
exec("npm audit fix", (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("data",data);
		return;
	}
	console.log("data",data);


// end