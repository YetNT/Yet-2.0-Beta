module.exports = [{
name:"buy pan",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];400]];$authorID]
$setGlobalUserVar[pan;$sum[$getGlobalUserVar[pan;$authorID];$message[1]];$authorID]
$title[1;Successful pan Purchase]
$description[1;You have bought \`$message[1] pan\` for  $coin**[$multi[$message[1];400]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];400];You dont got enough coinz. _you need **$multi[$message[1];400]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`},{
name:"buy pot",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];400]];$authorID]
$setGlobalUserVar[pot;$sum[$getGlobalUserVar[pot;$authorID];$message[1]];$authorID]
$title[1;Successful pot Purchase]
$description[1;You have bought \`$message[1] pot\` for  $coin**[$multi[$message[1];400]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];400];You dont got enough coinz. _you need **$multi[$message[1];400]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`},{
name:"buy oven",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];550]];$authorID]
$setGlobalUserVar[oven;$sum[$getGlobalUserVar[oven;$authorID];$message[1]];$authorID]
$title[1;Successful oven Purchase]
$description[1;You have bought \`$message[1] oven\` for  $coin**[$multi[$message[1];550]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];550];You dont got enough coinz. _you need **$multi[$message[1];550]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`},{
name:"buy kettle",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];300]];$authorID]
$setGlobalUserVar[kettle;$sum[$getGlobalUserVar[kettle;$authorID];$message[1]];$authorID]
$title[1;Successful kettle Purchase]
$description[1;You have bought \`$message[1] kettle\` for  $coin**[$multi[$message[1];300]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];300];You dont got enough coinz. _you need **$multi[$message[1];300]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`}]