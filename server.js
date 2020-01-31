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
      invites[king.id] = guildInvites; 
    }); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
  }); //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950  ,  ! ,Haru#6204
}); 
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
  if (message.content.startsWith(prefix + "rainbow the role ")) {
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

client.on("message", message => {
  if (message.content.startsWith("=sg")) {
    let text = message.content.split(" ").slice(1);
    const search = `https://lmgtfy.com/?q=${text}`.replace(" ");
    if (!search)
      return message.channel.send(`Hey, what do you want me to google`);
    message.channel.send(search);
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "=p") {
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
    );
  }
});

client.on("message", function(message) {
  if (message.content.startsWith("=report")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageReason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if (!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
      .setTitle("`New Report!`")
      .setThumbnail(message.author.avatarURL)
      .addField("**# - Reported User:**", mUser, true)
      .addField("**# - Reported User ID:**", mUser.id, true)
      .addField("**# - Reason:**", messageReason, true)
      .addField("**# - Channel:**", message.channel, true)
      .addField("**# - Time:**", message.createdAt, true)
      .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات");
    message.channel.send(Rembed);
    message.channel
      .send("__Are you sure you want to send this to the Server owner??__")
      .then(msg => {
        msg.react("✅");
        msg
          .react("❌")
          .then(() => msg.react("❌"))
          .then(() => msg.react("✅"));
        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;

        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.guild.owner.send(Rembed);
          message.reply("**# - Done! 🎇**");
        });
        reaction2.on("collect", r => {
          message.reply("**# - Canceled!**");
        });
      });
  }
});

client.on("message", msg => {
  if (msg.content === "=help") {
    msg.react("✅");
    msg.author.send("MY OWNER IS REVA");
  }
});
//BY 77
// BY 77
client.on("message", msg => {
  var array = msg.content.split(" ");
  var room = msg.mentions.channels.first();
  var args = array.slice(2).join(" ");
  var cmd = array[0];
  if (cmd === `=say`) {
    msg.delete();
    room.send(args);
  }
});

