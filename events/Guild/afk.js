const {
    MessageEmbed
} = require('discord.js')
const db = require('quick.db')
const client = require('../../index.js');
client.on('messageCreate', async message => {
    if (!message.guild) return;
    if (await db.fetch(`afk-${message.author.id}`)) {

        const info = await db.get(`afk-${message.author.id}`);
        await db.delete(`afk-${message.author.id}`);

        try {
            await message.member.setNickname(null)
        } catch (err) {
            
        }

        const afterAFK = new MessageEmbed()
            .setTitle(`AFK`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`${message.author.username} đã quay trở lại`)
            .addField(`Reason`, `${info}`)
            .setColor("GREEN")
            .setTimestamp();
        message.channel.send({
            embeds: [afterAFK]
        })

    }

    const mentionedMember = message.mentions.members.first();
    if (mentionedMember) {
        if (await db.fetch(`afk-${message.mentions.members.first().id}`)) {
            const tagAFK = new MessageEmbed()
                .setTitle(`AFK`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`${mentionedMember.user.username} is now AFk!`)
                .addField(`Reason`, await db.fetch(`afk-${message.mentions.members.first().id}`))
                .setColor("RED")
                .setTimestamp();
            message.channel.send({
                embeds: [tagAFK]
            });
        } else return;
    }

})