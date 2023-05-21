const Discord = require("discord.js");
const ms = require("ms")
const db = require("quick.db");
module.exports = {
    name: "ban",
    aliases: ["banned"],
    cooldown: 5,
    description: "Ban someone",
    UserPerms: ["BAN_MEMBERS"],
    BotPerms: ["BAN_MEMBERS"],
    category: 'Moderation',
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;

        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            
            .addField(`Lí do:`, `Please provide the user!`, false)
            .addField(`Cách dùng:`, `${prefix}ban [tên/ID] [Lí Do]`, false)
            

        if (!args[0]) return message.channel.send({
            embeds: [embed]
        })

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase())

        const embed1 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            .addField(`Reason:`, `Please provide correct member name or ID`, false)
            .addField(`Usage:`, `${prefix}ban [tag/ID] [reason]`, false)
            
            

        if (!member) return message.channel.send({
            embeds: [embed1]
        })

        const embed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            .addField(`Reason:`, `Your role is not enough to ban this user`, false)
            
            

        if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send({ embeds: [embed2] })

        const embed3 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ❌`, client.user.displayAvatarURL())
            
            .setTimestamp()
            .addField(`Reason:`, `Bot's role is not enough to ban this user`, false)
            
            

        if (message.guild.me.roles.highest.position <= member.roles.highest.position) return message.reply({ embeds: [embed3] })

        const row = new Discord.MessageActionRow().addComponents(

            new Discord.MessageButton()
            .setStyle('DANGER')
            .setCustomId("banyes")
            .setLabel("Yes"),

            new Discord.MessageButton()
            .setStyle("PRIMARY")
            .setCustomId("banno")
            .setLabel("Cancel"),

        )

        let banAskEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ⚠`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription("Do you really want to ban this user?\nIf you don't want to ban anymore, please wait 10s")
            

        let banEndEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ✅`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription(`Thanks for using this command`)
            

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "Pls type reason"

        let banEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ✅`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription(`${member} banned with reason : ${reason}`)
            

        let banEmbed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`BAN ✅`, client.user.displayAvatarURL())
            
            
            .setTimestamp()
            .setDescription(`Canceled ban!`)
            

        const banPage = await message.reply({
            embeds: [banAskEmbed],
            components: [row]
        })

        const col = await banPage.createMessageComponentCollector({
            componentType: "BUTTON",
            time: ms('10s'),
        })

        col.on('collect', i => {

            if (i.user.id !== message.author.id) return

            if (i.customId === 'banyes') {

                member.ban({
                    reason
                })

                banPage.edit({
                    embeds: [banEmbed],
                    components: []
                })

            } else if (i.customId === 'banno') {

                banPage.edit({
                    embeds: [banEmbed2],
                    components: []
                })

            }

        })

        col.on('end', () => {

            banPage.edit({
                embeds: [banEndEmbed],
                components: []
            })

        })
    }
}