/*
rock, pickaxe, gem, brick, shield, shieldHP, mouse, flomath, flex
*/
/*
Line 131:
*/
module.exports = [{
  name:"buy rock",
  aliases:['buy Rock','buy rock'],
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];100]];$authorID]
$setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];$message[1]];$authorID]
$title[1;Successful Rock Purchase]
$description[1;You have bought \`$message[1] Rocks\` for  $coin**[$multi[$message[1];100]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];100];You dont got enough coinz. _you need **$multi[$message[1];100]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
},{
  name:"buy pickaxe",
  aliases:['buy pick','buy Pick',"buy mine","buy Mine"],
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];1500]];$authorID]
$setGlobalUserVar[Pick;$sum[$getGlobalUserVar[Pick;$authorID];$message[1]];$authorID]
$title[1;Successful Pickaxe Purchase]
$description[1;You have bought $message[1] \`Pickaxe\` for  $coin**[$numberSeparator[$multi[$message[1];1500];,]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[Pick;$authorID]<=1;You seem to already have a pickaxe, no stacking lol]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];1500];You dont got enough coinz. _you need **$multi[$message[1];1500]**_]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
},{
  name:"buy gem",
  aliases:['buy Gem','buy dia','buy Dia','buy diamond','buy Diamond'],
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];10000]];$authorID]
$setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$message[1]];$authorID]
$title[1;Successful Gem Purchase]
$description[1;You have bought \`$message[1] Gems\` for $coin**[$numberSeparator[$multi[$message[1];10000];,]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];10000];You dont got enough coinz. _you need **$multi[$message[1];10000]**_]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
},{
  name:"buy brick",
  aliases:['buy Brick','buy bri','buy Bri'],
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];50]];$authorID]
$setGlobalUserVar[Brick;$sum[$getGlobalUserVar[Brick;$authorID];$message[1]];$authorID]
$title[1;Successful Brick Purchase]
$description[1;You bought \`$message[1] Bricks\` for  $coin**[$numberSeparator[$multi[$message[1];50];,]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];50];You dont got enough coinz. _you need **$multi[$message[1];50]**_]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
},{
  name:"buy shield",
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];1000]];$authorID]
$setGlobalUserVar[shield;$sum[$getGlobalUserVar[shield;$authorID];$message[1]];$authorID]
$title[1;Successful Shield Purchase]
$description[1;You have bought \`$message[1] Shield\` for  $coin**[$numberSeparator[$multi[$message[1];1000];,]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];1000];You don't got enough coinz __you need **$multi[$message[1];1000]**__]
$onlyIf[$getGlobalUserVar[shield;$authorID]==0;Youve already got a shield ]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
}, {
  name:"buy shieldHP",
  aliases:['buy shieldhp'],
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];1000]];$authorID]
$setGlobalUserVar[shieldHP;$sum[$getGlobalUserVar[shieldHP;$authorID];50];$authorID]
$title[1;Successful ShieldHP Purchase]
$description[1;You have bought \`$message[1]% worth of ShieldHP\` for  $coin**[$numberSeparator[$multi[$message[1];1000];,]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];1000];You don't got enough coinz __you need **$multi[$message[1];1000]**__]
$onlyIf[$getGlobalUserVar[shield;$authorID]>=1;You do not have a shield!]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
},{
  name:"buy mouse",
  aliases:['buy Mouse','buy yetsmouse'],
  code:`
 $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];25000000]];$authorID]
$setGlobalUserVar[yetMouse;$sum[$getGlobalUserVar[yetMouse;$authorID];$message[1]];$authorID]
$title[1;Successful Mouse Purchase?]
$description[1;You have bought \`$message[1] Yet's Mouse\` for  $coin**[$numberSeparator[$multi[$message[1];25000000];,]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];25000000];You don't have enough coinz to afford this!]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]

  `
},{
  name:"buy flomath",
  aliases:["buy floMathTest","buy math","buy test","buy Math","buy FloMathTest","buy Test"],
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];14000000]];$authorID]
$setGlobalUserVar[floMathTest;$sum[$getGlobalUserVar[floMathTest;$authorID];$message[1]];$authorID]
$title[1;Successful Math Test Purchase?]
$description[1;You have bought \`$message[1] Flo Math Test\` for  $coin**[$numberSeparator[$multi[$message[1];14000000];,]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];14000000];You don't have enough coinz to afford this!]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
},
/* {
  name:"buy flex",
  aliases:["buy supremeflexpackage","buy supremeFlexPackage","buy supreme flex package","buy Supreme Flex Package","buy flex","buy supreme","buy sfp","buy SFP"],
  code:`
  $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];10000000000]];$authorID]

$setGlobalUserVar[supremeFlexPackage;$sum[$getGlobalUserVar[supremeFlexPackage;$authorID];$message[1]];$authorID]

$title[1;Successful Package Purchase]
$description[1;You have bought \`$message[1] Supreme Flex Package\` for  $coin**[$numberSeparator[$multi[$message[1];10000000000];,]](https://discord.com)** (To use it type \`y!use sfp\`)]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];10000000000];You don't have enough coinz to afford this!]
$color[1;00FF00]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
}
, */ ]