module.exports = [{
  name:"shop",
  code:`
      Select an option.
    

$addSelectMenu[1;shop;S H O P;1;1;no;Mediocore:meh, items everyone can afford:1:no;Expensive:Now these are the real deal:2:no;Packs:packages to use:3:no;Other:o t h e r, includes shield/HP:4:no;Food:Food and It's Utensils:5:no]
  `
},{
  name: "shopold",
  code: `
  $title[1;Shop (Mediocre)]
  $description[1;
    __Pickaxe__ - $coin**[$numberSeparator[1500;,]](https://discord.com)**
    __Rock__ - $coin**[100](https://discord.com)**
    __Gem__ - $coin**[$numberSeparator[10000;,]](https://discord.com)**
    __Bricks__ - $coin**[$numberSeparator[50;,]](https://discord.com)**
  ]
  $footer[1;Items cannot be bought at a specific amount.]
  $color[1;FFF000]

$title[2;Shop (Expensive)]
  $description[2;
    __Flo's Math Test__ - $coin**[$numberSeparator[14000000;,]](https://discord.com)**
    __Yet's Mouse__  - $coin**[$numberSeparator[25000000;,]](https://discord.com)**
  ]
  $footer[2;Items cannot be bought at a specific amount.]
  $color[2;FFD700]

$title[3;Shop (Packs)]
$description[3;
__Supreme Flex Package__ - $coin**[$numberSeparator[10000000000;,]](https://discord.com)**
]
$color[3;FFF000]

$title[4;Shop (Others)]
  $description[4;
    __Shield__ - $coin**[$numberSeparator[1000;,]](https://discord.com)**
    __Shield HP__ - $coin**[$numberSeparator[1000;,]](https://discord.com)**
  ]
  $footer[1;Items cannot be bought at a specific amount.]
  $color[1;FFF000]

$title[5;Shop (All Food)]
 $description[5;
 __Onion__  - $coin**[$numberSeparator[255;,]](https://discord.com)**
__Apple__  - $coin**[$numberSeparator[150;,]](https://discord.com)**
__Banana__  - $coin**[$numberSeparator[150;,]](https://discord.com)**
__Egg__  - $coin**[$numberSeparator[200;,]](https://discord.com)**
__Milk__  - $coin**[$numberSeparator[69420;,]](https://discord.com)**
__Wheat__  - $coin**[$numberSeparator[275;,]](https://discord.com)**
__Pan__  - $coin**[$numberSeparator[400;,]](https://discord.com)**
__Pot__  - $coin**[$numberSeparator[400;,]](https://discord.com)**
__Oven__  - $coin**[$numberSeparator[550;,]](https://discord.com)**
__Kettle__  - $coin**[$numberSeparator[300;,]](https://discord.com)**
 ]
$color[4;FFF000]
$color[5;FFF000]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]`
}]