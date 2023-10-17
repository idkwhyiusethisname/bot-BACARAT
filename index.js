const Discord = require('discord.js') 
const config = require('./config.json');
const client = new Discord.Client({intents: 32767});
console.clear()

module.exports = client
require("./handler")(client)

client.login(config.token)