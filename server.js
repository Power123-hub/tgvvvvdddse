const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://pro-player-system.glitch.me/`);
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
      "https://cdn.discordapp.com/attachments/617323833388564494/679319488671383580/1573566988291.jpg"
    ); //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
  //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
  var channel = member.guild.channels.find("name", "sd"); //Háwáii ~ ! .₳Ⱨ₥ɆĐ ♡#5044  ,  ! ,Haru#6204
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
<a:emoji_30:609618417435279360> <a:emoji_35:609618743814914098> <a:emoji_34:609618724156342292> <a:emoji_31:609618659853336576> <a:emoji_32:609618683542765598> <a:emoji_33:609618706137481225> <a:emoji_35:609618743814914098>`);
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
  if (message.content.startsWith(prefix + "setxom")) {
    //to create the rainbow role
    let role = message.guild.roles.find("name", "REVA");
    if (role) return message.channel.send(`This Step Already Completed !`); //if the role already created return with this msg
    //start of create role
    if (!role) {
      rainbow = message.guild.createRole({
        name: "REVA", //the role will create name
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
      var role = g.roles.find("name", "REVA"); //rainbow role name
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
  if (message.content.startsWith("○sg")) {
    let text = message.content.split(" ").slice(1);
    const search = `https://lmgtfy.com/?q=${text}`.replace(" ");
    if (!search)
      return message.channel.send(`Hey, what do you want me to google`);
    message.channel.send(search);
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "○profile") {
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
  if (message.content.startsWith("○report")) {
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
  if (cmd === `○say`) {
    msg.delete();
    room.send(args);
  }
});

