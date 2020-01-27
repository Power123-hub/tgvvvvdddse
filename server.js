const http = require("http");
const express = require("express");
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
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.author.bot) return;

  let args = message.content.split(" ");

  let command = args[0];

  let messagecount = args[1];

  if (command == prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ");
    } else if (!messagecount) {
      message.channel.send("**قم بإدراج عدد الرسائل المراد حذفها**");
    } else {
      message.channel.bulkDelete(messagecount);
      message.channel
        .send("**رسالة `" + messagecount + "` لقد تم حذف**")
        .then(mes => mes.delete(3000));
    }
  }
});

client.on("guildMemberAdd", member => {
  //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204  //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
  var embed = new Discord.RichEmbed() //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .setThumbnail(member.user.avatarURL) //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .addField("**Thank You For Joining**", member.user.username) //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .setColor("#0984e3") //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
    .setImage(
      "https://cdn.discordapp.com/attachments/607046676984758383/650554313818767361/p_1225y7yza1.gif"
    ); //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
  //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
  var channel = member.guild.channels.find("name", "greetings"); //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
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
      channel => channel.name === "invite" //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
    ); //! ,Haru#6204  ,  ! .𝒜ℋℳℰ𝒟 ♪ ♥#6950
    welcome.send(
      //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
      /*Alpha Team copyRight 2019*/ ` <@${member.id}> **am bareza hata zhurawa ; la layan** <@${inviter.id}> , **(** ${invite.uses}**invites)**` //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
    ); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
  }); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044
}); //! ,Haru#6204  , Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044

// Create an event listener for new guild members
client.on("guildMemberAdd", member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === "greetings");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member},
بەخێر بێیت بۆ سێرفەری پڕۆ پلەیەر
welcome to pro player server💖💖`);
});

// Create an event listener for new guild members
client.on("guildMemberRemove", member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === "member-log");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Goodbye, ${member}`);
});

client.on("message", message => {
  /// edit fox
  if (message.content === "chat daxa") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("ليس لديك صلاحية ادمن :x:");
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
    message.channel.send("چات داخرا ! :white_check_mark:  "); ///edit fox
  }
});

client.on("message", message => {
  if (message.content === "chat bkawa") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("ليست لديك صلاحية ادمن :x:");
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    });
    message.channel.send("چات کرایەوە ");
  }
});

//Best Rainbow Bot .
client.on("message", message => {
  //new msg event
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "set")) {
    //to create the rainbow role
    let role = message.guild.roles.find("name", "Rainbow bot.");
    if (role) return message.channel.send(`This Step Already Completed !`); //if the role already created return with this msg
    //start of create role
    if (!role) {
      rainbow = message.guild.createRole({
        name: "Rainbow bot.", //the role will create name
        color: "#000000", //the default color
        permissions: [] //the permissions
        //end of create role
      });
    }
    message.channel.send("Done The Rainbow Role Setup Has Been Completed"); //if the step completed
  }
});

client.on("ready", () => {
  //new ready event
  setInterval(function() {
    client.guilds.forEach(g => {
      var role = g.roles.find("name", "Rainbow bot."); //rainbow role name
      if (role) {
        role.edit({ color: "RANDOM" });
      }
    });
  }, 5000); //the rainbow time
});

//كود برودكاست

client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "offline")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "online").size
      }\` : عدد الاعضاء المستلمين`
    );
    message.delete();
  }
});

function random_playing(bot) {
  let status = [
    `${client.users.size} Users`,
    `${client.channels.size} Channels`,
    `${client.guilds.size} Server`,
    `BY-REVA`
  ]; // You cant set anything playing you want it!
  let random = status[Math.floor(Math.random() * status.length)];
  client.user.setActivity(random, { type: "WATCHING" });
} //ngk ada error kan?tapi kok ngk muncul//btr//thx

client.on("ready", () => {
  var clientlog = `
[BOT LOGS] Zetsuya Community [BOT LOGS]
=============================================
With ${client.users.size} users
With ${client.guilds.size} servers
With ${client.channels.size} channels
With BY-REVA
=============================================
`;

  console.log(clientlog);
  setInterval(random_playing, 5000);
});

client.on('message', message => {
    if(message.content.startsWith('!sg')) {
    let text= message.content.split(' ').slice(1);
const search = `https://lmgtfy.com/?q=${text}`.replace(" ");
        if (!search) return message.channel.send(`Hey, what do you want me to google`);
    message.channel.send(search);
}
});

client.on("message", async message => {
  
  if (message.content.toLowerCase() === "!p") {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}?bg=default.png`
          }
          
        ]
      }) 
      )
    }
});