const client = require('../../index')
const Discord = require('discord.js')
const ms = require('ms')
client.on('guildMemberAdd', async (user) => {
    // user
    try {
        user.guild.channels.cache.get('962959166920593428').setName(`All user: ${user.guild.memberCount}`)
    } catch (error) {
        
    }





    const wlChannel = await user.guild.channels.cache.get(client.config.general.welcome)
    const chatChannel = await user.guild.channels.cache.get(client.config.general.mainchat)
    const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setStyle('PRIMARY')
        .setCustomId("banyes")
        .setLabel("Welcome"),
    )
    const embed = new Discord.MessageEmbed()
        .setDescription(`
        
        Chào mừng bạn đến với ${user.guild.name} của chúng mình, ${user} bọn mình rất vui khi được đón tiếp bạn.
        \`DƯỚI ĐÂY LÀ MỘT VÀI BƯỚC ĐƠN GIẢN ĐẾ GIÚP BẠN HÒA NHẬP NHANH HƠN VỚI MỌI NGƯỜI\`
        > Nhớ đọc <#809140178739265616> để tránh bị bay màu nhaa.

        > Vào kênh <#1001153973539053587> để chọn role mà bạn thích.

        > Giờ thì còn chần chờ gì nữa, cùng trò chuyện cùng với bọn mình tại <#840225732902518825> thôi nào !
        `)
        .setThumbnail(user.user.avatarURL({dynamic: true, size: 2048}))
        .setColor('RED')
        // .setImage('https://cdn.discordapp.com/attachments/936153516500746300/963483800703217714/unknown.png')
        // .setImage(`https://cdn.discordapp.com/banners/${user.guild.id}/${user.guild.banner}.png?size=4096`)
    try {
        const send = await wlChannel.send({embeds: [embed], components: [row], content : `Mn ơi ra đón tiếp ${user} nè :3`})
        const col = await send.createMessageComponentCollector({
            componentType: "BUTTON",
            time: ms('24h'),
        })
    
        col.on('collect', async i => {
            const embed3 = new Discord.MessageEmbed()
            .setDescription(`Hello ${user.user.tag}, chúc bạn có nhưng phút giây vui vẻ tại ${user.guild.name}`)
            .addField('Bạn xem qua các kênh này nhé :3', '> Đọc luật ở đây nà <#957618205050957915> \n > Chat chung vui cùng mọi người tại <#961122282942648331> nhé')
            .setColor('RED')
            const banner = await user.guild.members.cache.get(i.user.id)
            // if(!banner.roles.cache.has(client.config.general.receptRole)) return
    
            if (i.customId === 'banyes') {
                return send.edit({
                    embeds: [embed3],
                    components: []
                })
            }
    
        })
    
        col.on('end', () => {
            return
        })
        try {
            // user.roles.add('962739638269804594')
            // user.roles.add('957618224474775664')
            // user.roles.add('957618357354528829')
            // user.roles.add('957618241075838986')
            // user.roles.add('957618382771986442')
        } catch (error) {
            
        }
        try {
            // const nofiRole = await user.guild.channels.cache.get(client.config.general.pickRoleChannel).send(`Chọn role cho mình nhé ${user} :3`)
        } catch (error) {
            
        }
        setTimeout(() => nofiRole.delete(), 7000)
    } catch (error) {
        
    }
    

    

    
    try {
        // chatChannel.send(`Ê, <@751319956121059338> ơi ra đón tiếp ${user} nè :3`)
    } catch (error) {
        
    }
    // const send = await chatChannel.send({components: [row]})
    
})