// /init, /aoijs, /help
module.exports = [{
  name:"init",
  code:`
    initialized the /aoijs test slash command.
    $createApplicationCommand[$guildID;test;list of slash comamnd option types;true;slash;
      [
        {"name" : "string","description" : "any text input (type 3)","type" : 3,"required" : true},
        {"name" : "integer","description" : "Any number between -2^53 and 2^53 (type 4)","type" : 4,"required" : true},
        {"name" : "boolean","description" : "True or false (type 5)","type" : 5,"required" : true},
        {"name" : "user","description" : "Any User (type 6)(type 9 for user&roles)","type" : 6,"required" : true},
        {"name" : "channel","description" : "Any channel (type 7)","type" : 7,"required" : true},
        {"name" : "role","description" : "Roles (type 8)(type 9 for user&roles)","type" : 8,"required" : true},
        {"name" : "attachment","description" : "an attachment (type 11)","type" : 11,"required" : true}
      ]
    ]
  `
},{
  prototype:"slash",
  type:"interaction",
  name:"aoijs",
  code:`
  $interactionReply[$interactionData[options.data[0].value] - message;;;;;yes]
  `
},{
   type:"interaction",
   prototype:"slash",
   name:"help",
   code:`
   $interactionReply[helptext;
     {newEmbed:
       {title:Help? or not, xd}
       {field:Quick Update Check:$getObjectProperty[Lat] $createObject[$readFile[./update/updates.json]]:no}
       {description:***__[Support Server](https://discord.gg/6mnwXeC2QR)__***\n\n**__Command Categories__**\n\n\`\`Others Button\`\` - **Other useless commands**\n\`\`Economy Buttons\`\` - **Economy commands**\n\`\`Images Button\`\` - **Images/Gifs (APIs belong to there owners)**\n\`\`Help Button\`\` - **Proabably Helpful Commands**\n\`\`y!faq\`\` -**List of frequently asked questions**\n\n**__Credits__**\n\nCredits to myself lol, for motivating myself to create the bot and continue for 6 months straight\nCredits to FLO and my other friends for helping me test the bot, especially JJ250 and Babatunde for allowing me to use their server for testing.\nCredits to API creators, some APIs do not belong to me.}
       {footer:𝙏𝙃𝙀𝙍𝙀 𝙄𝙎 𝙉𝙊 𝙉𝙎𝙁𝙒 𝘾𝙊𝙉𝙏𝙀𝙉𝙏}
       {color:#00FF00}};
      {actionRow:
        {button:Help?:4:help}
        {button:Images:2:img}
        {button:Economy:3:eco}
        {button:Fun:1:fun}
      };;;yes
  ]`
}]