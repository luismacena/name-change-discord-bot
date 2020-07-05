const Discord = require('discord.js')
const RIGHT_MEMBERS = require('./right_members.json')
const development_run = require('./development.js')
const production_run = require('./production.js')
const { randomName, findName } = require('./utils.js')
const config = require('./config.js')

const { BOT_TOKEN, NODE_ENV, BOT_MESSAGE, BOT_COMMAND, RANDOM_NAMES } = config

const client = new Discord.Client()

client.on('ready', () =>console.log(`Bot is running on ${NODE_ENV}!`))

client.on('message', async (message) => {
    if (message.content.startsWith(BOT_COMMAND)) {
        if (NODE_ENV === 'development') {
            development_run(message, randomName, findName, { RIGHT_MEMBERS, BOT_MESSAGE, random: RANDOM_NAMES })
        }

        if (NODE_ENV === 'production') {
            production_run(message, randomName, findName, { RIGHT_MEMBERS, BOT_MESSAGE, random: RANDOM_NAMES })
        }
    }
})
    
client.login(BOT_TOKEN)


