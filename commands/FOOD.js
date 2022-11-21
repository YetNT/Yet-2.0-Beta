module.exports = [{
  name:"recipe",
  code:`
$title[1;Recipes]
$description[1;
A. **Boiled Egg** :moyai:
 Needed items - Egg, Pot.

]
`
},{
 name:"cook",
 aliases:"make",
 $if:"v4",
 code:`
 $if[$checkContains[$message[1];boiled-egg;Boiled Egg]==true]
 $setGlobalUserVar[boiledEgg;$sum[$getGlobalUserVar[boiledEgg];1];$authorID]
 $setGlobalUserVar[egg;$sum[$getGlobalUserVar[egg];1];$authorID]
 $sendDM[{newEmbed:{title:Ready!}{description:Your boiled egg is ready! and in your inventory!}}]
 $wait[15s]
 $sendMessage[Boiling your egg... this may take a while.\nYou will receive a dm once finished]
 $onlyIf[$getGlobalUserVar[egg;$authorID]>=1;You dont have even **1 egg** :/. lmao]
 $onlyIf[$getGlobalUserVar[pot;$authorID]>=1;You dont own a **pot**]
 $endif
`
}]