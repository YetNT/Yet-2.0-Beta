// inventory, old-inv, help. faq. error
module.exports = [
{
  name:"inventory",
  aliases:"inv",
  code:`Inventory command has been moved to </inventory:1041779772717551638>, and to see someone else's inventory right click theuser > Apps > User Inventory`
},{
  name:"old-inventory",
  aliases:"old-inv",
  code: `
  $title[1;$username[$mentioned[1;yes]]'s Inventory]
$description[1;

$addField[1;Packs;$if[$getGlobalUserVar[supremeFlexPackage;$mentioned[1;yes]]==0;;
Supreme Flex Pack<:supremeFlexPoster:926393830847168563> - **$numberSeparator[$getGlobalUserVar[supremeFlexPackage;$mentioned[1;yes]];,]**]_ _]


$addField[1;Food;$if[$getGlobalUserVar[onion;$mentioned[1;yes]]==0;;Onion - **$numberSeparator[$getGlobalUserVar[onion;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[apple;$mentioned[1;yes]]==0;;Apple - **$numberSeparator[$getGlobalUserVar[apple;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[banana;$mentioned[1;yes]]==0;;Banana - **$numberSeparator[$getGlobalUserVar[banana;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[egg;$mentioned[1;yes]]==0;;Egg - **$numberSeparator[$getGlobalUserVar[egg;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[milk;$mentioned[1;yes]]==0;;Milk - **$numberSeparator[$getGlobalUserVar[milk;$mentioned[1;yes]];,]**]_ _;true]

$addField[1;Cooking/Baking Utensils;$if[$getGlobalUserVar[pan;$mentioned[1;yes]]==0;;Pan - **$numberSeparator[$getGlobalUserVar[pan;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[pot;$mentioned[1;yes]]==0;;Pot - **$numberSeparator[$getGlobalUserVar[pot;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[oven;$mentioned[1;yes]]==0;;Oven - **$numberSeparator[$getGlobalUserVar[oven;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[kettle;$mentioned[1;yes]]==0;;Kettle - **$numberSeparator[$getGlobalUserVar[kettle;$mentioned[1;yes]];,]**]_ _;true]

$addField[1;Rare;$if[$getGlobalUserVar[floMathTest;$mentioned[1;yes]]==0;;Flo's Math Test<:flo_math_test:922168667955933214> - **$numberSeparator[$getGlobalUserVar[floMathTest;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[yetMouse;$mentioned[1;yes]]==0;;Yet's Mouse<:yets_mouse:922113363083943996> - **$numberSeparator[$getGlobalUserVar[yetMouse;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[supremeFlexPoster;$mentioned[1;yes]]==0;;FS Poster<a:supremeFlexPoster:926388549320847380> - **$numberSeparator[$getGlobalUserVar[supremeFlexPoster;$mentioned[1;yes]];,]**]\n$if[$getGlobalUserVar[none;$mentioned[1;yes]]==0;;
None - **$numberSeparator[$getGlobalUserVar[none;$mentioned[1;yes]];,]**]_ _;yes]

$addField[1;Other Materials;$if[$getGlobalUserVar[Brick;$mentioned[1;yes]]==0;; Bricks:bricks: -  **$numberSeparator[$getGlobalUserVar[Brick;$mentioned[1;yes]];,]**
]_ _;yes]

$addField[1;Items;$if[$getGlobalUserVar[Gem;$mentioned[1;yes]]==0;; Gems<a:shiny:845964737229094912> - **$numberSeparator[$getGlobalUserVar[Gem;$mentioned[1;yes]];,]**]
$if[$getGlobalUserVar[Rock;$mentioned[1;yes]]==0;; Rocks:rock: - **$numberSeparator[$getGlobalUserVar[Rock;$mentioned[1;yes]];,]**]
$if[$getGlobalUserVar[Pick;$mentioned[1;yes]]==0;; Pickaxes - **$numberSeparator[$getGlobalUserVar[Pick;$mentioned[1;yes]];,]**
]_ _;yes]

$addField[1;Badges;$if[$getGlobalUserVar[amogus;$mentioned[1;yes]]<1;;<:Y_amogus:853162810318389259>]$if[$getGlobalUserVar[ownerBadge;$mentioned[1;yes]]<1;;<:BotDevAndOwnerBadge:859693781406580736>]$if[$getGlobalUserVar[snBadge;$mentioned[1;yes]]<1;;<:69:873514184065830942>]$if[$getGlobalUserVar[mod;$mentioned[1;yes]]<1;;<:BotAdminModBadge:859696755272318986>]$if[$getGlobalUserVar[premium;$mentioned[1;yes]]<1;;<:PremiumBadge:867676737994358795>]$if[$getGlobalUserVar[friendBadge;$mentioned[1;yes]]<1;;<:FriendOfDevBadge:864164751319498784>]_ _
]

$addField[1;_ _;
Shield $if[$getGlobalUserVar[shield;$mentioned[1;yes]]!=0;**Active** Shield Hp - **$numberSeparator[$getGlobalUserVar[shieldHP;$mentioned[1;yes]];,]%**
; **Inactive** ]]

]

$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$footer[1;More items coming soon!]
$color[1;$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]]
  `
}, /* New Years Sale Sidenote : 2 Zeros were removed from the expensive shop stuff */{
  name: "help",
  aliases: ["commands","cmds","cmd","command"],
  code:`Help Command has moved to </help:1016009832932835349>!
  This is the beginning of the painful move to slash commands. For now help is one of them`
},{
  name:"faq",
  code:`
$title[1;Frequently Asked Questions]
$description[1;#1 : Why does the bot go offline for a few seconds then back online again?\n#2 \: When is the bot mostly online?\n#3 \: I bought Shield HP, but in my inventory it still shows inactive, Why?\n#4 \: How do i become a bot admin?\n#5 How do I transfer my cash from the BDFD bot to the JS bot? (old to new)\n#6 \: How do i see my cooked food?\n\n**How do i use this?**\n\nClick the button of which FAQ you would like to see]
$addButton[2;#6;2;F6]
$addButton[1;#5;2;F5]
$addButton[1;#4;2;F4]
$addButton[1;#3;2;F3]
$addButton[1;#2;2;F2]
$addButton[1;#1;2;F1]
`},{
name:"errors",
code:`
$title[1;Error Code #1]
$description[1;Error Code 1 is the extremely obvious error of you using a command only for devs]
$title[2;Error Code #2]
$description[2;Error Code 2 is similair to error code 1. In some develpoer commands moderators can use them, but if its error code 2 then it is a true developer command, meaning only I (Yet) can use it]
$title[3;Error Code #3]
$description[3;This error has its own custom error message and is usually from suppressErrors when a part of the bot's code could be leaked.
Somewhere either I(Yet) did something wrong with he code or you wrote the wrong arguments.]
`
}]