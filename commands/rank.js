const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'rank',
	description: 'Buys Item',
	execute(message) {
	    user = message.mentions.users.first() || message.author
	    team = db.get(`${user.id}.team.name`)
	    rank = new Discord.MessageEmbed()
	    .setTitle(`${user.tag}'s Rank`)
	    .setColor(`#000ff`)
	    .addFields(
            { name: ' 💰 Gold', value: `\`${db.get(`${user.id}.gold`)}\``, inline: false},
            { name: 'Wood', value: `\`${db.get(`${user.id}.uncollected`)}\``, inline: false },
            { name: 'Capacity', value: `\`${db.get(`${user.id}.capacity`) + db.get(`${user.id}.backpack`)}\``, inline: false },
            { name: 'Chainsaw', value: `\`${db.get(`${user.id}.chainsaw`)}\``, inline: false },
            { name: 'Backpack', value: `\`${db.get(`${user.id}.backpack`)}\``, inline: false },
            { name: 'Inventory', value: `\`${db.get(`${user.id}.inventory`)}\``, inline: false },
            { name: 'Team', value: `\`${db.get(`${user.id}.team.name`)}\``, inline: false },
            { name: 'Team Bonus', value: `\`${db.get(`teams.${team}.bonus`)}\``, inline: false },
            { name: 'Rate', value: `\`${db.get(`${user.id}.rate`) + db.get(`${user.id}.chainsaw`)}\``, inline: false },
            { name: 'Town Name', value: `\`${db.get(`${user.id}.townName`)}\``, inline: false },
            { name: 'Town Level', value: `\`${db.get(`${user.id}.townLevel`)}\``, inline: false }
            );
        message.channel.send(rank)
	}
    
}