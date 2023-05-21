const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
module.exports = {
    name: "give",
    aliases: ["g"],
    category: "Economy",
    description: "Give someone money",
    cooldown: 5,
    ownerOnly : false,
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const amount = args[1]
        const userCash = await db.get(`nghiencoin-${message.author.id}`)
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('tiền')
        if(isNaN(amount)){
            embed.setDescription(`> :x: Vui lòng nhập một giá trị hợp lệ!`)
            return message.reply({embeds: [embed]})
        }
        if(amount > userCash){
            embed.setDescription(`> :x: Bạn không có đủ 🚬 để chuyển \n > Hiện tại bạn có ${userCash} 🚬`)
            return message.reply({embeds: [embed]})
        }
        else{
            await db.subtract(`nghiencoin-${message.author.id}`, amount)
            await db.add(`nghiencoin-${user.id}`, amount)
            embed.setDescription(`> ✅ Bạn đã chuyển ${amount} 🚬 đến ${user}`)
            return message.reply({embeds: [embed]})
        }
    }
}