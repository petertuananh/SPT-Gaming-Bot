const client = require('../../index')
const Discord = require('discord.js')
const ms = require('ms')
client.on('messageReactionAdd', async (reaction, user, guild) => {
    if (reaction.message.id == '962788398752473108'){
        if('<a:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<a:giveaway:957633406504689765>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618235874885724')
        }
        else if('<a:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<a:trang_va_sao:957919638568697907>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957918503107702784')
        }
        else if('<a:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<a:whitemoon:957633362275754064>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618228417396797')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:spacecm_gtick1:957682858296750120>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618233698025524')
        }
    }
    else if (reaction.message.id == '962799145616306259'){
        if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:1_:962793056992632862>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618361511067768')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:2_:962793054186655854>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618359472635904')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:3_:962793065418985582>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618366166753291')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:4_:962793081156009994>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618368058384405')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:5_:962793076261290004>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618369950007336')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:6_:962793062705287198>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618372068134922')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:7_:962793073593700452>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618375675232306')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:8_:962793078316490804>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618379315896320')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:9_:962793083668406292>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618381303984128')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:10:962793068514390036>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957618377415872572')
        }
        else if('<:' + reaction.emoji.name + ':' + reaction.emoji.id + '>' == '<:11:962793059920281640>'){
            reaction.message.guild.members.cache.get(user.id).roles.add('957937014651629599')
        }
    }
})