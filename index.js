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

const { setup } = require('aoi.parser');
setup(aoijs.Util);

bot.onMessage();
bot.onInteractionCreate();


bot.functionManager.createFunction({
  name : '$coin',
  params: "",
  type : 'aoi.js',
  code : `<:coinz_yet20:887529170316460043>`
})
bot.functionManager.createFunction({
  name : '$badWord', //FUNCTION NAME 
  type : 'djs', //TYPE METHOD
  code :  async d => {//FETCHING DATA AS D
        
    const data = d.util.aoiFunc(d)
    const clientel = d.util.client
    const [userid,params] = data.inside.splits;//GETTING THE PARAMETERS
        
    const user = await d.util.getUser(d, userid) // THIS IS THE CODE INSIDE
    clientel.send(params);//YOU CAN CHANGE THIS AS PER YOUR REQUIREMENTS
        
    return {
      code: d.util.setCode(data)
    }}
})
bot.functionManager.createFunction({
  name : '$badgeGetNonEph',
  params: ["badgeEmojiName", "badgeVar", "badgeEmojiID"],
  type : 'aoi.js',
  code : 
    `
      $interactionReply[;
        {newEmbed:
          {title:Achievement!}
          {description:you got achivement. {badgeEmojiName},{badgeVar},{badgeEmojiID}}
        }
      ]
    `
})
bot.functionManager.createFunction({
  name : '$badgeGetNormal',
  params: ["badgeEmojiName","badgeVar","badgeEmojiID"],
  type : 'aoi.js',
  code : 
    `
      $sendMessage[
        {
          "embeds" : "{newEmbed:{title:Achievement!}{description:you got achivement. {badgeEmojiName},{badgeVar},{badgeEmojiID}}}"
        }
      ]
    `
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/')
const vars = require('./variables.js')
bot.variables(vars)


bot.readyCommand({
    channel: "872155819096039424",
    code: `**Do people still use yet 2.0?**`
})

//status
bot.status({
  text: `[y!] Idiots : $allMembersCount | Servers - $serverCount `,
  type: "PLAYING",
  status: "dnd",
  time: 20
})

bot.status({
  text: "[y!] https://yetbot.tk/support.html",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

bot.status({
  text: "[y!] If you ask me i think you should click that \"Add to Server\" button ngl",
  type: "PLAYING",
  status: "dnd",
  time: 15
})

bot.loopCommand({
code: 
  `
    $editMessage[
      1015333980725313558;
      $uptime\ncpu : $cpu%\nram : $ram\nping : $pingms;
      920947757613735966
    ]
    edited message in <#920947757613735966> $deleteIn[10s]
  `,
channel: "859877592806850560",
executeOnStartup: true,
every: 1800000
})

// BACKUP 10 MINUTES

bot.loopCommand({
code: `
$djsEval[
var fs = require("fs"); // Load the filesystem module
var stats = fs.statSync("backupe/database.txt")
var sizeB = stats.size
var sizeMB = sizeB / (1024*1024);
var sizekB = sizeB / 1000;
const back = fs.readFileSync("database/main/main_scheme_1.sql", "utf8")

if (sizekB > 6.000) {
fs.unlink('backupe/database.txt', function (err) {
	if (err) throw err;
	console.log('err');
}) console.log("file delegted for exceeding kb limit");
} else {

fs.appendFile("backupe/database.txt", " !>--------------Awez new backup------------>" + back + "<--------------Awez new backup------------< ",
  { encoding: "latin1", mode: 0o666, flag: "a" },
  (err) => {
    if (err) {console.log(err);}
  });
};]
Backed up, database into /backupe/database.txt`,
channel: "859877592806850560",
executeOnStartup: true,
every: 43200000
})


// BACKUP 10 MINUTES


// INTERACTIONS 
// END