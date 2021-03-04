const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://pp-timer.glitch.me/`);
}, 280000);

const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
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
//the new coding San Shex Aras
client.on("ready", async ready => {
  var i = 0;
  var list = [
   

    "<",
    "<A",
    "<A/",
    "<A/",
    "<A/M",
    "<A/M>",
    "<A/M> | ",
    "<A/M> | N",
    "<A/M> | Na",
    "<A/M> | Nar",
    "<A/M> | Naro", 
    "<A/M> | Narox"
  ];
  setInterval(() => {
    var guild = client.guilds.get("703704417861369897");
    var reva = guild.members.get("689464686026162363");
    reva.setNickname(list[i]);

    if (i + 1 === 13) {
      i = 0;
    } else {
      i++;
    }
  }, 3500);
});

client.on("ready", () => {});
console.log("loaded");

client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "timer join") {
    if (message.author.id === "569875424654393346") {
      if (message.member.voiceChannel) {
        message.member.voiceChannel
          .join()
          .then(connection => {
            console.log("connected");
          })
          .catch(console.log);
      } else {
        console.log("can't connect");
        console.log("can't connect");
      }
    }
  }
});

client.on("message", message => {
  if (!message.guild) return;

  const args = message.content.slice(1).split(" ");
  const command = args.shift().toLowerCase();
  if (command === "077") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          console.log("connected");
          connection.playStream(
            ytdl("https://youtu.be/kXYiU_JCYtU", { filter: "audioonly" })
          );
        })
        .catch(console.log);
    } else {
      console.log("can't connect");
    }
  }
});
