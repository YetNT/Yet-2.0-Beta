module.exports = [
  {
    name:"shop",
    type:"interaction",
    prototype:"selectMenu",
    code:`
      $interactionUpdate[OPTION 1;
        {newEmbed:
          {title:Shop (Mediocre)}
          {description:
            __Pickaxe__ - $coin **[$numberSeparator[1500;,]](https://discord.com)**
            __Rock__ - $coin **[100](https://discord.com)**
            __Gem__ - $coin **[$numberSeparator[10000;,]](https://discord.com)**
            __Bricks__ - $coin **[$numberSeparator[50;,]](https://discord.com)**
          }
          {color:#808080}
        };
        {actionRow:
          {selectMenu:shop:S H O P:1:1:no:
            {selectMenuOptions:Mediocore:1:meh, items everyone can afford}
            {selectMenuOptions:Expensive:2:Now these are the real deal}
            {selectMenuOptions:Packs:3:packages to use}
            {selectMenuOptions:Other:4:o t h e r, includes shield/HP}
            {selectMenuOptions:Food:5:Food and It's Utensils}
          }
        }
      ]
      
      $onlyIf[$interactionData[values[0]]==1;]
    `
  },{
    name:"shop",
    type:"interaction",
    prototype:"selectMenu",
    code:`
      $interactionUpdate[OPTION 2;
        {newEmbed:
          {title:Shop (Expensive)}
          {description:
            __Flo's Math Test__ - $coin **[$numberSeparator[14000000;,]](https://discord.com)**
            __Yet's Mouse__  - $coin **[$numberSeparator[25000000;,]](https://discord.com)**
          }
          {color:#FFD700}
        };
        {actionRow:
          {selectMenu:shop:S H O P:1:1:no:
            {selectMenuOptions:Mediocore:1:meh, items everyone can afford}
            {selectMenuOptions:Expensive:2:Now these are the real deal}
            {selectMenuOptions:Packs:3:packages to use}
            {selectMenuOptions:Other:4:o t h e r, includes shield/HP}
            {selectMenuOptions:Food:5:Food and It's Utensils}
          }
        }
      ]
    
      $onlyIf[$interactionData[values[0]]==2;]
    `
  },{
    name:"shop",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionUpdate[OPTION 3;
      {newEmbed:
        {title:Shop (Packs)}
        {description:
          __Supreme Flex Package__ - $coin **[$numberSeparator[10000000000;,]](https://discord.com)**
        }
        {color:#00FF00}
      };
      {actionRow:
        {selectMenu:shop:S H O P:1:1:no:
          {selectMenuOptions:Mediocore:1:meh, items everyone can afford}
          {selectMenuOptions:Expensive:2:Now these are the real deal}
          {selectMenuOptions:Packs:3:packages to use}
          {selectMenuOptions:Other:4:o t h e r, includes shield/HP}
          {selectMenuOptions:Food:5:Food and It's Utensils}
        }
      }
    ]
    
      $onlyIf[$interactionData[values[0]]==3;]
    `
  },{
    name:"shop",
    type:"interaction",
    prototype:"selectMenu",
    code:`
      $interactionUpdate[OPTION 4;
        {newEmbed:
          {title:Shop (Others)}
          {description:
            __Shield__ - $coin **[$numberSeparator[1000;,]](https://discord.com)**
            __Shield HP__ - $coin **[$numberSeparator[1000;,]](https://discord.com)**
          }
          {color:#FFFFFF}
        };
        {actionRow:
          {selectMenu:shop:S H O P:1:1:no:
            {selectMenuOptions:Mediocore:1:meh, items everyone can afford}
            {selectMenuOptions:Expensive:2:Now these are the real deal}
            {selectMenuOptions:Packs:3:packages to use}
            {selectMenuOptions:Other:4:o t h e r, includes shield/HP}
            {selectMenuOptions:Food:5:Food and It's Utensils}
          }
        }
      ]
    
      $onlyIf[$interactionData[values[0]]==4;]
    `
  },{
    name:"shop",
    type:"interaction",
    prototype:"selectMenu",
    code:`
      $interactionUpdate[OPTION 5;
        {newEmbed:
          {title:Shop (Food)}
          {field:food:
            __Onion__  - $coin **[$numberSeparator[255;,]](https://discord.com)**
            __Apple__  - $coin **[$numberSeparator[150;,]](https://discord.com)**
            __Banana__  - $coin **[$numberSeparator[150;,]](https://discord.com)**
            __Egg__  - $coin **[$numberSeparator[200;,]](https://discord.com)**
            __Milk__  - $coin **[$numberSeparator[69420;,]](https://discord.com)**
            __Wheat__  - $coin **[$numberSeparator[275;,]](https://discord.com)**
          }
          {field:Utensils:
            __Pan__  - $coin **[$numberSeparator[400;,]](https://discord.com)**
            __Pot__  - $coin **[$numberSeparator[400;,]](https://discord.com)**
            __Oven__  - $coin **[$numberSeparator[550;,]](https://discord.com)**
            __Kettle__  - $coin **[$numberSeparator[300;,]](https://discord.com)**
          }
          {color:#FFE5B4}
        };
        {actionRow:
          {selectMenu:shop:S H O P:1:1:no:
            {selectMenuOptions:Mediocore:1:meh, items everyone can afford}
            {selectMenuOptions:Expensive:2:Now these are the real deal}
            {selectMenuOptions:Packs:3:packages to use}
            {selectMenuOptions:Other:4:o t h e r, includes shield/HP}
            {selectMenuOptions:Food:5:Food and It's Utensils}
          }
        }
      ]
    
      $onlyIf[$interactionData[values[0]]==5;]
    `
  },
]