const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'townname',
	description: 'Buys Item',
	execute(message) {
	    db.set(`${message.author.id}.townName`, message.content.split(/ +/).slice(1).join(' '))
	    message.channel.send(`Town name set as ${db.get(`${message.author.id}.townName`)}`)
	}
    
}