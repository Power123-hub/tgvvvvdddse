const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://flash-rifle.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on("guildMemberAdd", member => { //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204  //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044 
var embed = new Discord.RichEmbed() //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .setThumbnail(member.user.avatarURL) //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .addField("**Thank You For Joining**", member.user.username) //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .setColor("#0984e3") //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .setImage("https://cdn.discordapp.com/attachments/607046676984758383/650554313818767361/p_1225y7yza1.gif");//Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
     //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
  var channel = member.guild.channels.find("name", "welcome");          //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
  if (!channel) return; //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
  channel.send({ embed: embed }); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
}); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
//! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
const invites = {}; //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
const wait = require("util").promisify(setTimeout); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
client.on("ready", () => {
  //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
  wait(1000); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
  client.guilds.forEach(king => {
    //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
    king.fetchInvites().then(guildInvites => {
      //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
      invites[king.id] = guildInvites; //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
      //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
      //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
      //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
      //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
    }); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
  }); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
}); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
//! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
client.on("guildMemberAdd", member => {
  //! ,Haru#6204  ,  ! .𝒜ℋℳℰ𝒟 ♪ ♥#6950
  member.guild.fetchInvites().then(guildInvites => {
    //! ,Haru#6204  ,  ! .𝒜ℋℳℰ𝒟 ♪ ♥#6950
    const gamer = invites[member.guild.id]; //! ,Haru#6204  ,  ! .𝒜ℋℳℰ𝒟 ♪ ♥#6950
    invites[member.guild.id] = guildInvites; //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
   const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
    const inviter = client.users.get(invite.inviter.id); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
    const welcome = member.guild.channels.find(
      //! ,Haru#6204  ,  ! .𝒜ℋℳℰ𝒟 ♪ ♥#6950
      channel => channel.name === "welcome"       //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
    ); //! ,Haru#6204  ,  ! .𝒜ℋℳℰ𝒟 ♪ ♥#6950
    welcome.send(//! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
 /*Alpha Team copyRight 2019*/` <@${member.id}> **invited by** <@${inviter.id}> , **Total Invites** ${invite.uses}` //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
    ); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
  }); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
}); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044




client.on('message', message => { /// edit fox
      if(message.content ===  "$hc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك صلاحية ادمن :x:');
             message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
 })
              message.channel.send('چات داخرا ! :white_check_mark:  ') ///edit fox
 }
});


client.on('message', message => {
      if(message.content === "$sc") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليست لديك صلاحية ادمن :x:');
             message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: true
 })
              message.channel.send('چات کرایەوە ')
 }
});




 //كود برودكاست

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : osama tech`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : osama tech ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Fuck You !`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
