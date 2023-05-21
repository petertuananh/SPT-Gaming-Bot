const client = require('../../index.js');
const Discord = require('discord.js');
const cooldowns = new Map();
const db = require("quick.db");
const axios = require('axios')
client.on('messageCreate', async (message) => {
    if (message.channel.id == client.config.general.AIChannel){
        if(message.author.bot) return;
        message.channel.sendTyping();
        message.reply('Tính năng này đang được bảo trì!')
        // let res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn&cf=false&name=Test`); 
        // return message.reply(res.data.success);
    }
    const embed = new Discord.MessageEmbed()
        .setColor("RED")

    if (message.author.bot) return;
    if (!message.guild) {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Tâm thư từ người ẩn danh`)
            .setDescription(`Nội dung: \n ${message.content}`)
        const msg = await client.channels.cache.get(client.config.general.cfsChannel).send({embeds: [embed]})
        const logs = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Tâm thư từ ${message.author.tag}`)
            .setURL(`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${message.id}`)
            .setDescription(`Nội dung: \n ${message.content}`)
        await client.channels.cache.get(client.config.general.cfsLogs).send({embeds: [logs]})
        return message.reply(`Đã gửi confession của bạn, link tin nhắn đã gửi: \n https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${message.id}`)
    }

    if (message.channel.partial) await message.channel.fetch();
    if (message.partial) await message.fetch();

    const mentionRegPrefix = RegExp(`^<@!?${client.user.id}> `);

    let botprefix = await db.fetch(`prefix-${message.guild.id}`);
    if (botprefix === null) {
        botprefix = client.config.bot.prefix
    };

    const prefix = message.content.match(mentionRegPrefix) ? message.content.match(mentionRegPrefix)[0] : botprefix;

    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find((cmds) => cmds.aliases && cmds.aliases.includes(cmd));
	if (!command) return;

    if (command) {
        if (command.ownerOnly) {
            if (message.author.id !== client.config.general.ownerID) {
                embed.setTitle(`**Permissions**`)
                embed.setDescription(`**・Limited this commands to owners only**`)
                return message.channel.send({
                    embeds: [embed]
                })
            }
        }
        if (command.inVoiceChannel && !message.member.voice.channel) {
            embed.setTitle(`**Voice**`)
            embed.setDescription(`**・Bạn phải vào kênh thoại trước để dùng lệnh này**`)
            return message.channel.send({
                embeds: [embed]
            })
        }

        if (command.hostOnly && !message.guild.members.cache.get(message.author.id).roles.cache.has('963469600404684841')) return message.reply('> :x: Lệnh này chỉ dành cho người có role đặc biệt!')
        command.run(client, message, args, prefix);
    }
    

})