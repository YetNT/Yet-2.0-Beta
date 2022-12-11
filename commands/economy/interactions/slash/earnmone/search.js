module.exports = [
  {
    name:"create search",
    code:`
      $createApplicationCommand[global;search;Search various places for various items!;true;slash;
        [
          {
            "name": "search",
            "description": "Where would you like to search?",
            "required": true,
            "type": "STRING",
            "choices" : 
              [
                {
                  "name" : "Bedroom",
                  "value" : "bedroom"
                },{
                  "name" : "Bathroom",
                  "value" : "bathroom"
                },{
                  "name" : "Outside",
                  "value" : "outside"
                },{
                  "name" : "Backrooms",
                  "value" : "backrooms"
                },{
                  "name" : "Gmail Inbox",
                  "value" : "gmail"
                },{
                  "name" : "Laundromat",
                  "value" : "laundromat"
                },{
                  "name" : "Vending Machine",
                  "value" : "vending"
                },{
                  "name" : "Till at the shop",
                  "value" : "till"
                },{
                  "name" : "Discord Notifications",
                  "value" : "notifs"
                },{
                  "name" : "Yet's Server",
                  "value" : "server_ad"
                },{
                  "name" : "Microscopic world",
                  "value" : "mw"
                },{
                  "name" : "School Campus",
                  "value" : "school"
                },{
                  "name" : "Fridge",
                  "value" : "fridge"
                },{
                  "name" : "#TwitterHastag",
                  "value" : "twitter"
                },{
                  "name" : "Trash",
                  "value" : "trash"
                },{
                  "name" : "Vehicle Rental Place",
                  "value" : "rent"
                },{
                  "name" : "EyePhone store",
                  "value" : "iphone"
                },{
                  "name" : "Space time continuum",
                  "value" : "stc"
                },{
                  "name" : "Black Hole",
                  "value" : "black"
                },{
                  "name" : "Discord Developer Documentation",
                  "value" : "ddd"
                },{
                  "name" : "Pencil case",
                  "value" : "pencil"
                },{
                  "name" : "Your kidney",
                  "value" : "kidney"
                }
              ]
          }
        ]
      ]
    `
  },{ //bedroom
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:You searched your bedroom and found **$random[50;100]**:gem: !}
          {color:#6495ED}
          {footer:$username searched their bedroom}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==bedroom;]
    `
  },{ //bathroom
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID] You found **$random[50;100] Gems** in the toilet. ew bro;
              $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID] You walked into the bathroom and stepped on **$random[50;100] Gems**, nice;
              $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[5;10]];$authorID] You searched, searched, searched and searched. Only to find **$random[5;10] Gems** in the whole bathroom. It was not worth it.;
              You were searching for some gems then tripped on some leaking soap, fell into the bathtub, got strangled by the shower clothing line, and if you watched the movie you know the rest.;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[5;100]];$authorID] No luck. You just found some hair in the sink, an open toilet seat and $coin**$random[5;100]**
            ]  
          }
          {color:#6495ED}
          {footer:$username searched their bathroom}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==bathroom;]
    `
  },{ //outside
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[ 
              You tripped on some moss while searching outside. At least you touched grass for once.;
              $setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];$random[20;40]];$authorID] You found **$random[20;40] Rocks** from the ground. Worth it?;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[100;700]];$authorID] You stepped outside for the first time in 40 years. God was so impressed with you that he blessed you with $coin**$random[100;700]**. Wonderful.;
              You were about to step outside your door, but the sun burnt your skin while you were walking out so nah.
            ]
          }
          {color:#6495ED}
          {footer:$username searched outside}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==outside;]
    `
  },{ //backrooms
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              WOW, you found $coin**$random[10;9000]** AND **$random[2;500] Gems**! Nice! but wait... you can't find the exit...
              You've been walking for 6 hours now. I don't know how you'll find the exit
              You encounter an entity which kills you and you loose everthing you found. Depressing.;
              $setGlobalUserVar[Rock;$sum[$getGlobalUserVar[Rock;$authorID];$random[10;1000]];$authorID] $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[2;345]];$authorID] Wtf you found **$random[10;1000] Rocks** and $coin**$random[2;345]**. I won't even ask how you found bricks in the backrooms;
              You try noclipping through manythings but you couldn't figure it out. ;
              Backrooms is closed today.;
              You encountered an entity right before reaching the exit. You died, but didn't find anything anyways.
            ]
          }
          {color:#6495ED}
          {footer:$username searched the backrooms}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==backrooms;]
    `
  },{ //gmail
    name:"search",
    type:"interaction", // badge get : gullible
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              Your GGmail is dead. Lol;
              $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];50];$authorID] You found an ad to earn free money. You hesitate at first but click it anyways and it was real! You just... wait... the scammer has your bank account, and took out $coin**50**. $badgeGetNormal[badgen;var;029494];  
              Aint no way you checking your ggmail bro :skull:;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[50;100]];$authorID] You look into the spam folder to find $coin**$random[50;100]**. How?;
              Searched and found nothing. Might as well get Email
            ]  
          }
          {color:#6495ED}
          {footer:$username searched their Gmail inbox}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==gmail;]
    `
  },{ //laudromat
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              You smack some washing machines and they drop $coin**$random[10;900]**. Nice?;
              You enter a laundromat and... huh... there's nothing here... No washing machines, no dryers, nothing... L;
              A laundromat employee caught you lacking. Stealing from a washing machine. Wow.;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[50;600]];$authorID] Oh look, some money on a counter, I don't think you shoul... **+**$coin**$random[50;600]**;
              You broke into one at night and noticed a job sign, 
            ]
          }
          {color:#6495ED}
          {footer:$username searched a laundromat}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==laundromat;]
    `
  },{ //vending
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              You stick your hand in the vending machine hoping to find money somewhere, you dig deeper and deeper, until you end up looking like that blue guy from that one show;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[1;1500]];$authorID] You gave the vending machine a $randomText[colk;spright;popsi;fahntah] and it gave you back $coin**$random[1;1500]**;
              You take apart a random vending machine and it starts beeping alerting the manager. Oh well no money :pensive:;
              You couldn't find a vending machine in your area.;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[2;239]];$authorID] Someone dropped their coinz infront of the vending machine. Idk how this happens but your evil for picking it up and keeping it. $coin**$random[2;239];
              $setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];20];$authorID] $setGlobalUserVar[milk;$sum[$getGlobalUserVar[milk;$authorID];1];$authorID] You put $coin**20** into the vending machine and it gives back **1 Milk**!
            ]
          }
          {color:#6495ED}
          {footer:$username searched a vending machine}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==vending;]
    `
  },{ //till
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              You went shopping to find a till to rob, found one, annnddd.... nothing.;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[100;10000]];$authorID] The teller went to the bathroom and you took the chance to go to the till. You found $coin**$random[100;10000]**;
              The teller went tot he bathroom and you took the chance to go to the till. Infact everybody did! Before you could even walk a step closer to the till, all of it's contents are gone.
            ]
          }
          {color:#6495ED}
          {footer:$username searched a till at a shop}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==till;]
    `
  },{ //notifs
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              Your Notifs are empty :pensive:;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];400];$authorID] Discord mod dmed you $coin**400** Don't ask how that works.;
              No dms, you swear you heard the ping but nothing is there.
            ]
          }
          {color:#6495ED}
          {footer:$username searched their discord notifications}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==notifs;]
    `
  },{ //server_ad
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              Lol rip no coinz, but you can [join this server](https://discord.gg/DvjFMy9fKU) for daily giveaways;
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[10;400]];$authorID] You search around general for some coins. Nobody is chatting but you did find $coin**$random[10;400]**;
              No coins here, but did you know that you can get $coin**10000** by using a promocode hidden in <#796048687867625492> which is in [this server?](https://discord.gg/DvjFMy9fKU);
            ]
          }
          {color:#6495ED}
          {footer:$username searched yet's server}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==server_ad;]
    `
  },{ //microscopic world
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$random[100;900000]];$authorID] You scouted the entire world of microorganisms, you found a total of $coin**$random[100;900000]**. Worth it.;
              Nothing in the microscopic world. weird tf;
              You search the microscopic world and find no coins, but you find Ant Man!;
              You find a coin in a microorganism's singular cell. Nice? $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];1];$authorID]
            ]
          }
          {color:#6495ED}
          {footer:$username searched the microscopic world}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==mw;]
    `
  },{ //school
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:
            $randomText[
              You find ;
              ;
              ;
            ]
          }
          {color:#6495ED}
          {footer:$username searched $random[their;a] school campus}
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==school;]
    `
  },{ //fridge
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==fridge;]
    `
  },{ //twitter
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==twitter;]
    `
  },{ //trash
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==trash;]
    `
  },{ //rent
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==rent;]
    `
  },{ //iphone
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==iphone;]
    `
  },{ //stc
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==stc;]
    `
  },{ //black
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==black;]
    `
  },{ //ddd
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==ddd;]
    `
  },{ //pencil
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==pencil;]
    `
  },{ //kidney
    name:"search",
    type:"interaction",
    prototype:"slash",
    code:`
      $setGlobalUserVar[Gem;$sum[$getGlobalUserVar[Gem;$authorID];$random[50;100]];$authorID]
      $interactionReply[;
        {newEmbed:
          {title:$username's Search Results}
          {description:}
          {color:#6495ED}{footer:$username searched }
        }
      ]
      
      $advanceCooldown[1s;search;
        {
          "embeds":"{newEmbed:{color:#DC143C}{description:Sorry, wait **%time%** before searching again.}}",
          "ephemeral":true,"options":{"interaction":true}
        }
      ]
      $onlyIf[$slashOption[search]==kidney;]
    `
  }
]