const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'bal',
	description: 'shows balance',
	execute(message) {
	    user = message.mentions.users.first() || message.author
	    balance = db.get(`${user.id}.gold`)
	    bal = new Discord.MessageEmbed()
	    .setTitle(`${user.tag}'s Gold`)
	    .setDescription(`💰 \`${balance}\``)
	    .setColor('#0000ff')
        message.channel.send(bal)
    }
}