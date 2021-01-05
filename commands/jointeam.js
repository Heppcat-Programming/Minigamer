const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'jointeam',
	description: 'shows balance',
	execute(message, args) {
	    if(!args[0]) return message.channel.send('Please enter a team name format \`h!jointeam "name"\`')
	    team = db.get(`${message.author.id}.team.name`)
	    if(db.get(`teams.${args[0]}`) === null) return message.channel.send('Team does not exist *Capitalization Matters*')
	    if(team === ""){
	     db.set(`${message.author.id}.team.name`, args[0])
	     db.add(`teams.${args[0]}.bonus`, 4)
	     return message.channel.send('Joined team ' + args[0])
	    }
	    if(db.get(`teams.${team}.owner`) === message.author.id) return message.channel.send('You own a team *Team modification comes soon*')
	    db.set(`${message.author.id}.team.name`, args[0])
	    db.add(`teams.${args[0]}.bonus`, 4)
	     return message.channel.send('Joined team ' + args[0])
    }
}