const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const syn = require("./syn");
const temperature = require("./temp.js");
const temp = temperature.all();

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`On ${client.guilds.size} servers. By HyperNovae#5068`);
  var u, user;
  for(u in client.users){
	  users = client.users[u];
	  if(user instanceof Discord.User) console.log("["+u+"] "+user.username);
  }
}, 10000);

client.on('message', async message => {
	if(message.content.indexOf(config.prefix) !== 0) return;
	
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    
    const commands = {
		"test": "Echo!"
	};
    
    const command = args.shift().toLowerCase();

	if (command === 'ping') {
    const m = await message.channel.send("Ping?");
    m.edit({embed : {
		color: 3447003,
		description: `Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`
	}});
}

	if (command === 'dice') {
		var randomNumber = Math.floor(Math.random() * 1000);
		if (randomNumber >= 500) {
			await message.channel.send("You won! You rolled " + randomNumber + ".");
		} else {
			await message.channel.send("You lost. You rolled " + randomNumber + ". Your roll has to be +500.");
		}
	}
	if (command === 'temp') {
		await message.channel.send("Raspberry pi 3 temperature: "+temp) 
	
	}
	if(commands[message.content]) {
		await message.channel.send(commands[message.content]);
	}
	if (command === 'perl') {
		await message.channel.send("Perl is GAY!!!! REEEEEEEE!");
	}
	if (command === 'pi') {
		message.delete()
		await message.channel.send(`${Math.PI}`)
	}
	if (command == 'xor') {
		const xor = syn.all();
		await message.channel.send(xor);
	}
	if (command == 'help') {
		await message.channel.send({embed: {
			color: 3447003,
			description: "Coming soon!"
		}});
	}
	if (command === 'about') {
		await message.channel.send({embed: {
		color: 3447003,
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
			},
			fields: [{
				name: "Who wrote this bot?",
				value: "It is made by **DogeSecurity**."
			},
			{
				name: "Why?",
				value: "Lacked motivation to learn JS. Gained it by writing a bot along the way."
			},
			{
				name: "My Github account",
				value: "[ThePythonDoge](https://github.com/ThePythonDoge)"
			}
		 ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© HyperNovae"
    }
  }
});

}});
client.login(config.token);
