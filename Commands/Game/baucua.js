const baucua = require('../../Settings/Configuration/baucua.json');
const ms = require("ms")

function rditem() {
  const JworkR = baucua[Math.floor(Math.random() * baucua.length)];
  return JworkR
}
function wait(ms) {
  let start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "baucua",
  aliases: ['bc'],
  hostOnly: true,
  run: async (bot, message, args) => {   
    const emo = '<a:TDN_baucua:934088475374932009>'
    const i1 = rditem()
    const i2 = rditem()
    const i3 = rditem()
	await wait()
    const msg = await message.channel.send(` ${emo}  ${emo}  ${emo}`)
    await wait(3000)
    await msg.edit(` ${i1}  ${emo}  ${emo}`)
    await wait(3000)
    await msg.edit(` ${i1}  ${i2}  ${emo}`)
    await wait(4000)
    await msg.edit(` ${i1}  ${i2}  ${i3}`)
  }

};