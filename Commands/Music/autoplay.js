const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "autoplay",
    aliases: ["ap"],
    category: "Music",
    description: "Auto play next songs",
    cooldown: 5,
    inVoiceChannel : true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`:x: | There is nothing in the queue right now!`)
        const autoplay = queue.toggleAutoplay()
        message.channel.send(`✅ | AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
    }
}