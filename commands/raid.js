const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'raid',
	description: 'Buys Item',
	execute(message, args) {
	    if(db.get(`${message.author.id}.gold`) < 5000) return message.channel.send('Not enough gold')
	    persontoraid = message.mentions.users.first()
	    if(!persontoraid && !args[0]) return message.channel.send('Please mention or enter an ID of a person to raid')
	    if(db.get(`${persontoraid.id}.gold`) < 1000) return message.channel.send('They do not have enough gold')
	    if(db.get(`${persontoraid.id}.inventory`) < 1000) return message.channel.send('They do not have enough wood in there inventory')
	    woodandgold = Math.floor((Math.random() * 1000) + 1);
	    db.subtract(`${persontoraid.id}.wood`, woodandgold)
	    db.subtract(`${persontoraid.id}.gold`, woodandgold)
	    db.add(`${message.author.id}.gold`, woodandgold)
	    db.add(`${message.author.id}.wood`, woodandgold)
        collected = new Discord.MessageEmbed()
        .setTitle('Raided')
        .setColor('#0000ff')
        .setDescription(`Got \`${woodandgold}\` gold and \`${woodandgold}\` wood`);
        message.channel.send(collected)
	}
    
}