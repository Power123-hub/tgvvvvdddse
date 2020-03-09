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
  client.user.setActivity(random, { type: "Streaming" });
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
  if (message.content.startsWith(prefix + "sg")) {
    let text = message.content.split(" ").slice(1);
    const search = `https://lmgtfy.com/?q=${text}`.replace(" ");
    if (!search)
      return message.channel.send(`Hey, what do you want me to google`);
    message.channel.send(search);
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
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
  if (message.content.startsWith(prefix + "report")) {
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
  if (cmd === prefix + `say`) {
    msg.delete();
    room.send(args);
  }
});

////////// SIMPLE EMBED PING PONG //////////
client.on("message", message => {
  if (message.content === prefix + "ping") {
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
  if (message.content.startsWith(prefix + "avatar")) {
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
  if (message.content === prefix + "server") {
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
  if (message.content === prefix + "social") {
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
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send(
          "``To Use Command write this : " + { prefix } + "move [USER]``"
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
  if (message.content.startsWith(prefix + "uptime")) {
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
  client.channels.get("683267977378136091").join();
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
  if (message.content.toLowerCase() === prefix + "cat") {
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
  if (message.content === prefix + "help") {
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
    client.channels.get("620324892398714910").send("BZHI REVA");
  }, 6000);
});

const developers = ["345860680131411968"];
const adminprefix = prefix;
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
  if (ra3d.content.startsWith(prefix + "ccolors")) {
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
  if (message.content.startsWith(prefix + "server")) {
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

client.on("message", async msg => {
  // eslint-disable-line
  if (msg.author.bot) return undefined;
  //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === `play`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send("يجب توآجد حضرتك بروم صوتي .");
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      return msg.channel.send("لا يتوآجد لدي صلاحية للتكلم بهذآ الروم");
    } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    if (!permissions.has("SPEAK")) {
      return msg.channel.send("لا يتوآجد لدي صلاحية للتكلم بهذآ الروم");
    } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    if (!permissions.has("EMBED_LINKS")) {
      return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **");
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      return msg.channel.send(
        ` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`
      );
    } else {
      try {
        //by ,$ ReBeL ء , ??#4777 'CODES SERVER'

        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
          var videos = await youtube.searchVideos(searchString, 5);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
            .setDescription(
              `**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join("\n")}`
            )
            //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
            .setFooter("Saad Team ©");
          msg.channel.sendEmbed(embed1).then(message => {
            message.delete(20000);
          });

          // eslint-disable-next-line max-depth
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 15000,
                errors: ["time"]
              }
            ); //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
          } catch (err) {
            console.error(err);
            return msg.channel.send("لم يتم إختيآر مقطع صوتي");
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(":X: لا يتوفر نتآئج بحث ");
        }
      } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'

      return handleVideo(video, msg, voiceChannel);
    } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  } else if (command === `skip`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لا يتوفر مقطع لتجآوزه");
    serverQueue.connection.dispatcher.end("تم تجآوز هذآ المقطع");
    return undefined;
  } else if (command === `stop`) {
    //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لا يتوفر مقطع لإيقآفه");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("تم إيقآف هذآ المقطع");
    return undefined;
  } else if (command === `vol`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("أنت لست بروم صوتي .");
    if (!serverQueue) return msg.channel.send("لا يوجد شيء شغآل.");
    if (!args[1])
      return msg.channel.send(
        `:loud_sound: مستوى الصوت **${serverQueue.volume}**`
      );
    serverQueue.volume = args[1]; //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send("لا يوجد شيء حالي ف العمل.");
    const embedNP = new Discord.RichEmbed().setDescription(
      `:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`
    );
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `queue`) {
    //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    if (!serverQueue) return msg.channel.send("لا يوجد شيء حالي ف العمل.");
    let index = 0;
    //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    const embedqu = //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    new Discord.RichEmbed().setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join("\n")}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`);
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("تم إيقاف الموسيقى مؤقتا!");
    } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    return msg.channel.send("لا يوجد شيء حالي ف العمل.");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("استأنفت الموسيقى بالنسبة لك !");
    } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    return msg.channel.send("لا يوجد شيء حالي في العمل.");
  }

  return undefined;
});
//by ,$ ReBeL ء , ??#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  }; //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    }; //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    queue.set(msg.guild.id, queueConstruct);
    //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    queueConstruct.songs.push(song);
    //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
    }
  } else {
    //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else
      return msg.channel.send(
        ` **${song.title}** تم اضافه الاغنية الي القائمة!`
      );
  }
  return undefined;
} //by ,$ ReBeL ء , ??#4777 'CODES SERVER'

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return; //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  } //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  console.log(serverQueue.songs);
  //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      if (reason === "Stream is not generating quickly enough.")
        console.log("Song ended.");
      else console.log(reason);
      serverQueue.songs.shift(); //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      play(guild, serverQueue.songs[0]);
    }) //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    .on("error", error => console.error(error)); //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5); //by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
} //by ,$ ReBeL ء , ??#4777 'CODES SERVER'

client.on("message", message => {
  if (message.content === `${prefix}`) {
    const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
      .setColor("#000000").setDescription(` //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
${prefix}play ? لتشغيل أغنية برآبط أو بأسم
${prefix}skip ? لتجآوز الأغنية الحآلية
${prefix}pause ? إيقآف الأغنية مؤقتا
${prefix}resume ? لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ? لتغيير درجة الصوت 100 - 0
${prefix}stop ? لإخرآج البوت من الروم
${prefix}np ? لمعرفة الأغنية المشغلة حآليا
${prefix}queue ? لمعرفة قآئمة التشغيل
 `); //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
    message.channel.sendEmbed(embed); //by ,$ ReBeL ء , ??#4777 'CODES SERVER'
  }
});
