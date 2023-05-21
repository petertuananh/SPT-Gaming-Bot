const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'afk',
    aliases: ['afking'],
    category: 'Utility',
    description: 'AFK mode',
    cooldown: 5,
    run: async (client, message, args) => {
        const reason = args.join(' ');

        const whatReason = new MessageEmbed()
            .setTitle(`AFK`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
            .setColor('RED')
            .setDescription('Please tell me the reason')
            .setImage(db.get(`banner-${message.guild.id}`))
            .setTimestamp();

        if (!reason) return message.channel.send({
            embeds: [whatReason]
        })

        const AFKPrefix = `[AFK] `

        try {
            await db.set(`afk-${message.author.id}`, reason);
            const AFKEmbed = new MessageEmbed()
            .setTitle(`AFK`, client.user.displayAvatarURL())
            .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .setDescription(`${message.author.username} started afk!`)
                .addField(`Afk reason`, `${reason}`)
                .setColor("GREEN")
                
                .setImage(db.get(`banner-${message.guild.id}`))
                .setTimestamp();
            message.channel.send({
                embeds: [AFKEmbed]
            })
        } catch (err) {
            return;
        }

        try {
            await message.member.setNickname(AFKPrefix + message.member.user.username)
        } catch (err) {
            return;
        }
    }
}