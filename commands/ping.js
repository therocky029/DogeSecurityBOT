const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
	  .setColor(0x00AE86)
	  .setDescription(`Pong! API Latency is ${Math.round(client.ping)}ms.`);
	message.channel.send({embed}).catch(console.error);
}
