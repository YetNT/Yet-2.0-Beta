/*
bsuggest, bbug
*/
module.exports = [{
  name:"bsuggest",
  code: `
  $useChannel[808703273062236190]
$author[1;$username[$authorID];$authorAvatar]
$title[1;New bot suggestion]
$color[1;ff9169]
$footer[1;✅ - You like it ¦ ❌ - You don't like it ¦ ☑️ - Already added/Going to be added]
$addReactions[✅;❌]
$description[1;$message]
$channelSendMessage[$channelID;{newEmbed:{description:Suggestion has been sent, I suggest you join [this server](https://discord.gg/6mnwXeC2QR) to see your suggestion}}]
$globalCooldown[30m;Wait **%time%** before posting suggestion]
$argsCheck[>1;Add a message!]
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
}, {
  name:"bbug",
  code:`
  $useChannel[857160610122432542]
  $footer[1;$authorID]
  $color[1;FF00FF]
  $title[1;$username[$authorID]'s Bug Report]
  $description[1;
    $message
  ]
  $channelSendMessage[$channelID;Bug Report has been sent! Hopefully Yet has the time to view it.]
  $globalCooldown[30m;Wait **%time%** before posting another bug]
  $argsCheck[>1;Theres a bug where a user doesnt add a message. Crazy right?]`
}]