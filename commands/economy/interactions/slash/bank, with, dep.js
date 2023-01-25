module.exports = [
  {
    name:"create4",
    code:`
      $createApplicationCommand[global;bank;bank;true;slash;
        [
          {
            "name": "withdraw",
            "description": "Withdraw coins from your bank account", 
            "type": "SUB_COMMAND",
            "options" : 
              [
                {
                  "name" : "amount",
                  "description" : "Amount of coins you want to withdraw, or for faster withdrawal 'all' or 'max' ",
                  "required" : true,
                  "type" : "STRING"
                }
              ]
          },
          {
            "name": "deposit",
            "description": "Deposit coins from your bank account", 
            "type": "SUB_COMMAND",
            "options" : 
              [
                 {
                  "name" : "amount",
                  "description" : "Amount of coins you want to deposit, or for faster deposit 'all' or 'max' ",
                  "required" : true,
                  "type" : "STRING"
                }
              ]
          }
        ]
      ]
    `
  },
  {
    name:"bank",// deposit
    type:"interaction",
    prototype:"slash",
    code:`
      $if[$isNumber[$slashOption[amount]]==false;

        
        $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[money;$authorID]];$authorID]
        $setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID];$getGlobalUserVar[money;$authorID]]]
        $interactionReply[;
          {newEmbed:
            {title:**Successfully Deposited!!**}
            {color:1bcfaf}
            {description:**Successfully deposited** $coin**$numberSeparator[$getGlobalUserVar[money;$authorID];,]**}
            {footer:bank is powr}
            {image:https://akket.com/wp-content/uploads/2018/08/Bank-voronezh-52.jpg}
          }
        ;;;everyone]

        
      ;

      
        $setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID];$slashOption[amount]]]
        $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$slashOption[amount]]]
        $interactionReply[;
          {newEmbed:
            {title:**Successfully Deposited!!**}
            {color:1bcfaf}
            {description:**Successfully deposited** $coin**$slashOption[amount]**}
            {footer:bank is powr}
            {image:https://akket.com/wp-content/uploads/2018/08/Bank-voronezh-52.jpg}
          }
        ;;;everyone]
        $onlyIf[$getGlobalUserVar[money;$authorID]>$slashOption[amount];
          {
            "embeds":"{newEmbed:{color:#DC143C}{description:Bro you don't have that amount}}",
            "ephemeral":true,
            "options":{"interaction":true}
          }
        ]
        $onlyIf[$checkContains[$slashOption[amount];-]==false;
          {
            "embeds":"{newEmbed:{color:#DC143C}{description:Why ya tryna use negative numbers?}}",
            "ephemeral":true,
            "options":{"interaction":true}
          }
        ]

        
      ]

      
      $onlyIf[$slashOption[amount]==all||$slashOption[amount]==max||$isNumber[$slashOption[amount]]==true;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Invalid slash option input. Input has to be either a non-floating point number, \`all\` or \`max\`}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$interactionData[options._subcommand]==deposit;]
    `
  },{
    name:"bank",// withdraw
    type:"interaction",
    prototype:"slash",
    code:`
      $if[$isNumber[$slashOption[amount]]==false;


        $setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$getGlobalUserVar[bank;$authorID]];$authorID]
        $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[bank;$authorID]]]
        $interactionReply[;
          {newEmbed:
            {title:**Successfully Withdrawn!!**}
            {color:1bcfaf}
            {description:**Successfully withdrew** $coin**$numberSeparator[$getGlobalUserVar[bank;$authorID];,]**}
            {footer:bank is powr}
            {image:https://akket.com/wp-content/uploads/2018/08/Bank-voronezh-52.jpg}
          }
        ;;;everyone]

        
      ;


        $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$slashOption[amount]]]
        $setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$slashOption[amount]]]
        $interactionReply[;
          {newEmbed:
            {title:**Successfully Withdrawn!!**}
            {color:1bcfaf}
            {description:**Successfully withdrew** $coin**$slashOption[amount]**}
            {footer:bank is powr}
            {image:https://akket.com/wp-content/uploads/2018/08/Bank-voronezh-52.jpg}
          }
        ;;;everyone]
        $onlyIf[$getGlobalUserVar[bank;$authorID]>$slashOption[amount];
          {
            "embeds":"{newEmbed:{color:#DC143C}{description:Bro you don't have that amount}}",
            "ephemeral":true,"options":{"interaction":true}
          }
        ]
        $onlyIf[$checkContains[$slashOption[amount];-]==false;
          {
            "embeds":"{newEmbed:{color:#DC143C}{description:Why ya tryna use negative numbers?}}",
            "ephemeral":true,"options":{"interaction":true}
          }
        ]

        
      ]

      
      $onlyIf[$slashOption[amount]==all||$slashOption[amount]==max||$isNumber[$slashOption[amount]]==true;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Invalid slash option input. Input has to be either a non-floating point number, \`all\` or \`max\`}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$interactionData[options._subcommand]==withdraw;]
    `
  }
]