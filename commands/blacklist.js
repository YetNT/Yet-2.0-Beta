module.exports = [
  {
    name:"blacklist add",
    code:
      `
        $title[1;$username[$get[user]] has been blacklisted!]
        $description[1;
          Date of blacklist : $get[date] \`(GMT+00)\`
          Reason : $get[reason]
        ]
        $color[1;FF0000]

        $senddm[
          Hello user, unfortunately you have been **blacklisted** by <@$authorID>
          Reason: \`$get[reason]\`
          You can only appeal in \`3 days\` or else you will be ignored. https://forms.gle/BxtcvicnmrwVeCNW6 ;
          $get[user]
        ]
        
        $channelSendMessage[858644165038047262;
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
              \`$get[reason]\`
            :
              yes
            }
            {field:Date (GMT+00):
              \`$get[date]\`
            :
              yes
            }
            {field:Blacklisted by:
              <@$authorID>
            :
              yes
            }
            {thumbnail:https://cdn.discordapp.com/emojis/860970578684018700.webp?size=80&quality=lossless}
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
        $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]
      `
  },
  {
    name:"blacklist remove",
    code:
      `
        $setGlobalUserVar[blacklistTime; ;$get[user]]
        $setGlobalUserVar[blacklistReason; ;$get[user]]
        $setGlobalUserVar[blacklistBy; ;$get[user]]
        
        $title[1;$username[$get[user]] has been unblacklisted!]
        $description[1;
          Date of unblacklist : $get[date] \`(GMT+00)\`
          Original blacklist reason : $getGlobalUserVar[blacklistReason;$get[user]]
          Original blacklist provider : $getGlobalUserVar[blacklistBy;$get[user]]
        ]
        $color[1;FF0000]

        $senddm[
          Hello user, <@$authorID> has removed you from the blacklist! You better not do what you did again, or the blacklist may be permanent;
          $get[user]
        ]
        
        $channelSendMessage[858644165038047262;
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
              \`$getGlobalUserVar[blacklistReason;$get[user]]\`
            :
              yes
            }
            {field:Date (GMT+00):
              \`$get[date]\`
            :
              yes
            }
            {field:Blacklist by/Unblacklisted by:
              <@$getGlobalUserVar[blacklistBy;$get[user]]>/<@$authorID>
            :
              yes
            }
            {thumbnail:https://cdn.discordapp.com/emojis/860970578747981864.webp?size=80&quality=lossless}
          }
        ]
        

        $setGlobalUserVar[blacklist;false;$get[user]]
        
        $onlyIf[$getGlobalUserVar[blacklist;$get[user]]==true;:x: **User is not blacklisted**]
        $onlyIf[$userExists[$message]==true;User does not exist, make sure you use the \`user id\` and not ping them!]
        
        $let[date;$parseDate[$dateStamp;date]]
        $let[user;$message]
        $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]
      `
  },{
    name:"amBlacklisted?",
    code:
      `
        $if[$getGlobalUserVar[blacklist;$authorID]==true;
          You're blacklisted;
          You're not blacklisted
        ]
      `
  }
]