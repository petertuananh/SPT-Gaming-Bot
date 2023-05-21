const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "previous",
    aliases: ["pv"],
    category: "Music",
    description: "Play previous songs",
    cooldown: 5,
    inVoiceChannel : true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`:x: | There is nothing in the queue right now!`)
        const song = queue.previous()
        message.channel.send(`✅ | Now playing:\n${song.name}`)
    }
}