module.exports = [
/* {
  name:"embed",
  aliases:"em",
  code:`
  $if[$splitText[5]== yes]$author[$splitText[6];$splitText[7]] $deleteCommand $else $deleteCommand $endif
  $title[$splitText[1]]
  $description[$splitText[2]]
  $footer[$splitText[3]]
  $color[$splitText[4]]
  $textSplit[$message;:]
  $suppressErrors[oop, an error occured. ($error)]
  $onlyIf[$checkContains[$message;,]==true;:x: Split the arguments with a comma!
  (y!em title, description, footer, embed color, auhtor? (yes or no), auhtor text, author icon)]
  `
} 
, */ {
 name:"math",
 $if:"v4",
 aliases:["calc","calculate"],
 code:`
$if[$checkContains[$message;^]==true]
 Equation : \`$message\`
 Answer : \`$math[$replaceText[$message;^;**;200]]\`
$elseIf[$checkContains[$message;**]==true]
 Equation : \`$message\`
 Answer : \`$math[$replaceText[$message;**;^;200]]\`
$endelseIf
$else
 Equation : \`$message\`
 Answer : \`$math[$message]\`
$endif

$onlyIf[$checkContains[$message;/0;/ 0;÷0;÷ 0]!=true;Equation : \`$message\`\nAnswer : **\`undefined\`**\n\|\|Explanation : The answer is undefined, as you are **dividing by zero**, which has the value of nothing, thus making the entire equation, undefined. \|\|]
$suppressErrors[:x: Oop, something happened. Either what you entered is not a math expression OR on of the numbers, isnt a number OR it is an unsupported math expression. \`Error Code : 3\`]
$argsCheck[>0;:x: cant calculate nothing my guy]
`
},{
  name:"updates",
  $if:"v4",
  code:`
$if[$checkContains[$message;-raw;-RAW;-Raw]==true]
 $title[1;Updates RAW]
 $description[1;$getObjectProperty[Lat] $createObject[$readFile[./update/updatesRAW.json]]]
 $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]
$else
 $title[1;Updates]
 $description[1;$getObjectProperty[Lat] $createObject[$readFile[./update/updates.json]]]
 $footer[1;Mod Args : \`-raw\` \`-announce\`]
$elseIf[$checkContains[$message;-announce;-Announce;-ANNOUNCE]==true]
 @everyone
 $deletecommand
 $title[1;Updates]
 $description[1;$getObjectProperty[Lat] $createObject[$readFile[./update/updates.json]]]
 $onlyIf[$getGlobalUserVar[mod;$authorID]==1;:x: Developer Command! \`Error Code 1\`]
 $cooldown[10s;:x: 10 Minute cooldown if you made a mistake :wink:]
$endelseIf
$endif
`
},{
  name:"command",
}]