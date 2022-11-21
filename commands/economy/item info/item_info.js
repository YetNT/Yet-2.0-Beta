module.exports = [{
  name:"item",
  code:`
  $title[1;Item]
  $description[1;
    Item. Mention something tho. Cant give ya air
  ]
  `
},{
  name:"item rock",
  aliases:['item Rock'],
  code:`
  $title[1;Rock]
  $addField[1;IDs;\`rock\`,\`Rock\`]
  $addField[1;Price;Buy - $coin**[100](https://discord.com)**]
  $addField[1;Uses;**Currently No Uses**]
  $addField[1;Info;
  Its a rock. You get it from mining and soon other stuff]
  $footer[1;Type - NULL]
  `
},{
  name:"item pickaxe",
  aliases:['item Pickaxe','item pick','item Pick','item mine','item Mine'],
  code:`
  $title[1;Pickaxe]
  $addField[1;IDs;\`Pickaxe\`,\`pickaxe\`,\`pick\`,\`Pick\`,\`Mine\`,\`mine\`]
  $addField[1;Price;Buy - $coin**[$numberSeparator[1500;,]](https://discord.com)**]
  $addField[1;Uses;**Used for the command \`y!mine\`**]
  $addField[1;Info;
  A pickaxe used for mining. (Also not a minecraft refrence)]
  $footer[1;Type - USEABLE | Rarity - UNCOMMON]
  `
},{
  name:"item gem",
  aliases:['item Gem','item dia','item Dia','item diamond','item Diamond'],
  code:`
  $title[1;Gem]
  $addField[1;IDs;\`gem\`,\`Gem\`,\`dia\`,\`Dia\`,\`diamond\`,\`Diamond\`]
  $addField[1;Price;Buy - $coin**[$numberSeparator[10000;,]](https://discord.com)**]
  $addField[1;Uses;**Currently No Uses**]
  $addField[1;Info;
  oooo, a shiny gem!]
  $footer[1;Type - NULL | Rarity - UNCOMMON]
  `
},{
  name:"item brick",
  aliases:['item Brick','item bri','item Bri'],
  code:`
  $title[1;Brick]
  $addField[1;IDs;\`brick\`,\`Brick\`,\`bri\`,\`Bri\`]
  $addField[1;Price;Buy - $coin**[$numberSeparator[100;,]](https://discord.com)**]
  $addField[1;Uses;**50 of these is used in the command \`y!build\`**]
  $addField[1;Info;
  Its a brick. Yknow that thing found in some houses and walls. That brown thing with the epic texture.]
  $footer[1;Type - USEABLE | Rarity - COMMON]
  `
},{
  name:"item shield",
  aliases:['item shieldHP','item shieldhp'],
  code:`
  $title[1;Shield]
  
  $addField[1;IDs;\`shield\`]
  $addField[1;Price;Buy - $coin**[$numberSeparator[10000;,]](https://discord.com)**]
  $addField[1;Uses;**1/2% it will stop any robbers from robbing you.**]
  $addField[1;Info;
  Ah yes a shield. This is a little OP honestly but its fine, right?]
  $footer[1;Type - USEABLE | Rarity - UNCOMMON]

  $title[2;Shield HP]
  $addField[2;IDs;\`shieldhp\`,\`shieldHP\`]
  $addField[2;Price;Buy - $coin**[$numberSeparator[10000;,]](https://discord.com)**]
  $addField[2;Uses;**In order for your shield to be active you need at least 50 sheild HP**]
  $addField[2;Info;
  Hp for the shield, duh]
  $footer[2;Type - USEABLE | Rarity - UNCOMMON]
  `
},{
  name:"item mouse",
  aliases:"item Mouse",
  code:`
  $title[1;Yet's Mouse]
  $addField[1;IDs;\`mouse\`,\`Mouse\`]
  $addField[1;Price;Buy - $coin**[$numberSeparator[25000000;,]](https://discord.com)**]
  $addField[1;Uses;**Flex on people that your rich enough to afford this**]
  $addField[1;Info;
  As im typing this in the command handler, i just noticed... my mouse is missing? hmm weird]
  $footer[1;Type - FLEX | Rarity - EPIC]
  `
},{
  name:"item math",
  aliases:"item floMathTest",
  code:`
  $title[1;Flo's Math Test]
  $addField[1;IDs;\`math\`,\`floMathTest\`]
  $addField[1;Price;Buy - $coin**[$numberSeparator[14000000;,]](https://discord.com)**]
  $addField[1;Uses;**Flex on people that your rich enough to afford this**]
  $addField[1;Info;
  Flo studied hard for this math test. And ended up getting 69% sadge but pog]
  $footer[1;Type - FLEX | Rarity - EPIC]
  `
},{
  name:"item poster",
  aliases:["item flexPoster","item fsp","item FSP"],
  code:`
  $title[1;Flex Supreme Poster]
  $addField[1;IDs;\`poster\`,\`flexPoster\`]
  $addField[1;Price;Buy - NULL]
  $addField[1;Uses;**Flex on people that your rich enough to afford this.**]
  $addField[1;Info; This determines that your so rich you waste your money on a poster that lights yellow. This poster can onloy be obtained via the supreme flex package. ]
  $footer[1;Type - FLEX | Rarity - EXTREME]
  `
},{
  name:"item none",
  code:`
  $title[1;None Item]
  $addField[1;IDs;\`none\`,\`None\`]
  $addField[1;Price;Buy - NULL]
  $addField[1;Uses;**Its nothing? what are you supposed to do with it?**]
  $addField[1;Info; This item is one of the most worthless and expensive items. Its litterly nothing. This is SO rare you cannot buy it, you can only get it from special giveaways and events]
  $footer[1;Type - FLEX | Rarity - LEGENDARY]
  `
},{
  name:"item onion",
  code:`
  $title[1;onion]
  $addField[1;IDs;\`onion\`]
  $addField[1;Price;Buy - $coin**255**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;this can make you cry more than when your father left for mil-]
  $footer[1;Type - FOOD | Rarity - UNCOMMON]
  `
},{
  name:"item apple",
  code:`
  $title[1;apple]
  $addField[1;IDs;\`apple\`]
  $addField[1;Price;Buy - $coin**150**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;An apple a day keeps the  pneumonoultramicroscopicsilicovolcanoconiosis doctor away]
  $footer[1;Type - FOOD | Rarity - UNCOMMON]
  `
},{
  name:"item banana",
  code:`
  $title[1;banana]
  $addField[1;IDs;\`banana\`]
  $addField[1;Price;Buy - $coin**150**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;Fun fact : I cant type the word bannanana without asking someone or googling it.]
  $footer[1;Type - FOOD | Rarity - UNCOMMON]
  `
},{
  name:"item egg",
  code:`
  $title[1;egg]
  $addField[1;IDs;\`egg\`]
  $addField[1;Price;Buy - $coin**200**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;e g g]
  $footer[1;Type - FOOD | Rarity - UNCOMMON]
  `
},{
  name:"item milk",
  code:`
  $title[1;milk]
  $addField[1;IDs;\`milk\`]
  $addField[1;Price;Buy - $coin**69420**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;Since he isn't coming back anytime soon, might as well buy it yourself.]
  $footer[1;Type - FOOD | Rarity - UNCOMMON]
  `
},{
  name:"item wheat",
  code:`
  $title[1;wheat]
  $addField[1;IDs;\`wheat\`]
  $addField[1;Price;Buy - $coin**275**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;mc refrence. but bread refrence too :bread:]
  $footer[1;Type - FOOD | Rarity - UNCOMMON]
  `
},{
  name:"item pan",
  code:`
  $title[1;pan]
  $addField[1;IDs;\`pan\`]
  $addField[1;Price;Buy - $coin**400**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;pan i put my balls in yo jaws?]
  $footer[1;Type - FOOD UNTENSIL | Rarity - UNCOMMON]
  `
},{
  name:"item pot",
  code:`
  $title[1;pot]
  $addField[1;IDs;\`pot\`]
  $addField[1;Price;Buy - $coin**400**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;imagine still using a pot in 2022, couldn't be me]
  $footer[1;Type - FOOD UNTENSIL | Rarity - UNCOMMON]
  `
},{
  name:"item oven",
  code:`
  $title[1;oven]
  $addField[1;IDs;\`oven\`]
  $addField[1;Price;Buy - $coin**550**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;ok look, the oven is a bit pricy cuz its a big thing]
  $footer[1;Type - FOOD UNTENSIL | Rarity - UNCOMMON]
  `
},{
  name:"item kettle",
  code:`
  $title[1;kettle]
  $addField[1;IDs;\`kettle\`]
  $addField[1;Price;Buy - $coin**300**]
  $addField[1;Uses;**FOOD - eat, FOOD UTENSIL - make**]
  $addField[1;Info;boil boil]
  $footer[1;Type - FOOD UNTENSIL | Rarity - UNCOMMON]
  `
}]