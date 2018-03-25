const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
	  .setColor(0x00AE86)
	  .setDescription("**Your avatar!:**")
	  .setImage(message.author.avatarURL);
	message.channel.send({embed}).catch(console.error);
}
