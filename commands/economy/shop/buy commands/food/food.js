
module.exports = [{
  name:"buy onion",
  code:`
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];255]];$authorID]
$setGlobalUserVar[onion;$sum[$getGlobalUserVar[onion;$authorID];$message[1]];$authorID]
$title[1;Successful onion Purchase]
$description[1;You have bought \`$message[1] onion\` for  $coin**[$multi[$message[1];255]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];255];You dont got enough coinz. _you need **$multi[$message[1];255]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`
},{ // error diagnosis
name:"buy apple",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];150]];$authorID]
$setGlobalUserVar[apple;$sum[$getGlobalUserVar[apple;$authorID];$message[1]];$authorID]
$title[1;Successful apple Purchase]
$description[1;You have bought \`$message[1] apple\` for  $coin**[$multi[$message[1];150]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];150];You dont got enough coinz. _you need **$multi[$message[1];150]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`},{
name:"buy banana",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];150]];$authorID]
$setGlobalUserVar[banana;$sum[$getGlobalUserVar[banana;$authorID];$message[1]];$authorID]
$title[1;Successful banana Purchase]
$description[1;You have bought \`$message[1] banana\` for  $coin**[$multi[$message[1];150]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];150];You dont got enough coinz. _you need **$multi[$message[1];150]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`},{
name:"buy egg",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];200]];$authorID]
$setGlobalUserVar[egg;$sum[$getGlobalUserVar[egg;$authorID];$message[1]];$authorID]
$title[1;Successful egg Purchase]
$description[1;You have bought \`$message[1] egg\` for  $coin**[$multi[$message[1];200]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];200];You dont got enough coinz. _you need **$multi[$message[1];200]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`},{
name:"buy milk",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];69420]];$authorID]
$setGlobalUserVar[milk;$sum[$getGlobalUserVar[milk;$authorID];$message[1]];$authorID]
$title[1;Successful milk Purchase]
$description[1;You have bought \`$message[1] milk\` for  $coin**[$multi[$message[1];69420]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];69420];You dont got enough coinz. _you need **$multi[$message[1];69420]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`},{
name:"buy wheat",
code:`$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$multi[$message[1];275]];$authorID]
$setGlobalUserVar[wheat;$sum[$getGlobalUserVar[wheat;$authorID];$message[1]];$authorID]
$title[1;Successful wheat Purchase]
$description[1;You have bought \`$message[1] wheat\` for  $coin**[$multi[$message[1];275]](https://discord.com)**]
$onlyIf[$getGlobalUserVar[money;$authorID]>=$multi[$message[1];275];You dont got enough coinz. _you need **$multi[$message[1];275]**_]
$onlyIf[$message[1]!=;:x: How many are you going to buy. idiot.]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
`}]