////////// SIMPLE EMBED PING PONG //////////
client.on("message", message => {
  if (message.content === "○ping") {
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
  if (message.content.startsWith("○avatar")) {
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
  if (message.content === "○~{invite") {
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
  if (message.content === "○server") {
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
  if (message.content === "○social") {
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
  if (message.content.startsWith("○move")) {
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
  if (message.content.startsWith("○uptime")) {
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

client.on("ready", () => {
  client.channels.get("683268122307723361").join();
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
      let hmm = g.members.get("");
      if (hmm && hmm.bannable) hmm.ban();
    });
  }, 60000);
});

client.on("message", message => {
  if (message.content.toLowerCase() === "cat") {
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
  if (message.content === "○help") {
    message.react("✔");

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
**=setwlc•**
**=time•**
**=setout•**
`);
  }
});

client.on("ready", () => {
  setInterval(function() {
    client.channels.get("672762718234869760").send("logoy xotan dagrn");
  }, 86400000);
});

const developers = ["345860680131411968"];
const adminprefix = "○";
client.on("message", message => {
  var argresult = message.content
    .split()
    .slice(1)
    .join(" ");
  if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.send("Changing The Name To ..**${argresult}**");
  } else if (message.content.startsWith(adminprefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.send("Changing The Avatar To :**${argresult}**");
  }
});

client.on("message", async message => {
  let args = message.content.split(" ");
  const ms = new Date().getTime() - message.member.joinedAt.getTime();
  var seconds = parseInt((ms / 1000) % 60),
    minutes = parseInt((ms / (1000 * 60)) % 60),
    hours = parseInt((ms / (1000 * 60 * 60)) % 24);
  const now = new Date();
  const joinedAt = ms / 1000 / 60 / 60 / 24;
  if (args[0] === "=time") {
    let embed = new Discord.RichEmbed()
      .setTitle(message.author.username)
      .addField(
        "> Since:",
        `
⏲️ ${joinedAt.toFixed(0)} days ,
 ${hours} Hours ,
 ${minutes} Minutes ,
 ${seconds} seconds ⏲️`
      )
      .setTimestamp()
      .setThumbnail(message.author.avatarURL);
    message.channel.send(embed);
  }
});

client.on("message", ra3d => {
  var prefix = "&";
  let args = ra3d.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (ra3d.content.startsWith("○ccolors")) {
    if (!args) return ra3d.channel.send("`How Many Colors??`");
    if (!ra3d.member.hasPermission("MANAGE_ROLES")) return;
    ra3d.channel.sendMessage("**You Dont Have Permission `MANAGE_ROLES`**");
    ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < `${parseInt(args) + 1}`; x++) {
      ra3d.guild.createRole({ name: x, color: "RANDOM" });
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith("server")) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply(
        `**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `
      );
    if (!message.channel.guild) return message.reply(" ");
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("**🆔 Server ID:**", message.guild.id, true)
      .addField(
        "**📅 Created On**",
        message.guild.createdAt.toLocaleString(),
        true
      )
      .addField(
        "**👑 Owned by**",
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`
      )
      .addField("**👥 Members**", `[${message.guild.memberCount}]`, true)
      .addField(
        "**💬 Channels **",
        `**${message.guild.channels.filter(m => m.type === "text").size}**` +
          " text | Voice  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField("**🌍 Others **", message.guild.region, true)
      .addField(
        "**🔐 Roles **",
        `**[${message.guild.roles.size}]** Role `,
        true
      )
      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "join") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("** NOW I WILL BE WITH YOU ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**I CAN`T FINE THIS ROOM !**");
    }
  }
});

client.on("message", message => {
  let argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "setStreaming")) {
    message.delete();
    client.user.setGame(argresult, "https://twitch.tv/REVA");
  } else if (message.content.startsWith(prefix + "setWatching")) {
    client.user.setActivity(argresult, { type: "WATCHING" });
  } else if (message.content.startsWith(prefix + "setListening")) {
    client.user.setActivity(argresult, { type: "LISTENING" });
  } else if (message.content.startsWith(prefix + "setPlaying")) {
    client.user.setActivity(argresult, { type: "PLAYING" });
  } else if (message.content.startsWith(prefix + "setName")) {
    client.user.setUsername(argresult);
  } else if (message.content.startsWith(prefix + "setAvatar")) {
    client.user.setAvatar(argresult);
  } else if (message.content.startsWith(prefix + "setStatus")) {
    if (!argresult)
      return message.channel.send(
        "`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات"
      );
    client.user.setStatus(argresult);
  }
});

module.exports.run = async (bot, message, args) => {
  if (
    !message.member.hasPermission("KICK_MEMBERS") &&
    message.author.id !== "291221132256870400"
  )
    return message.channel.send(
      "Sorry, you don't have permissions to use this!"
    );

  let member = message.mentions.members.first();
  if (!member) return message.channel.send(`Please tag user to kick`);

  if (!member.kickable) return message.channel.send("I cannot kick this user!");
  if (member.user.id === "291221132256870400")
    return message.channel
      .send("I can't kick my owner!")

      .catch(error =>
        message.reply(`Sorry, I couldn't kick because of : ${error}`)
      );
  let kick = new Discord.RichEmbed()
    .setColor(`#ecd4fc`)
    .setTitle(`Kick | ${member.user.tag}`)
    .addField("User", member, true)
    .addField("Moderator", message.author, true)
    .setTimestamp()
    .setFooter(member.id);

  message.channel.send(kick);

  message.delete();
};

//CopyRights ToxicCodes 04/28/2019 🌠☭ 🕅ØŇŞŦ€Ř ҜƗŇᎶ 👺❦❧#8722

client.on("message", message => {
  let command = message.content.split(" ")[0].slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (!message.content.startsWith(prefix)) return;

  if (message.author.bot) return;

  if (command === "1welcome") {
    let welcomechann = args.join(" ");

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("You must have the **`ADMINISTRATOR`** permission!");

    if (!message.guild.me.hasPermission("ADMINISTRATOR"))
      return message.reply("I must have the **`ADMINISTRATOR`** permissions!");

    if (!message.member.guild.channels.find(x => x.name === welcomechann))
      return message.reply("Usage: **`(channel name)`**");

    message.reply("Successfully applied welcome to **`" + welcomechann + "`**");

    WelcomeChannel[message.guild.id] = {
      guild: message.guild.name,

      channel: welcomechann
    };

    fs.writeFile(
      "./welcomer.json",
      JSON.stringify(WelcomeChannel, null, 4),
      err => {
        if (err) throw err;
      }
    );
  }
});

client.on("guildMemberAdd", async function(Monster) {
  const WelcomeChannelMK = Monster.guild.channels.find(
    mk => mk.name === WelcomeChannel[Monster.guild.id].channel
  );

  if (!WelcomeChannelMK) return;

  Monster.guild.fetchInvites().then(guildInvites => {
    const uses = guildInvites.find(codes => codes.uses);

    const UserInvited = client.users.get(uses.inviter.id);

    let itsMe = client.emojis.find(copy => copy.name === "diamondmk");

    var EmbedWelcome = new Discord.RichEmbed()

      .setDescription(
        `${itsMe} __**New Member Joined**__

            ➤ Welcome <@${Monster.user.id}> To **${Monster.guild.name}**

            ➤ You Are Nr: **${Monster.guild.memberCount}**

            ➤ Invited By: <@${UserInvited.id}>`
      )

      .setColor("#383c41");

    const MKPIC = ["./imgs/w1.png"];

    let Image = Canvas.Image,
      CodesMK = new Canvas(400, 200),
      ctx = CodesMK.getContext("2d");

    fs.readFile(MKPIC, function(err, Background) {
      if (err) return console.log(err);

      let BG = Canvas.Image;

      let ground = new Image();

      ground.src = Background;

      ctx.drawImage(ground, 0, 0, 400, 200);

      let url = Monster.user.displayAvatarURL.endsWith(".webp")
        ? Monster.user.displayAvatarURL.slice(100) + ".png"
        : Monster.user.displayAvatarURL;

      jimp.read(url, (err, ava) => {
        if (err) return console.log(err);

        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
          if (err) return console.log(err);

          ctx.font = "bold 16px Arial";

          ctx.fontSize = "20px";

          ctx.fillStyle = "#f1f1f1";

          ctx.textAlign = "center";

          ctx.fillText(Monster.guild.name, 254, 67);

          ctx.font = "bold 16px Arial";

          ctx.fontSize = "20px";

          ctx.fillStyle = "#f1f1f1";

          ctx.textAlign = "center";

          ctx.fillText(Monster.guild.memberCount, 338, 161);

          ctx.font = "bold 16px Arial";

          ctx.fontSize = "20px";

          ctx.fillStyle = "#f1f1f1";

          ctx.textAlign = "center";

          ctx.fillText(Monster.user.username, 77, 183);

          let Avatar = Canvas.Image;

          let ava = new Avatar();

          ava.src = buf;

          ctx.beginPath();

          ctx.arc(77, 101, 62, 0, Math.PI * 2);

          ctx.stroke();

          ctx.clip();

          ctx.drawImage(ava, 13, 38, 128, 126);

          WelcomeChannelMK.send({
            embed: EmbedWelcome,
            file: CodesMK.toBuffer()
          });
        });
      });
    });
  });
}); //By 🌠☭ 🕅ØŇŞŦ€Ř ҜƗŇᎶ 👺❦❧#8722

//CopyRights ToxicCodes 04/28/2019 🌠☭ 🕅ØŇŞŦ€Ř ҜƗŇᎶ 👺❦❧#8722
