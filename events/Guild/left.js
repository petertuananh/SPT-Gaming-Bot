const client = require('../../index')
const Discord = require('discord.js')
const ms = require('ms')
client.on('guildMemberRemove', async (user) => {
    try {
        user.guild.channels.cache.get('962959166920593428').setName(`All user: ${user.guild.memberCount}`)
    } catch (error) {
        
    }
    const wlChannel = await user.guild.channels.cache.get(client.config.general.goodbye)
    const chatChannel = await user.guild.channels.cache.get(client.config.general.staffChannel)
    const embed = new Discord.MessageEmbed()
        .setTitle(`Goodbye`)
        .setDescription(`Ôi không, ${user} vừa rời khỏi ${user.guild.name} \n > Mong một ngày nào đó bạn ấy sẽ quay lại :/`)
        .setThumbnail(user.user.avatarURL({dynamic: true, size: 2048}))
        .setColor('RED')
        .setImage(`https://cdn.discordapp.com/banners/${user.guild.id}/${user.guild.banner}.png?size=4096`)
    try {
        wlChannel.send({embeds: [embed]})
    } catch (error) {
        
    }


    // const row = new Discord.MessageActionRow().addComponents(
    //     new Discord.MessageButton()
    //     .setStyle('DANGER')
    //     .setCustomId("banyes")
    //     .setLabel("BAN"),
    // )
    // const embed2 = new Discord.MessageEmbed()
    //     .setDescription(`Ôi không, ${user} vừa rời khỏi ${user.guild.name}`)
    //     .setColor('RED')

    
    // const send = await chatChannel.send({embeds: [embed2], components: [row]})
    // const col = await send.createMessageComponentCollector({
    //     componentType: "BUTTON",
    //     time: ms('24h'),
    // })

    // col.on('collect', async i => {
    //     const embed3 = new Discord.MessageEmbed()
    //     .setDescription(`> Banned ${user} by ${i.user}`)
    //     .setColor('RED')
    //     const banner = await user.guild.members.cache.get(i.user.id)
    //     if(!banner.permissions.has('BAN_MEMBERS')) return

    //     if (i.customId === 'banyes') {

    //         await user.guild.members.ban(user.id, {reason: `The user left and banned by ${banner.user.username}`})
    //         return send.edit({
    //             embeds: [embed3],
    //             components: []
    //         })
    //     }

    // })

    // col.on('end', () => {
    //     return
    // })
})