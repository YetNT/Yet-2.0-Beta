module.exports = [
  {
    name:"blacklist add",
    code:
      `
        $title[1;die]
        $description[1;
          $get[reason]
          $get[date] \`(GMT+00)\`
          <@$get[user]>
        ]
        $color[1;FFF000]

        $channelSendMessage[875258372948115466;
          {newEmbed:
            {title:New blacklist addition}
            {field:User:
              Name \: **$username[$get[user]]**
              Discriminator \: **$discriminator[$get[user]]**
              User ID \: **$get[user]**
            :
              yes
            }
            {field:Reason:
              \`VAR REASON HERE\`
            :
              yes
            }
            {field:Date (GMT+00):
              \`$get[date]\`
            :
              yes
            }
            {field:Blacklisted by:
              **\`USER VAR\`**
            :
              yes
            }
          }
        ]

        $setGlobalUserVar[blacklist;true;$get[user]]
        $setGlobalUserVar[blacklistTime;$get[date];$get[user]]
        $setGlobalUserVar[blacklistReason;$get[reason];$get[user]]
        $setGlobalUserVar[blacklistBy;$authorID;$get[user]]
        
        $onlyIf[$get[reason]!=;:x: Make sure you add a reason, you cannot blacklist a user for nothing!]
        $onlyIf[$getGlobalUserVar[blacklist;$get[user]]==false;:x: **User is already blacklisted**]
        $onlyIf[$userExists[$splitText[1]]==true;User does not exist, make sure you use the \`user id\` and not ping them!]

        $let[reason;$splitText[2]]
        $let[date;$parseDate[$dateStamp;date]]
        $let[user;$splitText[1]]

        $textSplit[$message;,]
        $onlyIf[$checkContains[$message;,]==true;:x: Make sure to separate the \`user id\` from the \`reason\` using **\`,\`**]
      `
  },
  {
    name:"blacklist remove",
    code:
      `
        $title[1;die 2]
        $description[1;
          $get[date] \`(GMT+00)\`
          <@$get[user]>
        ]
        $color[1;FFF000]

        $channelSendMessage[875258372948115466;
          {newEmbed:
            {title:New blacklist removal}
            {field:User:
              Name \: **$username[$get[user]]**
              Discriminator \: **$discriminator[$get[user]]**
              User ID \: **$get[user]**
            :
              yes
            }
            {field:Reason:
              \`VAR REASON HERE\`
            :
              yes
            }
            {field:Date (GMT+00):
              \`$get[date]\`
            :
              yes
            }
            {field:Blacklisted by:
              **\`USER VAR\`**
            :
              yes
            }
          }
        ]

        $onlyIf[$userExists[$message]==true;User does not exist, make sure you use the \`user id\` and not ping them!]
        
        $let[date;$parseDate[$dateStamp;date]]
        $let[user;$message]
      `
  }
]