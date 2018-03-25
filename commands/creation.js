const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
	message.channel.send("Your account was created in `"+client.user.createdAt+"`.")
}
