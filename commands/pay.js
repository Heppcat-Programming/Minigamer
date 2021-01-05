const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'pay',
	description: 'shows balance',
	execute(message, args) {
	    user = message.mentions.users.first();
	    if(db.get(`${user.id}`) === null) return message.channel.send('Please tell the reciver to do h!start')
	    if(user.id === message.author.id) return message.channel.send('You cannot pay yourself')
	    balance = db.get(`${message.author.id}.gold`)
	    if(isNaN(args[1])) return message.channel.send('Please enter a number to pay')
	    amount = Number(args[1])
	    if(amount > balance)return message.channel.send('Not Enough Gold')
	        db.add(`${user.id}.gold`, amount)
	        db.subtract(`${message.author.id}.gold`, amount)
	        message.channel.send(`Paid ${user.toString()} ${amount} gold`)
    }
}