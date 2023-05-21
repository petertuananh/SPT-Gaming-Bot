console.clear();
const colors = require('colors');
const { DisTube } = require('distube')
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')
const client = new Client({
    intents: 32767,
    partials: ["USER", "CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"],
    disableMentions: ['everyone', 'here'],
})
client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin()
  ],
  youtubeDL: false
})
module.exports = client;
client.db = db;
client.config = require('./Settings/Configuration/config.js');
client.emoji = require('./Settings/Configuration/emojis.js');
client.commands = new Collection();
client.aliases = new Collection();
client.slashcommands = new Collection();

['command_Handler', 'event_Handler', 'slash_Handler'].forEach(handler => {
	require(`./Handlers/${handler}`)(client);
});


client.login(client.config.bot.token)