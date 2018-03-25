const Discord = require('discord.js');

const manager = new Discord.ShardingManager('./bot.js');

manager.spawn(3);

manager.on('launch', shard => console.log(`Successfully launched shard ${shard.id}`));
