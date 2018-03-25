const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
	message.channel.send(args[0]).catch(sconsole.error);
}
