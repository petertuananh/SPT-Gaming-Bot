const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "play",
    aliases: ["pl"],
    category: "Music",
    description: "Play your songs",
    cooldown: 5,
    inVoiceChannel : true,
    run: async (client, message, args) => {
        const string = args.join(' ')
        if (!string) return message.reply(`:x: | Please enter a song url or query to search.`)
        client.distube.play(message.member.voice.channel, string, {
            member: message.member,
            textChannel: message.channel,
            message
        })
    }
}