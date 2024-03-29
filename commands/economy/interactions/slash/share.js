module.exports = [
  {
    name:"create3",
    code:`
    $createApplicationCommand[global;share;Share with someone;true;slash;
      [
        {
          "name" : "user",
          "description" : "the user",
          "type" : 6,
          "required" : true
        },
        {
          "name" : "amount",
          "description" : "amount of coins",
          "type" : 4,
          "required" : true
        }
      ]
    ]
    `
  },{
    type:"interaction",
    prototype:"slash",
    name:"share",
    code:`
      $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$slashOption[amount]];$authorID]
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$slashOption[user]];$slashOption[amount]];$slashOption[user]]
  
      $interactionReply[;
        {newEmbed:
          {title:Shared?}
          {color:YELLOW}
          {description: You gave <@$slashOption[user]> $coin**$slashOption[amount]**}
        }
      ;;;everyone]

      $onlyIf[$slashOption[user]!=$authorID;
          {newEmbed:{color:#DC143C}{description:Ping someone else. Not yourself.}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
      $onlyIf[$getGlobalUserVar[money;$authorID]>$slashOption[amount];
          {newEmbed:{color:#DC143C}{description:Nice you don't have $coin**$slashOption[amount]**}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
    `
  }
]