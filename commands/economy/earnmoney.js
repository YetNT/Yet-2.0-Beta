/*
work,mine,search,build,daily,hourly,monthly,69m,gamble/gamble max/gamble all,crime,rob
*/
module.exports = [{
  name: "work",
  aliases: "job",
  description:`work a day job for your paycheck of $coin100 to $coin500! \`30 Minute Cooldown\``,
  code: `
    $if[$randomText[work;workf]==work;

      $author[1;Nice Work;$authorAvatar]
      $description[1;<@$authorID> works as a **$randomText[Tailor;Farmer;Gamer;Youtuber;Twitch Streamer;Discord Mod;Teacher;Chef;Servant;Pilot;Police;Miner;Construction Worker]** and earn  <:coinz:887529170316460043>**$random[100;500]**.]
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[100;500]];$authorID]
      $color[1;00FF00]

    ;

      $author[1;Terrible Effort;$authorAvatar]
      $description[1;While <@$authorID> was working as a **$randomText[Tailor;Farmer;Gamer;Youtuber;Twitch Streamer;Discord Mod;Teacher;Chef;Pilot;Servant;Police;Miner;Construction Worker]** $randomText[you had a quarrel with your friend which got you late to work;you had a fight with your boss;you were replaced by another guy, you got so poor u died lmao], you instead got payed <:coinz:887529170316460043>**$random[5;50]**.]
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[5;50]];$authorID]
      $color[1;1;FF0000]

    ]
    $if[$getGlobalUserVar[supremeFlexPoster;$authorID]>=1;
      $setGlobalUserVar[supremeFlexPoster;$sum[$getGlobalUserVar[supremeFlexPoster;$authorID];$random[200;600]];$authorID]
      $addField[1;FS Poster Bonus;+<:coinz:887529170316460043>**$random[200;600]**]
      ;]

    $globalCooldown[30m;Wait **%time%** you unpatient kid]

    $onlyIf[$getGlobalUserVar[blacklist;$authorID]!=1;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]`
},{
  name:"mine",
  description:"Mine up some minerals for some cash! `5 Minute Cooldown`",
  code:`
  $username <a:mining:803622366365220884> $randomText[up;up some] **$randomText[Coal;Diamonds;Granite;Iron;Gold;Rockz;Diorite;Andesite;Copper;Ancient Debris]** and sold it for   $coin**$random[500;1000]** You also got an additional $random[50;100] rocks.
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[500;1000]];$authorID]
$setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];$random[50;100]];$authorID]
$globalCooldown[5m;Your Cooldown for mining is **%time%**. _Default cooldown is **5 minutes**_]
$onlyIf[$getGlobalUserVar[Pick;$authorID]>0;You need a **Pickaxe** to mine. Your hands are way to soft to mine.]


$onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
  `
}, {
  name:"search",
  description:"Search for Gems in the world around you `1 Minute Cooldown`",
  code: `
  $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
$username Searched round **$randomText[Y level 5;In there friends base;the sky;the Couch;his pocket?!?!;THE AIR?!?!;there house;There Minecraft Worlds;there YouTube Reccomended;Their PC;The Shower;GTA V;Their School;there sh*t;In the Pool;Their Graphics Card]** and found **$random[1;100] Gems** $randomText[Noice;Cool?;Pretty cool;Nice bro!;How tf;GG]
$globalCooldown[1m;Your Cooldown for searching is **%time%**. _Default cooldown is **1 minute**_]
  
  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]`
}, {
  name:"build",
  description:"Build structures for some more cash! `5 Minute Cooldown`. `50% chance of failure`",
  code: `
    $if[$randomText[dworked;worked;]==worked;
      $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[100;1000]];$authorID]
      $setGlobalUserVar[Brick;$sub[$getGlobalUserVar[Brick;$authorID];50];$authorID]
      $username built a **$randomText[Mansion;Shack;House;Pool;Apartment;a fricking window;Garden;Garage;Extra room for his/her mom]** worth  $coin**$random[100;1000]**
      
    ;

      $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$random[10;10000]];$authorID]
      $setGlobalUserVar[Brick;$sub[$getGlobalUserVar[Brick;$authorID];50];$authorID]
      $username $randomText[tripped on a brick and fell into a man hole;got injured from a falling brick;was run over by a tracter lmao;got buried in cement] they endedup paying $coin**$random[10;10000]** worth of hospital fees.

    ]
    $globalCooldown[5m;Stop building for **%time%**]
    $onlyIf[$getGlobalUserVar[Brick;$authorID]>49;Hey Bob The Builder Get some more bricks. u need 50 and u only have $getGlobalUserVar[Brick;$authorID]]



  $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]`
},{
  name: "daily",
  description:"Claim your daily rewards!",
  code: `Daily Command has moved to </claim daily:1041010256005840968>!`
},{
  name: "hourly",
  description:"Claim your hourly rewards!",
  code: `hourly Command has moved to </claim hourly:1041010256005840968>!`
}, {
  name: "monthly",
  description:"Claim your monthly rewards!",
  code: `Monthly Command has moved to </claim monthly:1041010256005840968>!`
}, {
  name: "69minutely",
  description:"Claim your 69minutely rewards!",
  aliases:["69min","69minutly","69m"],
  code: `69minutely Command has moved to </claim 69minutely:1041010256005840968>!`
},{
    name:"gamble all",
    description:"Gamble your coins with a `50%` chance of loosing or doubling your earnings!",
    aliases:["gamble max","bet all","bet max"],
    code:
    `
      $if[$randomText[gab;ged]==ged;

        $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[money;$authorID]];$authorID]
        $title[1;You did some illegal gambling]
        $description[1;
          You : **$random[7;11]**<a:chugMyJugNoob:821350583227121696> | Your dealer : **$random[1;6]**
          This made you $coin**$getGlobalUserVar[money;$authorID]** richer!!
        ]
        $color[1;00FF00]

      ;

        $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$getGlobalUserVar[money;$authorID]];$authorID]
        $title[1;You did some illegal gambling]
        $description[1;
          You : **$random[1;6]** | Your dealer : **$random[7;11]**<a:chugMyJugNoob:821350583227121696>
          You lost **all your coinz**!! next time, just try working for it.
        ]
        $color[1;FF0000]

      ]
      $onlyIf[$getGlobalUserVar[money;$authorID]<=999998;You cant gamble an amount more than $coin**1000000**]
      $onlyIf[$getGlobalUserVar[money;$authorID]>=99;You cannot gamble an amount less than $coin**100**]
      $globalCooldown[10m;Chill out, for about **%time%**, gambling isnt right.]
  `
}, {
    name:"gamble",
    description:"Gamble your coins with a `50%` chance of loosing or doubling your earnings! `10 Minute Cooldown`",
    aliases:"bet",
    code:
      `
        $if[$randomText[gab;ged]==ged;

          $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$message];$authorID]
          $title[1;You did some illegal gambling]
          $description[1;
            You : **$random[7;11]**<a:chugMyJugNoob:821350583227121696> | Your dealer : **$random[1;6]**
            This made you $coin**$message** richer!!]
          $color[1;00FF00]

        ;

          $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$message];$authorID]
          $title[1;You did some illegal gambling]
          $description[1;
            You : **$random[1;6]** | Your dealer : **$random[7;11]**<a:chugMyJugNoob:821350583227121696>
            You lost $coin**$message**!! next time, just try working for it.]
          $color[1;FF0000]

        ]

        $globalCooldown[10m;Chill out, for about **%time%**, gambling isnt right.]
        $argsCheck[>1;You gambled **air**, To do more gambling **say all/max or <amount>**]

        $onlyIf[$message<=999999;You cannot gamble an amount more than $coin**1000000**]
        $onlyIf[$getGlobalUserVar[money;$authorID]>=$message;You don't have  $coin**$message** to gamble. lmao]
        $onlyIf[$message>=99;You cant gamble an amount less than $coin**100**]
        
        $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
      `
},{
  name:"crime",
  description:"Commit a crime, `3 Minute Cooldown`",
  code:
    `
      $if[$getGlobalUserVar[money;$authorID]<100;
        $title[1;**Failed to commit a crime!**]
        $description[1;Your wallet must have $coin100 or more to commit a crime]
      ;
        $if[$randomText[success;fail]==fail;

          $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$random[500;1000]];$authorID]
          $color[1;c20707]
          $title[1;**You were caught**]
          $description[1;<a:siren:814739822031798322>  $randomText[ You were caught robbing the jewelry store;You were caught stealing a Tesla;robbing .Yet#0055;You were cuaght robbing on oldman] and was fined $coin **$random[500;1000]**]
        ;

          $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[100;500]];$authorID]
          $title[1;$username committed a crime]
          $color[1;00FF00]
          $description[1;$randomText[You Robbed Walmart;You robbed on oldman;You robbed Powerbot;You robbed FLO;You stole santa's gifts, sold it;You Robbed MEE6;You Robbed the jewelry store;You stole a car, sold it] and earned $coin**$random[100;500]** ]

        ]
      ]

      $globalCooldown[3m;Man the cops are still looking for you, <a:siren:814739822031798322> it will take about **%time%** for them to give up.]
      $onlyIf[$getGlobalUserVar[blacklist;$authorID]==0;:x: You have been blacklisted! Reason : **\`$getGlobalUserVar[blacklistReason;$authorID]\`**]
    `
},{
  name:"rob",
  description:"Rob someone. `If they have a shield you will automatically fail but damage their shield` `Premium users cannot be robbed` `2 Minute Cooldown`",
  aliases:"steal",
  code:
    `
      $if[$mentioned[1]==$authorID;
        You robbed $coin**$getGlobalUserVar[money;$authorID]** from yourself, Are you really that lonely?
      ;

        $if[$getGlobalUserVar[shieldHP;$mentioned[1]]>0;
          This user has a shield! so you cant rob them lol. But you did damage their shield by **$random[1;$getGlobalUserVar[shieldHP;$mentioned[1]]]%**!
          $setGlobalUserVar[shieldHP;$sub[$getGlobalUserVar[shieldHP;$mentioned[1]];$random[1;$getGlobalUserVar[shieldHP;$mentioned[1]]]];$mentioned[1]]
        ;

          $if[$randomText[rob;bor]==rob;
            $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$mentioned[1]];$random[0;$getGlobalUserVar[money;$mentioned[1]]]];$mentioned[1]]
            $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[0;$getGlobalUserVar[money;$mentioned[1]]]];$authorID]
            You successfully robbed $coin**$random[0;$getGlobalUserVar[money;$mentioned[1]]]** from <@$mentioned[1]>. Lmaoooo

          ;

            $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1]];$random[0;$getGlobalUserVar[money;$authorID]]];$mentioned[1]]
            $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$random[0;$getGlobalUserVar[money;$authorID]]];$authorID]
            You were caught robbing <@$mentioned[1]> you payed them  $coin**$random[0;$getGlobalUserVar[money;$mentioned[1]]]**. :pensive:

          ]

        ]

      ]


      $onlyIf[$getGlobalUserVar[premium;$mentioned[1]]!=1;User is premium user, those people are epic]
      $onlyIf[$getGlobalUserVar[money;$mentioned[1]]>=499;The user does not have $coin**500** in there in their wallet! its not worth it man]
      $onlyIf[$isBot[$mentioned[1]]==false;Oi i aint gonna let you rob a fellow bot]
      $onlyIf[$getGlobalUserVar[money;$authorID]>=499;You do not have enough coinz. You must have atleast $coin**500** to rob someone.]
      $onlyIf[$mentioned[1;no]!=undefined;Mention someone to rob idiot]

      $globalCooldown[2m;Hold up, robbing is not nice. Wait **%time%** before robbing again]

      $onlyIf[$getServerVar[rob]==0;Robbing other people is disabled in this server]
    `
}]