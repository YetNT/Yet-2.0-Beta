module.exports = [
  {
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
    $interactionUpdate[;
      {newEmbed:
        {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
        {title:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Shield}
        {footer:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        {description:
          Shield $if[$getGlobalUserVar[shield;$getUserVar[user]]!=0;**Active** 
          Shield Hp - **$numberSeparator[$getGlobalUserVar[shieldHP;$getUserVar[user]];,]%**; **Inactive** ]
        }
      };
      {actionRow:
        {selectMenu:INVid2:Inventory:1:1:no:
          {selectMenuOptions:Shield:shield:shield status and shield hp}
          {selectMenuOptions:Badges:badges:b a d g e s}
          {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
          {selectMenuOptions:Food/Utensils:food:f o o d}
          {selectMenuOptions:Packs:packs:openable packages}
        }
      }
    ;;;;yes]
    $onlyIf[$interactionData[values[0]]==shield;]
    `
  },{
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
      $interactionUpdate[;
        {newEmbed:
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {title:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Badges}
          {footer:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
          {description:$if[$getGlobalUserVar[amogus;$getUserVar[user]]<1;;<:Y_amogus:853162810318389259>]$if[$getGlobalUserVar[ownerBadge;$getUserVar[user]]<1;;<:BotDevAndOwnerBadge:859693781406580736>]$if[$getGlobalUserVar[snBadge;$getUserVar[user]]<1;;<:69:873514184065830942>]$if[$getGlobalUserVar[mod;$getUserVar[user]]<1;;<:BotAdminModBadge:859696755272318986>]$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>]$if[$getGlobalUserVar[friendBadge;$getUserVar[user]]<1;;<:FriendOfDevBadge:864164751319498784>]_ _}
        };
        {actionRow:
          {selectMenu:INVid2:Inventory:1:1:no:
            {selectMenuOptions:Shield:shield:shield status and shield hp}
            {selectMenuOptions:Badges:badges:b a d g e s}
            {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
            {selectMenuOptions:Food/Utensils:food:f o o d}
            {selectMenuOptions:Packs:packs:openable packages}
          }
        }
      ;;;;yes]
      $onlyIf[$interactionData[values[0]]==badges;]
    `
  },{
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
      $interactionUpdate[;
        {newEmbed:
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {title:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - All items}
          {field:Items:
            $if[$getGlobalUserVar[Gem;$getUserVar[user]]==0;; Gems<a:shiny:845964737229094912> - **$numberSeparator[$getGlobalUserVar[Gem;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[Rock;$getUserVar[user]]==0;; Rocks:rock: - **$numberSeparator[$getGlobalUserVar[Rock;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[Pick;$getUserVar[user]]==0;; Pickaxes - **$numberSeparator[$getGlobalUserVar[Pick;$getUserVar[user]];,]**]_ _
          :yes}
          {field:Other Items:
            $if[$getGlobalUserVar[Brick;$getUserVar[user]]==0;; Bricks:bricks: -  **$numberSeparator[$getGlobalUserVar[Brick;$getUserVar[user]];,]**]_ _
          :yes}
          {field:Rare:
            $if[$getGlobalUserVar[floMathTest;$getUserVar[user]]==0;;Flo's Math Test<:flo_math_test:922168667955933214> - **$numberSeparator[$getGlobalUserVar[floMathTest;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[yetMouse;$getUserVar[user]]==0;;Yet's Mouse<:yets_mouse:922113363083943996> - **$numberSeparator[$getGlobalUserVar[yetMouse;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[supremeFlexPoster;$getUserVar[user]]==0;;FS Poster<a:supremeFlexPoster:926388549320847380> - **$numberSeparator[$getGlobalUserVar[supremeFlexPoster;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[none;$getUserVar[user]]==0;;None - **$numberSeparator[$getGlobalUserVar[none;$getUserVar[user]];,]**]_ _
          :yes}
          {footer:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        };
        {actionRow:
          {selectMenu:INVid2:Inventory:1:1:no:
            {selectMenuOptions:Shield:shield:shield status and shield hp}
            {selectMenuOptions:Badges:badges:b a d g e s}
            {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
            {selectMenuOptions:Food/Utensils:food:f o o d}
            {selectMenuOptions:Packs:packs:openable packages}
          }
        }
      ;;;;yes]
      $onlyIf[$interactionData[values[0]]==items;]
    `
  },{
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Food}
          {field:Food:
            $if[$getGlobalUserVar[onion;$getUserVar[user]]==0;;Onion - **$numberSeparator[$getGlobalUserVar[onion;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[apple;$getUserVar[user]]==0;;Apple - **$numberSeparator[$getGlobalUserVar[apple;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[banana;$getUserVar[user]]==0;;Banana - **$numberSeparator[$getGlobalUserVar[banana;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[egg;$getUserVar[user]]==0;;Egg - **$numberSeparator[$getGlobalUserVar[egg;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[milk;$getUserVar[user]]==0;;Milk - **$numberSeparator[$getGlobalUserVar[milk;$getUserVar[user]];,]**]_ _
          :no}
          {field:Utensils:
            $if[$getGlobalUserVar[pan;$getUserVar[user]]==0;;Pan - **$numberSeparator[$getGlobalUserVar[pan;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[pot;$getUserVar[user]]==0;;Pot - **$numberSeparator[$getGlobalUserVar[pot;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[oven;$getUserVar[user]]==0;;Oven - **$numberSeparator[$getGlobalUserVar[oven;$getUserVar[user]];,]**]
            $if[$getGlobalUserVar[kettle;$getUserVar[user]]==0;;Kettle - **$numberSeparator[$getGlobalUserVar[kettle;$getUserVar[user]];,]**]_ _
          :no}
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        };
        {actionRow:
          {selectMenu:INVid2:Inventory:1:1:no:
            {selectMenuOptions:Shield:shield:shield status and shield hp}
            {selectMenuOptions:Badges:badges:b a d g e s}
            {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
            {selectMenuOptions:Food/Utensils:food:f o o d}
            {selectMenuOptions:Packs:packs:openable packages}
        }
      ;;;;yes]
      $onlyIf[$interactionData[values[0]]==food;]
    `
  },{
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Packs}
          {description:
            $if[$getGlobalUserVar[supremeFlexPackage;$getUserVar[user]]==0;;Supreme Flex Pack<:supremeFlexPoster:926393830847168563> - **$numberSeparator[$getGlobalUserVar[supremeFlexPackage;$getUserVar[user]];,]**]_ _
          }
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$if[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        };
        {actionRow:
          {selectMenu:INVid2:Inventory:1:1:no:
            {selectMenuOptions:Shield:shield:shield status and shield hp}
            {selectMenuOptions:Badges:badges:b a d g e s}
            {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
            {selectMenuOptions:Food/Utensils:food:f o o d}
            {selectMenuOptions:Packs:packs:openable packages}
          }
        }
      ;;;;yes]
      $onlyIf[$interactionData[values[0]]==packs;]
    `
  }
]