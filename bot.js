const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas"); //npm i canvas
const prefix = "$"


client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'اهه') {  
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return;
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply(`**I D'ont Have Permission For That !`);
omar.guild.channels.forEach(m => {
m.delete();
});


client.login(process.env.BOT_TOKEN); 