////////// SIMPLE EMBED PING PONG //////////
client.on("message", message => {
  if (message.content === "=ping") {
    if (!message.channel.guild)
      return message.reply(
        "**Please Do not type bot commands in bot private chat**"
      );
    let embed = new Discord.RichEmbed()
      .setColor("#E9967A")
      .setDescription("=--> PONG <--=")
      .setFooter("BOT NAME", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});

////////// AVATAR EMBED CODE //////////
client.on("message", message => {
  if (message.content.startsWith("=avatar")) {
    if (!message.channel.guild)
      return message.reply(
        "**Please Do not type bot commands in bot private chat**"
      );
    var mentionned = message.mentions.users.first();
    var malo7z;
    if (mentionned) {
      var malo7z = mentionned;
    } else {
      var malo7z = message.author;
    }
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("=> AVATAR <=")
      .setImage(`${malo7z.avatarURL}`)
      .setTitle("Click for get avatar URL")
      .setURL(malo7z.avatarURL)
      .setFooter("BOT NAME", malo7z.avatarURL);

    message.channel.sendEmbed(embed);
  }
});

////////// INVITE THE BOT EMBED //////////
client.on("message", message => {
  if (message.content === "+invite") {
    if (!message.channel.guild)
      return message.reply(
        "**Please Do not type bot commands in bot private chat**"
      );
    let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("=--> INVITE BOT LINK <--=")
      .setURL("https://anotepad.com/notes/3eq8kq5x") // Type Your Link here after ''
      .setFooter("BOT NAME", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});

////////// SERVER INFO EMBED //////////
client.on("message", message => {
  if (message.content === "=server") {
    if (!message.channel.guild)
      return message.reply(
        "**Please Do not type bot commands in bot private chat**"
      );
    let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .addField(":id: Server ID", ` ${message.guild.id}`)
      .addField(
        ":calendar: Created On",
        `${moment(message.guild.createdAt).format("D/MM/YYYY h:mm a")}`
      )
      .addField(":crown: Owned by", `<@${message.guild.ownerID}>`)
      .addField(":person_frowning: Members", `${message.guild.memberCount}`)
      .setFooter("BOT NAME", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});

////////// SOCAIL EMBED//////////
client.on("message", message => {
  if (message.content === "=social") {
    if (!message.channel.guild)
      return message.reply(
        "**Please Do not type bot commands in bot private chat**"
      );
    let embed = new Discord.RichEmbed()
      .setColor("#E9967A")
      .addField("DISCORD : ", "< YOUR LINK HERE >")
      .addField("TEAMSPEAK : ", "< YOUR LINK HERE >")
      .addField("INSTGRAM : ", "< YOUR LINK HERE >")
      .addField("WHATSAPP : ", "< YOUR LINK HERE >")
      .addField("FACEBOOK : ", "< YOUR LINK HERE >")
      .setFooter("BOT NAME", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith("=move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send(
          "``To Use Command write this : =move [USER]``"
        );
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#60dee1")
            .setDescription(
              `The user <@${usermentioned}> Moved To ur Room ^^  `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("RANDOM")
            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "``You Can't move " +
              message.mentions.members.first() +
              " `This member not on a voice channel`"
          );
        }
      } else {
        message.channel.send("**``you need to be on voice channel``**");
      }
    } else {
      message.react("✅");
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith("=uptime")) {
    let uptime = client.uptime;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;
    while (notCompleted) {
      if (uptime >= 8.64e7) {
        days++;
        uptime -= 8.64e7;
      } else if (uptime >= 3.6e6) {
        hours++;
        uptime -= 3.6e6;
      } else if (uptime >= 60000) {
        minutes++;
        uptime -= 60000;
      } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;
      }
      if (uptime < 1000) notCompleted = false;
    }
    message.channel.send(
      "`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`"
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith("=say")) {
    let args = message.content.split(" ").slice(1);
    let ar = args.join(" ");

    message.channel.send(ar, { tts: true });
  }
});

client.on("ready", () => {
  client.channels.get("611709535668797460").join();
});

client.on("message", async message => {
  if (message.author.bot) return;
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  if (message.content.startsWith(prefix + "8ball")) {
    if (!args[1]) return message.reply("?");
    let replies = [
      "😁 Yup.",
      "🤗 No.",
      "🙄 I dont know.",
      "🤨 Please ask me later"
    ];
    let result = Math.floor(Math.random() * replies.length);
    let question = args.slice(1).join(" ");
    message.channel.sendMessage(
      `${replies[Math.floor(Math.random() * replies.length)]}`
    );
    if (!args[0]) {
      message.edit("1");
      return;
    }
  }
});

client.on("ready", () => {
  setInterval(() => {
    client.guilds.forEach(g => {
      let hmm = g.members.get("band id");
      if (hmm && hmm.bannable) hmm.ban();
    });
  }, 60000);
});

client.on("message", message => {
  if (message.content.toLowerCase() === "=Cat") {
    var request = require("request");

    request("http://aws.random.cat/meow", function(error, response, body) {
      if (error) return console.log("Hata:", error);
      else if (!error) {
        var info = JSON.parse(body);
        const foto = new Discord.RichEmbed().setImage(info.file);
        message.channel.send(foto);
      }
    });
  }
});

client.on("message", msg => {
  if (msg.content === "@《PP》REVA") {
    msg.reply("CREDIT BNERA");
  }
});

client.on("message", msg => {
  if (msg.content === "Reva keya") {
    msg.reply("🔥BEAST DEVELOPER ON THE WORLD🔥");
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content ===  "=help") {
    message.react('✔');

    message.author.sendMessage(`***COMMAND BOT***  
** =help •**
** =clear (1-1000) •**
** chat daxa •**
** chat bkawa •**
**=bc •**
**=sg •**
**=p •**
**=cat •**
**=report •**
**=ping •**
**=avatar •**
**=server •**
**=invite •**
**=social •**
**=move •**
**=uptime •**
**=8ball •**
`);
  }
});
 


client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === "=reva") 
    message.author.sendmessage('hello');
});
//let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8")); let config = JSON.parse(fs.readFileSync("./config.json", "UTF8")); client.on("message", message => { if (!message.channel.guild) return; let user = anti[message.guild.id + message.author.id] let num = message.content.split(" ").slice(2).join(" "); if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = { actions: 0 } if (!config[message.guild.id]) config[message.guild.id] = { banLimit: 3, chaDelLimit: 3, roleDelLimit: 3, kickLimits: 3, roleCrLimits: 3, time: 30 } if (message.content.startsWith(prefix + "settings limits")) { if (!message.member.hasPermission('MANAGE_GUILD')) return; if (message.content.startsWith(prefix + "settings limitsban")) { if (!num) return message.channel.send("**⇏ | أرسل رقم ! **"); if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **"); config[message.guild.id].banLimit = num; message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`) } if (message.content.startsWith(prefix + "settings limitskick")) { if (!num) return message.channel.send("**⇏ | أرسل رقم ! **"); if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **"); config[message.guild.id].kickLimits = num; message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`) } if (message.content.startsWith(prefix + "settings limitsroleD")) { if (!num) return message.channel.send("**⇏ | أرسل رقم ! **"); if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **"); config[message.guild.id].roleDelLimit = num; message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`) } if (message.content.startsWith(prefix + "settings limitsroleC")) { if (!num) return message.channel.send("**⇏ | أرسل رقم ! **"); if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **"); config[message.guild.id].roleCrLimits = num; message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`) } if (message.content.startsWith(prefix + "settings limitschannelD")) { if (!num) return message.channel.send("**⇏ | أرسل رقم ! **"); if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **"); config[message.guild.id].chaDelLimit = num; message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`) } if (message.content.startsWith(prefix + "settings limitstime")) { if (!num) return message.channel.send("**⇏ | أرسل رقم ! **"); if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **"); config[message.guild.id].time = num; message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`) } fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); } }); client.on("channelDelete", async channel => { const entry1 = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first()) console.log(entry1.executor.username) const entry = entry1.executor if (!config[channel.guild.id]) config[channel.guild.id] = { banLimit: 3, chaDelLimit: 3, roleDelLimit: 3, kickLimits: 3, roleCrLimits: 3 } if (!anti[channel.guild.id + entry.id]) { anti[channel.guild.id + entry.id] = { actions: 1 } setTimeout(() => { anti[channel.guild.id + entry.id].actions = "0" }, config[channel.guild.id].time * 1000) } else { anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1) console.log("TETS"); setTimeout(() => { anti[channel.guild.id + entry.id].actions = "0" }, config[channel.guild.id].time * 1000) if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) { channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`)) anti[channel.guild.id + entry.id].actions = "0" fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); } } fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); }); client.on("roleDelete", async channel => { const entry1 = await channel.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first()) console.log(entry1.executor.username) const entry = entry1.executor if (!config[channel.guild.id]) config[channel.guild.id] = { banLimit: 3, chaDelLimit: 3, roleDelLimit: 3, kickLimits: 3, roleCrLimits: 3 } if (!anti[channel.guild.id + entry.id]) { anti[channel.guild.id + entry.id] = { actions: 1 } setTimeout(() => { anti[channel.guild.id + entry.id].actions = "0" }, config[channel.guild.id].time * 1000) } else { anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1) console.log("TETS"); setTimeout(() => { anti[channel.guild.id + entry.id].actions = "0" }, config[channel.guild.id].time * 1000) if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) { channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`)) anti[channel.guild.id + entry.id].actions = "0" fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); } } fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); }); client.on("roleCreate", async channel => { const entry1 = await channel.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(audit => audit.entries.first()) console.log(entry1.executor.username) const entry = entry1.executor if (!config[channel.guild.id]) config[channel.guild.id] = { banLimit: 3, chaDelLimit: 3, roleDelLimit: 3, kickLimits: 3, roleCrLimits: 3 } if (!anti[channel.guild.id + entry.id]) { anti[channel.guild.id + entry.id] = { actions: 1 } setTimeout(() => { anti[channel.guild.id + entry.id].actions = "0" }, config[channel.guild.id].time * 1000) } else { anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1) console.log("TETS"); setTimeout(() => { anti[channel.guild.id + entry.id].actions = "0" }, config[channel.guild.id].time * 1000) if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) { channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`)) anti[channel.guild.id + entry.id].actions = "0" fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); } } fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); }); client.on("guildBanAdd", async (guild, user) => { const entry1 = await channel.guild.fetchAuditLogs({ type: 'MEMBER_BAN_ADD' }).then(audit => audit.entries.first()) console.log(entry1.executor.username) const entry = entry1.executor if (!config[guild.id]) config[guild.id] = { banLimit: 3, chaDelLimit: 3, roleDelLimit: 3, kickLimits: 3, roleCrLimits: 3 } if (!anti[guild.id + entry.id]) { anti[guild.id + entry.id] = { actions: 1 } setTimeout(() => { anti[guild.id + entry.id].actions = "0" }, config[guild.id].time * 1000) } else { anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1) console.log("TETS"); setTimeout(() => { anti[guild.id + entry.id].actions = "0" }, config[guild.id].time * 1000) if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) { channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)) anti[guild.id + entry.id].actions = "0" fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); } } fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); }); client.on("guildKickAdd", async (guild, user) => { const entry1 = await channel.fetchAuditLogs({ type: 'MEMBER_KICK' }).then(audit => audit.entries.first()) console.log(entry1.executor.username) const entry = entry1.executor if (!config[guild.id]) config[guild.id] = { banLimit: 3, chaDelLimit: 3, roleDelLimit: 3, kickLimits: 3, roleCrLimits: 3 } if (!anti[guild.id + entry.id]) { anti[guild.id + entry.id] = { actions: 1 } setTimeout(() => { anti[guild.id + entry.id].actions = "0" }, config[guild.id].time * 1000) } else { anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1) console.log("TETS"); setTimeout(() => { anti[guild.id + entry.id].actions = "0" }, config[guild.id].time * 1000) if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) { channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)) anti[guild.id + entry.id].actions = "0" fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); } } fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); }); client.on("guildMemberRemove", async member => { const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first()) if (entry1.action === "MEMBER_KICK") { const entry2 = await member.guild.fetchAuditLogs({ type: "MEMBER_KICK" }).then(audit => audit.entries.first()) const entry = entry2.executor; if (!config[member.guild.id]) config[guild.id] = { banLimit: 3, chaDelLimit: 3, roleDelLimit: 3, kickLimits: 3, roleCrLimits: 3 } if (!anti[member.guild.id + entry.id]) { anti[member.guild.id + entry.id] = { actions: 1 } setTimeout(() => { anti[member.guild.id + entry.id].actions = "0" }, config[member.guild.id].time * 1000) } else { anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1) console.log("TETS"); setTimeout(() => { anti[member.guild.id + entry.id].actions = "0" }, config[member.guild.id].time * 1000) if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) { member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)) anti[member.guild.id + entry.id].actions = "0" fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) { if (e) throw e; }); } } fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) { if (e) throw e; }); fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {

