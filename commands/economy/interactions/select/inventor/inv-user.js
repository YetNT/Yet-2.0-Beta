module.exports = [
  {
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
    $interactionUpdate[;
      {newEmbed:
        {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
        {title:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Shield}
        {footer:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        {description:
          Shield $ifAwaited[$getGlobalUserVar[shield;$getUserVar[user]]!=0;**Active** 
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
    ;;everyone]
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
          {title:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Badges}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
          {description:$ifAwaited[$getGlobalUserVar[amogus;$getUserVar[user]]<1;;<:Y_amogus:853162810318389259>]$ifAwaited[$getGlobalUserVar[ownerBadge;$getUserVar[user]]<1;;<:BotDevAndOwnerBadge:859693781406580736>]$ifAwaited[$getGlobalUserVar[snBadge;$getUserVar[user]]<1;;<:69:873514184065830942>]$ifAwaited[$getGlobalUserVar[mod;$getUserVar[user]]<1;;<:BotAdminModBadge:859696755272318986>]$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>]$ifAwaited[$getGlobalUserVar[friendBadge;$getUserVar[user]]<1;;<:FriendOfDevBadge:864164751319498784>]_ _}
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
      ;;everyone]
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
          {title:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - All items}
          {field:Items:
            $ifAwaited[$getGlobalUserVar[Gem;$getUserVar[user]]==0;; Gems<a:shiny:845964737229094912> - **$numberSeparator[$getGlobalUserVar[Gem;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[Rock;$getUserVar[user]]==0;; Rocks:rock: - **$numberSeparator[$getGlobalUserVar[Rock;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[Pick;$getUserVar[user]]==0;; Pickaxes - **$numberSeparator[$getGlobalUserVar[Pick;$getUserVar[user]];,]**]_ _
          :yes}
          {field:Other Items:
            $ifAwaited[$getGlobalUserVar[Brick;$getUserVar[user]]==0;; Bricks:bricks: -  **$numberSeparator[$getGlobalUserVar[Brick;$getUserVar[user]];,]**]_ _
          :yes}
          {field:Rare:
            $ifAwaited[$getGlobalUserVar[floMathTest;$getUserVar[user]]==0;;Flo's Math Test<:flo_math_test:922168667955933214> - **$numberSeparator[$getGlobalUserVar[floMathTest;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[yetMouse;$getUserVar[user]]==0;;Yet's Mouse<:yets_mouse:922113363083943996> - **$numberSeparator[$getGlobalUserVar[yetMouse;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[supremeFlexPoster;$getUserVar[user]]==0;;FS Poster<a:supremeFlexPoster:926388549320847380> - **$numberSeparator[$getGlobalUserVar[supremeFlexPoster;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[none;$getUserVar[user]]==0;;None - **$numberSeparator[$getGlobalUserVar[none;$getUserVar[user]];,]**]_ _
          :yes}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
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
      ;;everyone]
      $onlyIf[$interactionData[values[0]]==items;]
    `
  },{
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Food}
          {field:Food:
            $ifAwaited[$getGlobalUserVar[onion;$getUserVar[user]]==0;;Onion - **$numberSeparator[$getGlobalUserVar[onion;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[apple;$getUserVar[user]]==0;;Apple - **$numberSeparator[$getGlobalUserVar[apple;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[banana;$getUserVar[user]]==0;;Banana - **$numberSeparator[$getGlobalUserVar[banana;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[egg;$getUserVar[user]]==0;;Egg - **$numberSeparator[$getGlobalUserVar[egg;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[milk;$getUserVar[user]]==0;;Milk - **$numberSeparator[$getGlobalUserVar[milk;$getUserVar[user]];,]**]_ _
          :no}
          {field:Utensils:
            $ifAwaited[$getGlobalUserVar[pan;$getUserVar[user]]==0;;Pan - **$numberSeparator[$getGlobalUserVar[pan;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[pot;$getUserVar[user]]==0;;Pot - **$numberSeparator[$getGlobalUserVar[pot;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[oven;$getUserVar[user]]==0;;Oven - **$numberSeparator[$getGlobalUserVar[oven;$getUserVar[user]];,]**]
            $ifAwaited[$getGlobalUserVar[kettle;$getUserVar[user]]==0;;Kettle - **$numberSeparator[$getGlobalUserVar[kettle;$getUserVar[user]];,]**]_ _
          :no}
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        };
        {actionRow:
          {selectMenu:INVid2:Inventory:1:1:no:
            {selectMenuOptions:Shield:shield:shield status and shield hp}
            {selectMenuOptions:Badges:badges:b a d g e s}
            {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
            {selectMenuOptions:Food/Utensils:food:f o o d}
            {selectMenuOptions:Packs:packs:openable packages}
        }
      ;;everyone]
      $onlyIf[$interactionData[values[0]]==food;]
    `
  },{
    name:"INVid2",
    type:"interaction",
    prototype:"selectMenu",

    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;;<:PremiumBadge:867676737994358795>] $username[$getUserVar[user]]'s Inventory - Packs}
          {description:
            $ifAwaited[$getGlobalUserVar[supremeFlexPackage;$getUserVar[user]]==0;;Supreme Flex Pack<:supremeFlexPoster:926393830847168563> - **$numberSeparator[$getGlobalUserVar[supremeFlexPackage;$getUserVar[user]];,]**]_ _
          }
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$getUserVar[user]]<1;this user is not a premum user \:(;this user is a premium user \:)]}
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
      ;;everyone]
      $onlyIf[$interactionData[values[0]]==packs;]
    `
  }
]