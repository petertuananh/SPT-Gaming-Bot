const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const db = require('quick.db')
const ms = require('ms')
module.exports = {
    name: "delete",
    aliases: ["del"],
    category: "Economy",
    description: "Delete your account",
    cooldown: 5,
    ownerOnly : false,
    run: async (client, message, args) => {
        const userCash = await db.get(`nghiencoin-${message.author.id}`)
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('tiền')
        .setDescription(`> Khi bạn nhấn xóa, tài khoản tiền của bạn sẽ bị xóa! \n > Và bạn mất ${userCash} 🚬`)
        const embed3 = new MessageEmbed()
            .setDescription(`> ✅ Xóa tài khoản thành công!`)
            .setTitle('tiền')
            .setColor('RED')
        const embed2 = new MessageEmbed()
            .setDescription(`> ✅ Đã hủy quá trình xóa tài khoản!`)
            .setTitle('tiền')
            .setColor('RED')
        const embed4 = new MessageEmbed()
            .setDescription(`> :x: Bạn chưa có tài khoản để xóa!`)
            .setTitle('tiền')
            .setColor('RED')
        if(!userCash){
            return message.reply({embeds: [embed4]})
        }
        const row = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle('DANGER')
            .setCustomId("xoa")
            .setLabel("Xóa"),
        )
        const msg = await message.reply({embeds: [embed], components: [row]})
        const col = await msg.createMessageComponentCollector({
            componentType: "BUTTON",
            time: ms('15s'),
        })
    
        col.on('collect', async i => {
            if (i.user.id !== message.author.id) return 
            if (i.customId === 'xoa') {
                await db.delete(`nghiencoin-${message.author.id}`)
                return msg.edit({
                    embeds: [embed3],
                    components: []
                })
            }
        })
        col.on('end', () => {
            return msg.edit({
                embeds: [embed2],
                components: []
            })
        })
    }
}