const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'levelup',
	description: 'shows balance',
	execute(message, args) {
	    if(!args[0]) return message.channel.send('What do you want to upgrade options are \`town\`, \`chainsaw\` and \`backpack\`')
	    if(args[0].toLowerCase() === 'town'){
        if(db.get(`${message.author.id}.townLevel`) <= 10 && db.get(`${message.author.id}.gold`) >= 50000){
        db.add(`${message.author.id}.townLevel`, 1)
        newlvl = db.get(`${message.author.id}.townLevel`)
        rate = db.get(`${message.author.id}.rate`)
        db.set(`${message.author.id}.rate`, rate + 2)
        capacity = db.get(`${message.author.id}.capacity`)
        db.set(`${message.author.id}.capacity`, capacity * 2)
        db.subtract(`${message.author.id}.gold`, 50000)
        message.channel.send('Level up complete you are now at level ' + newlvl)
        }else{
            message.channel.send('Not enough gold you need 50,000 gold for this or you are at the max level')
        }
	    }
	    if(args[0].toLowerCase() === 'chainsaw'){
	        if(db.get(`${message.author.id}.gold`) >= 1000){
	            db.subtract(`${message.author.id}.gold`, 1000)
	            db.add(`${message.author.id}.chainsaw`, 2)
	            message.channel.send('Upgraded Chainsaw')
	        }else{
	            message.channel.send('Not enough gold')
	        }
	    }
	         if(args[0].toLowerCase() === 'backpack'){
	        if(db.get(`${message.author.id}.gold`) >= 1000){
	            db.subtract(`${message.author.id}.gold`, 1000)
	            db.add(`${message.author.id}.backpack`, 50)
	            message.channel.send('Upgraded Backpack')
	        }else{
	            message.channel.send('Not enough gold')
	        }
	    }
    }
}