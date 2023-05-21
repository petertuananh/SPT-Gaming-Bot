const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "stop",
    aliases: ["st"],
    category: "Music",
    description: "Stop the queue",
    cooldown: 5,
    inVoiceChannel : true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.reply(`:x: | There is nothing in the queue right now!`)
        queue.stop()
        message.reply(`✅ | Stopped!`)
    }
}