const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "pause",
    aliases: ["pa"],
    category: "Music",
    description: "Pause the queue",
    cooldown: 5,
    inVoiceChannel : true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        queue.pause()
        message.reply('Paused the song for you :>')
    }
}