const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'createteam',
	description: 'shows balance',
	execute(message, args) {
	    if(!args[0]) return message.channel.send('Please enter a team name format \`h!createteam "name"\`')
	    team = db.get(`${message.author.id}.team.name`)
	    if(team === ""){
	     db.set(`teams.${args[0]}`, {name: args[0], bonus: 0, owner: message.author.id})
	     db.set(`${message.author.id}.team.name`, args[0])
	     return message.channel.send('Created team ' + args[0])
	    }
	    if(db.get(`teams.${team}.owner`) === message.author.id) return message.channel.send('You already own a team *Team modification comes soon*')
	    db.set(`teams.${args[0]}`, {name: args[0], bonus: 0, owner: message.author.id})
	     db.set(`${message.author.id}.team.name`, args[0])
	     return message.channel.send('Created team ' + args[0])
    }
}