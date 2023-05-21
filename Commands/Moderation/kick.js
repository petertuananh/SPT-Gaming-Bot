const Discord = require("discord.js");
const ms = require("ms")
module.exports = {
    name: "kick",
    aliases: ["cút"],
    cooldown: 5,
    description: "kick someone",
    UserPerms: ["KICK_MEMBERS"],
    BotPerms: ["KICK_MEMBERS"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;

        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            
            .addField(`Lí do:`, `Please provide the user!`, false)
            .addField(`Cách dùng:`, `${prefix}kick [tên/ID] [Lí Do]`, false)
            

        if (!args[0]) return message.channel.send({
            embeds: [embed]
        })

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase())

        const embed1 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            .addField(`Reason:`, `Please provide correct member name or ID`, false)
            .addField(`Usage:`, `${prefix}kick [tag/ID] [reason]`, false)
            
            

        if (!member) return message.channel.send({
            embeds: [embed1]
        })

        const embed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            .addField(`Reason:`, `Your role is not enough to kick this user`, false)
            
            

        if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send({ embeds: [embed2] })

        const embed3 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            .addField(`Reason:`, `Bot's role is not enough to kick this user`, false)
            
            

        if (message.guild.me.roles.highest.position <= member.roles.highest.position) return message.reply({ embeds: [embed3] })

        const row = new Discord.MessageActionRow().addComponents(

            new Discord.MessageButton()
            .setStyle('DANGER')
            .setCustomId("kickyes")
            .setLabel("Yes"),

            new Discord.MessageButton()
            .setStyle("PRIMARY")
            .setCustomId("kickno")
            .setLabel("Cancel"),

        )

        let kickAskEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ⚠`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription("Do you really want to kick this user?\nIf you don't want to kick anymore, please wait 10s")
            

        let kickEndEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ✅`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription(`Thanks for using this command`)
            

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "Pls type reason"

        let kickEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ✅`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription(`${member} kickned with reason : ${reason}`)
            

        let kickEmbed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`kick ✅`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription(`Canceled kick!`)
            

        const kickPage = await message.reply({
            embeds: [kickAskEmbed],
            components: [row]
        })

        const col = await kickPage.createMessageComponentCollector({
            componentType: "BUTTON",
            time: ms('10s'),
        })

        col.on('collect', i => {

            if (i.user.id !== message.author.id) return

            if (i.customId === 'kickyes') {

                member.kick({
                    reason
                })

                kickPage.edit({
                    embeds: [kickEmbed],
                    components: []
                })

            } else if (i.customId === 'kickno') {

                kickPage.edit({
                    embeds: [kickEmbed2],
                    components: []
                })

            }

        })

        col.on('end', () => {

            kickPage.edit({
                embeds: [kickEndEmbed],
                components: []
            })

        })
    }
}