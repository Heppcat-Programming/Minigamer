const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'help',
	description: 'shows balance',
	execute(message) {
        help = new Discord.MessageEmbed()
        .setTitle('Help')
        .setColor('#0000ff')
        .addFields(
            { name: 'h!rank', value: `Shows Rank`, inline: false },
            { name: 'h!bal also h!balance', value: `Shows Balance`, inline: false },
            { name: "h!townname 'name'", value: `Sets Town Name`, inline: false },
            { name: "h!sell", value: `Sells Wood`, inline: false },
            { name: "h!createteam 'name *No spaces*'", value: `Makes Team`, inline: false },
            { name: "h!jointeam  'name' *Caps Matters*", value: `Joins Team`, inline: false },
            { name: "h!collect 'item'", value: `Items include wood and daily (daily is the bonus coins)`, inline: false },
            { name: "h!raid 'user mention'", value: `Raids user and steals _ wood and _ gold costs 5,000 gold`, inline: false },
            { name: "h!levelup 'item'", value: `Items include town for 50,000 chainsaw for 1,000 or backpack for 1,000 backpack increases capacity by 50 chainsaw increases rate by 2 (rate is how much money you make each time you get money) and town is rate by 2 and capacity by *2`, inline: false }
            );
        message.channel.send(help)
    }
}