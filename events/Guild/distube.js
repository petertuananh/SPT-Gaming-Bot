// const {
//     MessageEmbed
// } = require('discord.js')
// const db = require('quick.db')
// const client = require('../../index.js');
// client.on('messageCreate', async message => {
//     const status = queue =>
//   `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${
//     queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
//   }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
// client.distube
//   .on('playSong', (queue, song) =>
//     queue.textChannel.send(
//       `▶ | Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${
//         song.user
//       }\n${status(queue)}`
//     )
//   )
//   .on('addSong', (queue, song) =>
//     queue.textChannel.send(
//       `${client.emotes.success} | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
//     )
//   )
//   .on('addList', (queue, playlist) =>
//     queue.textChannel.send(
//       `${client.emotes.success} | Added \`${playlist.name}\` playlist (${
//         playlist.songs.length
//       } songs) to queue\n${status(queue)}`
//     )
//   )
//   .on('error', (channel, e) => {
//     channel.send(`:x: | An error encountered: ${e.toString().slice(0, 1974)}`)
//     console.error(e)
//   })
//   .on('empty', channel => channel.send('Voice channel is empty! Leaving the channel...'))
//   .on('searchNoResult', (message, query) =>
//     message.channel.send(`:x: | No result found for \`${query}\`!`)
//   )
//   .on('finish', queue => queue.textChannel.send('Finished!'))
// })