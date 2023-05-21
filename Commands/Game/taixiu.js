const ms = require("ms")
// const so = require('../../so.json');
const { MessageEmbed } = require('discord.js')
const diceUtils = require('dice-utils');
const { roll } = diceUtils;
module.exports = {
  name: "taixiu",
  aliases: ['tx'],
  hostOnly: true,
  run: async (bot, message, args) => {
    const dice = roll('3d6');
    const result = dice.results;
    const total = dice.total;
  
    const emo = '<a:tbp_lacxucxac:934096746949275688>'

    const map = {
      '1': '<:n_xucxac1:960909155516973066>',
      '2': '<:n_xucxac22:960909169479794699>',
      '3': '<:n_xucxac3:960909185162297354>',
      '4': '<:n_xucxac4:960909202627362876>',
      '5': '<:n_xucxac5:960909216242098176>',
      '6': '<:n_xucxac6:960909231266074704>'
    }

    const message1 = await message.reply(`** Bỏ cái tay bỏ cái tay để mở bát nào...**`)
        if (result[0] == result[1] == result[2], total == 3, total == 18) {

          let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total}**`)
            
          

          
        }

        if (total == 18) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Tài**`)
    
        }


        if (total == 3) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Xỉu**`)
   
        }

        if (total <= 4) {
     let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Xỉu**`)   
}
      if (total == 5) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Xỉu**`)
   
          }
     if (total == 6) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Xỉu**`)
   
      }
  if (total == 7) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Xỉu**`)
   
      }
   if (total == 8) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Xỉu**`)
   
      }
  if (total == 9) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Xỉu**`)
   
      }
   if (total == 10) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Xỉu**`)
   
      }
    if (total == 11) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Tài**`)
   
      }
    if (total == 12) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Tài**`)
   
      }
    if (total == 13) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Tài**`)
   
      }
 if (total == 14) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Tài**`)
   
      }
  if (total == 15) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Tài**`)
   
      }
    if (total == 16) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Chẵn • Tài**`)
   
      }
    if (total == 17) {
    let msg = await message.reply(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${emo} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${emo}`)
    await wait(2000)
    await msg.edit(` ${map[result[0]]} ${map[result[1]]} ${map[result[2]]}`)
            
            message.reply(`**__Kết Quả :__\n${total} • Lẻ • Tài**`)
   
         }

       



  }
}
function wait(ms) {
  let start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
      } 