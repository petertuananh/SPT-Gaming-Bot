const client = require('../../index.js');
const ascii = require('ascii-table');
// const express = require('express');
// const server = express();
// const port = 3000 || 3001;
client.on('ready', (message) => {
    client.user.setStatus("idle")
    console.log(`[SERVER INFO] ${client.user.username} ready !`);
    client.user.setActivity('Coded by [Peter Tuan Anh#0001]', { type: 'PLAYING' })
    let table = new ascii(`${client.user.username}`);
    table.setHeading("List", "Info");
    table.addRow(`Bot Name`, `${client.user.username}`)
    table.addRow(`Total Commands`, `${client.commands.size} commands`)
    console.log(table.toString())
    var current = new Date();
})
