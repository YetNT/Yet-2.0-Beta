module.exports = [{
name:"backup",
code:`
$djsEval[const fs = require('fs');
const back = fs.readFileSync("database/main/main_scheme_1.sql", "utf8");
fs.appendFile("backupe/database.txt", " >--------------Awez new backup------------>" + back + "<--------------Awez new backup------------< ",{ encoding: "latin1", mode: 0o666, flag: "a" },(err) => { if (err) { console.log(err); }});]
$onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]
`
},{
  name: "info",
  code: `
  $addField[1;Bot Stats;
  All Members Count : $allMembersCount
  Guilds : $serverCount
  ]
  $addField[2;Bot Info;
  Uptime : $uptime
  CPU : $cpu%
  RAM : $ramGB
  Ping : $pingMS
  Token : ||never gonna give you up. never gonna let you down||]`
}, {
  name: "invite",
  code: `
  $title[1;Invite!]
  $description[1;
  [Main Invite](https://discord.com/api/oauth2/authorize?client_id=887522919255789629&permissions=430247832640&scope=bot%20applications.commands)
  ]
  `
}, {
  name: "update",
  aliases: ["up","upC","updateCommands","update-commands","reboot","rb"],
  code: `$updateCommands
  All commands have been updated. (Any changes to any file have now been added to the bot.)
  $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\` (If you were trying to find the lastesty update its y!update**s**)]`
}, {
  name: "set",
  aliases: ['s','sv'],
  code: `
  $if[$checkContains[$message[3];me;myself]==true;


$setGlobalUserVar[$message[1];$sum[$getGlobalUserVar[$message[1];$message[1]];$message[2]];$authorID]

Successfully updated ($authorID)'s variable($message[1]) value to $message[2]
$onlyIf[$message[2]<6999999999999999998;
Cannot set $authorID's variable($message[1]) higher than 6999999999999999999]

;


$setGlobalUserVar[$message[1];$sum[$getGlobalUserVar[$message[1];$message[1]];$message[2]];$message[3]]

Successfully updated $username[$message[3]]($message[3])'s variable($message[1]) value to $message[2]
$onlyIf[$message[2]<6999999999999999998;
Cannot set $message[3]'s variable($message[1]) higher than 6999999999999999999
]

]
$onlyForIDs[671549251024584725;:x: Advanced Developer Command! \`Error Code 2\`]`
}, {
  name: "evaluate",
  aliases: "eval",
  code: `$eval[$message]
  $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]`
}, {
  name: "readfile",
  aliases: "rf",
  code: `\`\`\`$readFile[$message]\`\`\`
  $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]`
},{
  name: "dict",
  code: `$jsonRequest[https://api.yetbot.ml/dict/dict.json;$message;Try again?]`
}, {
  name:"day",
  code:`
  $day[yes] yes
  $day[no] no`
}, {
  name:"monRetr",
  code:`
  Money Switch Successful!
  $setGlobalUserVar[moneyS;1;$authorID]
  $setGlobalUserVar[money;$getEmbed[$channelID;$message[1];1;fvalue];$authorID]
  $onlyIf[$checkContains[$getEmbed[$channelID;$message[1];1;author];$username[$authorID]'s coinz]==true;That is not your balance, smh.]
  $onlyIf[$getGlobalUserVar[moneyS;$authorID]==0;:x: You have already done this procedure! Sorry but you cannot repeat it.]
  $onlyIf[$messageExists[$message[1];$channelID]==true; Make sure you have ran \`y!!bal\`, Gotten the message ID of the balance embed, and run this command again with that message ID, in order to get your money back.
  If you have already restarted with this bot and have not gotten your money abck on the other bot, Withdraw all your cash on the other bot, then deposit all your cash on this bot and THEN run this command]`
},{
  name:"mod-add",
  code:`
  **\`$username[$mentioned[1]] is now a Moderator\`**
  $setGlobalUserVar[mod;1;$mentioned[1]]
  $onlyIf[$getGlobalUserVar[mod;$mentioned[1]]==0;\`User is already a Moderator\`]
  $onlyIf[$message[1]!=undefined;\`Nice mention bro\`]
  $onlyForIDs[671549251024584725;:x: Advanced Developer Command! \`Error Code 2\`]`
}, {
  name:"mod-remove",
  code: `
  **\`$username[$mentioned[1]] is no longer a Moderator\`**
  $setGlobalUserVar[mod;0;$mentioned[1]]
  $onlyIf[$getGlobalUserVar[mod;$mentioned[1]]==1;\`User already isnt Moderator\`]
  $onlyIf[$message[1]!=undefined;\`Nice mention bro\`]
  $onlyForIDs[671549251024584725;:x: Advanced Developer Command! \`Error Code 2\`]`
},{
  name:"prem-add",
  code:`
  **\`$username[$mentioned[1]] is now a premium user\`**
  $setGlobalUserVar[premium;1;$mentioned[1]]
  $onlyIf[$getGlobalUserVar[premium;$mentioned[1]]==0;\`User is already a premium user\`]
  $onlyIf[$message[1]!=undefined;\`Nice mention bro\`]
  $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command!]`
}, {
  name:"prem-remove",
  code: `
  **\`$username[$mentioned[1]] is no longer a premium user\`**
  $setGlobalUserVar[premium;0;$mentioned[1]]
  $onlyIf[$getGlobalUserVar[premium;$mentioned[1]]==1;\`User is already not a premium user\`]
  $onlyIf[$message[1]!=undefined;\`Nice mention bro\`]
  $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]`
},{
  name:"evalInt",
  code:`
    $createApplicationCommand[global;eval;eval;true;slash;
      [
        {
          "name" : "input",
          "description" : "input",
          "type" : 3,
          "required" : true
        }
      ]
    ]
    
  `
},{
  name:"eval",
  type:"interaction",
  prototype:"slash",
  code:`
    $interactionReply[$eval[$slashOption[input]]]
    $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command!]
  `
}]