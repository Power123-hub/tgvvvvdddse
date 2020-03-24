const Discord = require("discord.js");
const client = new Discord.Client();
client.login("");
const fs = require('fs');
const ytdl = require('ytdl-core');

client.on("ready", () => {
});
 console.log("loaded");

client.on("message", message => {
  if (!message.guild) return;
  if (message.content ===  "8warn") {
  if(message.author.id === "609103253656961025"){
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          console.log("connected");
        
        })
        .catch(console.log);
    } else {
      console.log("can't connect");
    }
  }
  }
});

client.on("message", message => {

  if (!message.guild) return;
  
      const args = message.content.slice(1).split(' ');
      const command = args.shift().toLowerCase();
      if (command ===  "=pl") {
      if(message.author.id === "609103253656961025"){
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          console.log("connected");
          connection.playStream(ytdl(args[0], {filter: "audioonly"}));
          
        })
        .catch(console.log);
    } else {
      console.log("can't connect");
    }
  }
  }
});