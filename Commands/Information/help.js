const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    category: "Information",
    description: "Slash all commands",
    cooldown: 5,
    run: async (client, message, args) => {
        const commands1 = client.commands
        const commands2 = client.slashcommands
        const embed1 = new MessageEmbed()
            .setTitle(`${client.user.username} help prefix command`)
            .setColor('RED')
            .addField(`Prefix commands - ${commands1.size}`, commands1.map(x => `\`${x.name}\` | \`${x.description}\` \n`).join(' > '))
            .addField(`Slash commands - ${commands2.size}`, commands2.map(x => `\`${x.name}\` | \`${x.description}\` \n`).join(' > '))
        return message.reply({embeds: [embed1]})
    }
}