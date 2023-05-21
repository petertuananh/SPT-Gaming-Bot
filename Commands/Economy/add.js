const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
module.exports = {
    name: "add",
    aliases: ["buff", "buffbẩn"],
    category: "Economy",
    description: "Give someone money",
    cooldown: 5,
    ownerOnly : false,
    hostOnly: true,
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const amount = args[1]
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('tiền')
        if(isNaN(amount)){
            embed.setDescription(`> :x: Vui lòng nhập một giá trị hợp lệ!`)
            return message.reply({embeds: [embed]})
        }
        if(amount > 999999){
            return message.reply('Buff vừa vừa thôi mầy :)))')
        }
        else{
            await db.add(`nghiencoin-${user.id}`, amount)
            embed.setDescription(`> ✅ Bạn đã gửi ${amount} 🚬 đến ${user}`)
            return message.reply({embeds: [embed]})
        }
    }
}