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
      $ifAwaited[$isNumber[$slashOption[amount]]==false;
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
          {newEmbed:{color:#DC143C}{description:You don't have that much bro?}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
        ]
        $onlyIf[$checkContains[$slashOption[amount];-]==false;
          {newEmbed:{color:#DC143C}{description:Why ya tryna use negative numbers?}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
        ]
      ]

      
      $onlyIf[$slashOption[amount]==all||$slashOption[amount]==max||$checkContains[$slashOption[amount];.;,]==false;
          {newEmbed:{color:#DC143C}{description:Invalid slash option input. Input has to be either a non-floating point number, \`all\` or \`max\`}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
      $onlyIf[$interactionData[options._subcommand]==deposit;]
    `
  },{
    name:"bank",// withdraw
    type:"interaction",
    prototype:"slash",
    code:`
      $ifAwaited[$isNumber[$slashOption[amount]]==false;
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
          {newEmbed:{color:#DC143C}{description:You don't have that much bro?}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
        ]
        $onlyIf[$checkContains[$slashOption[amount];-]==false;
          {newEmbed:{color:#DC143C}{description:Why ya tryna use negative numbers?}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
        ] 
      ]

      
      $onlyIf[$slashOption[amount]==all||$slashOption[amount]==max||$checkContains[$slashOption[amount];.;,]==false;
          {newEmbed:{color:#DC143C}{description:Invalid slash option input. Input has to be either a non-floating point number, \`all\` or \`max\`}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
      $onlyIf[$interactionData[options._subcommand]==withdraw;]
    `
  }
]