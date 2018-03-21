
function all() {
	var cmd = require('node-cmd');
    cmd.get(
        `
            sudo /opt/vc/bin/vcgencmd measure_temp
        `,	
		function(err, data, stderr) { 
			if (!err) {
				return(data)
			} else {
				return('error', err)
			}
		}); 
};
module.exports.all = all;
