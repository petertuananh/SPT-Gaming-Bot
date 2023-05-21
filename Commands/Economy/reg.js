const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
module.exports = {
    name: "register",
    aliases: ["reg"],
    category: "Economy",
    description: "Register your account",
    cooldown: 5,
    ownerOnly : false,
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('tiền')
        const userCash = await db.get(`nghiencoin-${message.author.id}`)
        if(userCash){
            embed.setDescription(`> :x: Bạn đã đăng kí rồi!`)
            return message.reply({embeds: [embed]})
        }
        await db.set(`nghiencoin-${message.author.id}`, 0)
        embed.setDescription(`> ✅ Bạn đã đăng kí thành công \n > Bạn nhận được 0 🚬 :>`)
        return message.reply({embeds: [embed]})
    }
}