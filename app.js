const { exec } = require("node:child_process");

function getProcesses() {
	exec("ps aux", (err, stdout) => {
		if (err) throw new Error(err);
		console.log(stdout);
	});
}

getProcesses();
