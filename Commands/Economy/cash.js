const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
module.exports = {
    name: "cash",
    aliases: ["wallet"],
    category: "Economy",
    description: "My wallet",
    cooldown: 5,
    ownerOnly : false,
    run: async (client, message, args) => {
        const userCash = await db.get(`nghiencoin-${message.author.id}`)
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('tiền')
        .setDescription(`> Bạn có ${userCash || 0} 🚬`)
        return message.reply({embeds: [embed]})
    }
}