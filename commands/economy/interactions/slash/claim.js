module.exports = [
  {
    name:"create",
    code:`
      $createApplicationCommand[global;claim;Help Command;true;slash;
        [
          {"name": "daily",  "description": "Daily Coins", "type": "SUB_COMMAND"},
          {"name": "hourly","description": "Hourly coins", "type": "SUB_COMMAND"},
          {"name": "monthly",  "description": "Monthly coins", "type": "SUB_COMMAND"},
          {"name": "69minutely","description": "69 minutely coins", "type": "SUB_COMMAND"}
        ]
      ]
    `
  },
  {
    prototype:"slash",
    type:"interaction",
    name:"claim",
    code:`
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];5500];$authorID]
      $setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];550];$authorID]
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];50];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username, here's your daily reward}
          {color:FFFFF1}
          {description:
            You got \:
            $coin**5500**
            **550** :rock:
            **50** :gem:
          }
          {fields:
            Premium Bonus,
            $ifAwaited[$getGlobalUserVar[premium;$authorID]==1;
              $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];50000];$authorID]
              Premium Bonus = **50000** :gem:
            ;
              user aint a premium user
            ],
            yes
          }
        }
      ;;;everyone]
      
      $advanceCooldown[1d;daily;
          {newEmbed:{color:#DC143C}{description:Sorry wait **%time%** before searching again.}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
      $onlyIf[$interactionData[options._subcommand]==daily;]
    `
  },
  {
    prototype:"slash",
    type:"interaction",
    name:"claim",
    code:`
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];550];$authorID]
      $setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];55];$authorID]
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];5];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username, here's your hourly reward}
          {color:FFFFF1}
          {description:
            You got \:
            $coin**550**
            **55** :rock:
            **5** :gem:
          }
          {fields:
            Premium Bonus,
            $ifAwaited[$getGlobalUserVar[premium;$authorID]==1;
              $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];1000];$authorID]
              Premium Bonus = **1000** :gem:
            ;
              user aint a premium user
            ],
            yes
          }
        }
        ;;;everyone]
      $advanceCooldown[1h;hourly;
          {newEmbed:{color:#DC143C}{description:Sorry wait **%time%** before searching again.}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
      $onlyIf[$interactionData[options._subcommand]==hourly;]
    `
  },
  {
    prototype:"slash",
    type:"interaction",
    name:"claim",
    code:`
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];5000];$authorID]
      $setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];5000];$authorID]
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];100];$authorID]

      $interactionReply[;
        {newEmbed:
          {title:$username, here's your monthly reward}
          {color:FFFFF1}
          {description:
            You got:
            $coin**5000**
            **5000** :rock:
            **100** :gem:
          }
          {fields:
            Premium Bonus,
            $ifAwaited[$getGlobalUserVar[premium;$authorID]==1;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];10000];$authorID]
              Premium Bonus = $coin**10000**
            ;
              user aint a premium user
            ],
            yes
          }
        }
        ;;;everyone]
      $advanceCooldown[30d;monthly;
          {newEmbed:{color:#DC143C}{description:Sorry wait **%time%** before searching again.}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
      
      $onlyIf[$interactionData[options._subcommand]==monthly;]
    `
  },
  {
    prototype:"slash",
    type:"interaction",
    name:"claim",
    code:`
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];150];$authorID]
      $setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];50];$authorID]
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];5];$authorID]

      $interactionReply[;
        {newEmbed:
          {title:$username, here's your 69 minutely reward}
          {color:FFFFF1}
          {description:
            You got:
            $coin**150**
            **50** :rock:
            **5** :gem:
          }
          {fields:
            Premium Bonus,
            $ifAwaited[$getGlobalUserVar[premium;$authorID]==1;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];10000];$authorID]
              Premium Bonus = $coin**10000**
            ;
              user aint a premium user
            ],
            yes
          }
        }
        ;;;everyone]
      $advanceCooldown[69m;sixnine;
          {newEmbed:{color:#DC143C}{description:Sorry wait **%time%** before searching again.}}
          {options:{ephemeral}}
          {extraOptions:{interaction}}
      ]
      
      $onlyIf[$interactionData[options._subcommand]==69minutely;]
    `
  }
]