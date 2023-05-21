const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    description: "Show all commands",
    ownerOnly : false,
    "options": [
        {
            "name": "type",
            "description": "Type",
            "type": 3,
            "required": true,
            "choices": [
                {
                    "name": "prefix",
                    "value": "prefix"
                },
                {
                    "name": "slash",
                    "value": "slash"
                }
            ],
        },
    ],
    run: async (client, interaction, args, err) => {
        const commands1 = client.commands
        const commands2 = client.slashcommands
        const embed1 = new MessageEmbed()
            .setTitle(`${client.user.username} help prefix command`)
            .setColor('RED')
            .addField(`Prefix commands - ${commands1.size}`, commands1.map(x => `\`${x.name}\` | \`${x.description}\` \n`).join(' > '))
            .addField(`Slash commands - ${commands2.size}`, commands2.map(x => `\`${x.name}\` | \`${x.description}\` \n`).join(' > '))
        return interaction.reply({embeds: [embed1]})
    }
}
