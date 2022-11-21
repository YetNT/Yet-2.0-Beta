module.exports = [{
  name:"use supremeFlexPackage",
  aliases:["use supremeFlex","use sfp","use SFP"],
  code:`
  $setGlobalUserVar[supremeFlexPackage;$sub[$getGlobalUserVar[supremeFlexPackage;$authorID];1];$authorID]
  $setGlobalUserVar[floMathTest;$sum[$getGlobalUserVar[floMathTest;$authorID];$random[1;5]];$authorID]
  $setGlobalUserVar[supremeFlexPoster;$sum[$getGlobalUserVar[supremeFlexPoster;$authorID];1];$authorID]
  $setGlobalUserVar[yetMouse;$sum[$getGlobalUserVar[yetMouse;$authorID];$random[1;5]];$authorID]
  $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[1;100000]];$authorID]

  $editIn[6s;{newEmbed:{title:}{description:
  **You Got -**
  > 1 FS Poster (Flex Supreme)
  > $random[1;5] Flo's Math Test
  > $random[1;5] Yet's Mouse
  > $random[1;100000] Gems
  }{color:#FFF000}}]

  $title[1;Opening Supreme Flex Pack...]
  $description[1;This should be good, hopefully]

  $onlyIf[$getGlobalUserVar[supremeFlexPackage;$authorID]>0;:x: You do not own this package!]
  
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
}]