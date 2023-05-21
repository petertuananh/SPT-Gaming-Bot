const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const client = require('../../index.js');
client.on('messageCreate', async (message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    const randomXP = Math.floor(Math.random() * 22) + 8;
    db.add(`xp-${message.guild.id}-${message.author.id}`, randomXP)
    db.add(`xpTotal-${message.guild.id}-${message.author.id}`, randomXP)
    const level = db.fetch(`level-${message.guild.id}-${message.author.id}`)
    const XP = db.fetch(`xp-${message.guild.id}-${message.author.id}`)
    const XPneeded = level * 2 * 250 + 250

    if (XPneeded < XP) {
        const newLevel = db.add(`level-${message.guild.id}-${message.author.id}`, 1)
        db.subtract(`xp-${message.guild.id}-${message.author.id}`, XPneeded)
        const channel = message.guild.channels.cache.get(client.config.general.levelChannel)
        if (channel) {
            const embed1 = new MessageEmbed()
                .setTitle(`LV 🚀`, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor("RED")
                .setDescription(`:tada: ${message.author} have reached **Lv.${newLevel}** ! :tada:`)
            channel.send({ embeds: [embed1]})
        } else {
            const embed2 = new MessageEmbed()
                .setTitle(`LV 🚀`, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor("RED")
                .setDescription(`:tada: ${message.author} have reached **Lv.${newLevel}** ! :tada:`)
            return message.channel.send({embeds: [embed2]})
        }
        if(newLevel == 5){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.five)
        }
        else if(newLevel == 10){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.ten)
        }
        else if(newLevel == 15){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.fifteen)
        }
        else if(newLevel == 20){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.twenty)
        }
        else if(newLevel == 25){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.twentyfive)
        }
        else if(newLevel == 30){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.thirty)
        }
        else if(newLevel == 35){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.thirtyfive)
        }
        else if(newLevel == 40){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.forty)
        }
        else if(newLevel == 45){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.fortyfive)
        }
        else if(newLevel == 50){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.fifty)
        }
        else if(newLevel == 60){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.sixty)
        }
        else if(newLevel == 70){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.seventy)
        }
        else if(newLevel == 80){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.eighty)
        }
        else if(newLevel == 90){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.ninety)
        }
        else if(newLevel == 100){
            message.guild.members.cache.get(message.author.id).roles.add(client.config.roleRank.onehundred)
        }
    }
})