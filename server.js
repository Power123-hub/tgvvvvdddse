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

client.on("message", message => {
  if (message.content === "=help") {
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Commands List :`, client.user.avatarURL)
      .addField("chat daxa, bo daxstne chat")
      .addFiled("chat bkawa, bo krdnaway chat")
      .addFiled("=clear (1-1000), bo srenaway chat")
      .addFiled("=bc (chat), bo nardne resala bo memberakan")
      .addFiled("=sg (chat), bo danane linke search la google")
      .addFiled("=p, bo profile member")
      .addFiled("=report, bo report krdne kasek la bakar henane botaka")
      .addFiled("=ping, pong")
      .addFiled("=avatar, bo wargrtne logoy sar profile kasek")
      .addFiled("=server, bo pedane zanyary sabarat ba server")
      .addFiled("=uptime, bo pegotne kate online botaka")
      .addFiled("=move, bo move krdne kasek yan xot");
    message.author.sendEmbed(help).catch(error => {
      message.channel.send("Erorr Please Open Your Dms");
    });
  }
});
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
  if (message.content.toLowerCase() === "=cat") {
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
