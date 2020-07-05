const development_run = (message, randomName, findName, { RIGHT_MEMBERS, BOT_MESSAGE, random = false }) => {
    const serverMembers = message.guild.members.cache;

    const rightMembers = serverMembers.filter(member => RIGHT_MEMBERS.includes(member.id))

    message.channel.send(BOT_MESSAGE)

    rightMembers.forEach(member => {
        if (!member.bot) {
            const user = message.guild.member(member)
            user.setNickname(random ? randomName() : findName())
        }
    })
}

module.exports = development_run