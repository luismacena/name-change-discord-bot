const production_run = (message, randomName, findName, { RIGHT_MEMBERS, BOT_MESSAGE, random = false }) => {
    const serverMembers = message.guild.members.cache;
        
    message.channel.send(BOT_MESSAGE)
    
    serverMembers.forEach(member => {
        if (!member.bot) {
            const user = message.guild.member(member)
            user.setNickname(random ? randomName() : findName())
        }
    })
}

module.exports = production_run