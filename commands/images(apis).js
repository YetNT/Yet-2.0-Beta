module.exports = [
/* {
  name: "avatar",
  aliases: "av",
  code: `
  $title[1;:camera_with_flash: | $username[$mentioned[1;yes]]'s Avatar!]

$image[1;$userAvatar[$mentioned[1;yes]]?size=2048]

$cooldown[5s;Hey google, wait %time%]

$color[1;$random[111111;999999]]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
$globalCooldown[5s;Chill bro, Try again after **%time%**]`
}, {
  name: "slap",
  code: `
  $description[1;:hand_splayed:  **<@$mentioned[1]>** has been slapped by **$username** :hand_splayed: ]
$image[1;$randomText[https://media.giphy.com/media/xT9KVHbPCs9LJHoepG/giphy.gif;https://media.giphy.com/media/l2YOqzhYD066fAd56/giphy.gif;https://media.giphy.com/media/xUPGcF8xjWmt2CRuo0/giphy.gif;https://media3.giphy.com/media/PgqHnJPeZHxv2/giphy.gif;https://media3.giphy.com/media/Hj9ixvpSfqcQo/giphy.gif]]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  $globalCooldown[5s;Chill bro, Try again after **%time%**]`
}, {
  name: "hug",
  code: `
$color[1;FF0000]
$description[1;**<@$authorID>** hugs **<@$mentioned[1]>** ]
$image[1;$randomText[https://cdn.weeb.sh/images/Sk-xxs3C-.gif;https://cdn.weeb.sh/images/ryjJFdmvb.gif;https://cdn.weeb.sh/images/HJ7lY_QwW.gif;https://cdn.weeb.sh/images/rkx1dJ25z.gif;https://cdn.weeb.sh/images/rJ_slRYFZ.gif;https://cdn.weeb.sh/images/rkIK_u7Pb.gif;https://cdn.weeb.sh/images/r1kC_dQPW.gif;https://cdn.weeb.sh/images/Hyec_OmDW.gif;https://cdn.weeb.sh/images/HytoudXwW.gif;https://cdn.weeb.sh/images/Hk0yFumwW.gif]]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:You depressinly hugged yourself. How sad.}}]
$argsCheck[1;This command onkly takes one argument]
$globalCooldown[5s;Chill bro, Try again after **%time%**]
  `
}, {
  name: "kiss",
  code: `
$description[1;<@$authorID> kissed <@$mentioned[1]>]
$image[1;$randomText[http://giphygifs.s3.amazonaws.com/media/bm2O3nXTcKJeU/giphy.gif;https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif;http://giphygifs.s3.amazonaws.com/media/G3va31oEEnIkM/giphy.gif;http://giphygifs.s3.amazonaws.com/media/Gj8bn4pgTocog/giphy.gif;http://giphygifs.s3.amazonaws.com/media/KmeIYo9IGBoGY/giphy.gif]]
$color[1;#ff0000]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:You kissed yourself on the mirror. Which reminded you of how much you value yourself. nice, i guess}}]
$argsCheck[1;This command takes only 1 argument.]
$onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**
$globalCooldown[5s;Chill bro, Try again after **%time%**]
  `
}, 
*/
{
  name:"rip",
  aliases: ["stone","dead"],
  code: `
  $image[1;https://frenchnoodles.xyz/api/endpoints/rip?image=$userAvatar[$mentioned[1;yes]]]
  $footer[1;If you cannot see your image, then the API is down. API = https://frenchnoodles.xyz]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**
$globalCooldown[5s;Chill bro, Try again after **%time%**]
  `
}, {
  name:"invert",
  aliases:"inve",
  code:`
  $image[1;https://frenchnoodles.xyz/api/endpoints/invert?image=$userAvatar[$mentioned[1;yes]]]
$footer[1;If you cannot see your image, then the API is down. API = https://frenchnoodles.xyz]

  $onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**
$globalCooldown[5s;Chill bro, Try again after **%time%**]
  `
}, {
  name: "eject",
  aliases: "isimp",
  code:`
  $image[1;https://vacefron.nl/api/ejected?name=$username[$mentioned[1;yes]]&impostor=$randomText[false;false;false;false;true;true]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
  $footer[1;API = https://vacefron.nl]
  
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**
$globalCooldown[5s;Chill bro, Try again after **%time%**]`
}, /* {
  name: "icanmilkyou",
  aliases: ["icanmilk","icm"],
  code: `
  $image[1;https://vacefron.nl/api/icanmilkyou?user1=$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1;yes]]]
  $footer[1;API = https://vacefron.nl]
  
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**
$globalCooldown[5s;Chill bro, Try again after **%time%**]
  `
},*/ {
  name:"drip",
  code:`
$title[1;Drip]
$image[1;https://vacefron.nl/api/drip?user=$userAvatar[$mentioned[1;yes]]]
$footer[1;API = https://vacefron.nl]
  `
}]