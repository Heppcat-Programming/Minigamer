const fs = require('fs');
const db = require('quick.db');
const Discord = require('discord.js');
const path = require('path')
const { prefix, token, log, message2 } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, './commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    db.add(`currentnum`, 1)
    console.log('HC');
    client.user.setActivity('The Towns', { type: 'WATCHING'}).catch(console.error);
});

client.on('message', message => {
    if(message.mentions.has(client.user)){if(message.mentions.everyone)return;message.channel.send(`The help command is h!help and to start do h!start`)}
  if (!message.content.toLowerCase().startsWith(prefix)) return;
  if(message.channel.type === `dm`) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'start'){
    if(db.get(`${message.author.id}`) === null){ message.channel.send('Started'); 
    db.set(`${message.author.id}`, {gold: 100000, townName: "", townLevel: 0, uncollected: 0, capacity: 100, rate: 2, chainsaw: 2, backpack: 10, inventory: 0, daily: false, team: {name: "", bonus: 0}})
    }    
    }
    if(db.get(`${message.author.id}`) === null) return message.channel.send('Please Start to start do h!start')
    if(command === 'collect'){
        client.commands.get('collect').execute(message, args);
    }
    if(command === 'rank'){
        client.commands.get('rank').execute(message, args);
    }
    if(command === 'townname'){
        client.commands.get('townname').execute(message, args);
    }
    if(command === 'bal' || command === 'balance'){
        client.commands.get('bal').execute(message, args);
    }
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    if(command === 'levelup'){
        client.commands.get('levelup').execute(message, args);
    }
    if(command === 'reload'){
        client.commands.get('reload').execute(message, args);
    }
    if(command === 'sell'){
        client.commands.get('sell').execute(message, args);
    }
    if(command === 'pay'){
        client.commands.get('pay').execute(message, args);
    }
    if(command === 'createteam'){
        client.commands.get('createteam').execute(message, args);
    }
    if(command === 'jointeam'){
        client.commands.get('jointeam').execute(message, args);
    }
    if(command === 'raid'){
        client.commands.get('raid').execute(message, args);
    }
})

client.on('message', message => {
    if(db.get(`restart${db.get(`currentnum`)}_${message.author.id}`) === true) return
    db.set(`restart${db.get(`currentnum`)}_${message.author.id}`, true)
    setInterval(() => {
        if(db.get(`${message.author.id}.uncollected`) >= db.get(`${message.author.id}.capacity`) + db.get(`${message.author.id}.backpack`)) return;
        db.add(`${message.author.id}.uncollected`, db.get(`${message.author.id}.rate`) + db.get(`${message.author.id}.chainsaw`))
    }, 10000)
    
})

client.login(token)