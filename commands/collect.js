const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('pretty-ms')
module.exports = {
	name: 'collect',
	description: 'shows balance',
	execute(message, args) {
	    if(!args[0]) return message.channel.send('What do you want to collect options include \`wood\` and \`daily\`')
	    if(args[0].toLowerCase() === 'wood'){
	    uncol = db.get(`${message.author.id}.uncollected`)
	    db.set(`${message.author.id}.uncollected`, 0)
	    db.add(`${message.author.id}.inventory`, uncol)
	    message.channel.send('Collected ' + uncol + ' wood')
	}
	if(args[0].toLowerCase() === 'daily'){
	    now = (new Date()).getTime()
	    if(now - db.get(`${message.author.id}.lastdaily2`) < 86400000){ 
	        time = Math.abs((new Date()).getTime() - db.get(`${message.author.id}.lastdaily2`) - 86400000)
	        return message.channel.send(`You have collected your daily bonus already please back in ${ms(time)}`)
	    }
	    now = (new Date()).getTime()
	    db.add(`${message.author.id}.gold`, 10000)
	    db.set(`${message.author.id}.daily`, true)
	    message.channel.send('Collected Daily Bonus of 10,000 gold')
	    db.set(`${message.author.id}.lastdaily2`, now)
	}
	}
    
}