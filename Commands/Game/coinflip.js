const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
module.exports = {
    name: "coinflip",
    aliases: ["cf"],
    category: "Economy",
    description: "Play coinflip",
    cooldown: 5,
    ownerOnly : false,
    run: async (client, message, args) => {
        const userCash = await db.get(`nghiencoin-${message.author.id}`)
        const amount = args[0]
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('tiền')
        if(isNaN(amount)){
            embed.setDescription(`> :x: Vui lòng nhập một giá trị hợp lệ!`)
            return message.reply({embeds: [embed]})
        }
        if(amount > userCash){
            embed.setDescription(`> :x: Bạn không có đủ tiền để chơi \n > Hiện tại bạn có ${userCash}`)
            return message.reply({embeds: [embed]})
        }
        else{
            function doRandHT() {
                var rand = [`HEADS`,`TAILS`];
                return rand[Math.floor(Math.random()*rand.length)]; 
            }
            const re = doRandHT()
            if (re === 'HEADS'){
                await db.add(`nghiencoin-${message.author.id}`, amount)
                const embed2 = new MessageEmbed()
                    .setTitle(`<:GoldCoin:962955383322861629> Coin Flip`)
                    .setDescription(`> Đồng xu ngửa và bạn thắng ${amount}`)
                    .setColor("RED")
                return message.channel.send({embeds: [embed2]})

            }else if (re === 'TAILS'){
                await db.subtract(`nghiencoin-${message.author.id}`, amount)
                const embed2 = new MessageEmbed()
                    .setTitle(`<:GoldCoin:962955383322861629> Coin Flip`)
                    .setDescription(`> Đồng xu úp và bạn mất ${amount}`)
                    .setColor("BLUE")
                return message.channel.send({embeds: [embed2]})
            }
            
        }
    }
}