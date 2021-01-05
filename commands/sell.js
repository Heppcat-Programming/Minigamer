const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'sell',
	description: 'Buys Item',
	execute(message) {
	    if(db.get(`${message.author.id}.inventory`) < 1) return message.channel.send('Not enough wood in inventory')
	       gold = parseInt(db.get(`${message.author.id}.inventory`) / 4)
	        uncollected = db.get(`${message.author.id}.inventory`) % 4
	        team = db.get(`${message.author.id}.team.name`)
	        bonus = db.get(`teams.${team}.bonus`)
	        if(bonus === undefined) bonus = 0
	        goldtot = gold*30
	        db.add(`${message.author.id}.gold`, goldtot + bonus)
	        db.set(`${message.author.id}.inventory`, uncollected)
	        bal = db.get(`${message.author.id}.gold`)
	        ucol = db.get(`${message.author.id}.inventory`)
        collected = new Discord.MessageEmbed()
        .setTitle('Sold')
        .setColor('#0000ff')
        .setDescription(`Balance: \`${bal}\` Inventory: \`${ucol}\``);
        message.channel.send(collected)
	}
    
}