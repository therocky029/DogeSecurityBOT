const syn = require("../syn.js");
exports.run = (client, message, args) => {
	message.channel.send(syn.all()).catch(console.error);
}
