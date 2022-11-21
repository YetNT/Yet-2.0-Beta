const express = require('express');
const app = express();
const fs = require('fs')
const port = 3000;

app.get('/', (req, res) => res.send("helo wrldo"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 

const aoijs = require("aoi.js");
const bot = new aoijs.AoiClient({
  token: process.env.BETA,
  prefix: ["yb!",'yet!','yb! ','YB!','YB! '],
  intents: ["MessageContent", "Guilds", "GuildMessages"]
});


bot.onMessage();
bot.onInteractionCreate();