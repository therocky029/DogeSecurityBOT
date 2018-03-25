const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
	message.channel.send(`Current member count: ${client.users.size}`);
}
