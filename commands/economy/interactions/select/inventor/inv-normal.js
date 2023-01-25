module.exports = [
  {
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
    $interactionUpdate[;
      {newEmbed:
        {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
        {title:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Shield}
        {footer:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        {description:
          Shield $ifAwaited[$getGlobalUserVar[shield;$authorID]!=0;**Active** 
          Shield Hp - **$numberSeparator[$getGlobalUserVar[shieldHP;$authorID];,]%**; **Inactive** ]
        }
      };
      {actionRow:
        {selectMenu:INVid:Inventory:1:1:no:
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
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
      $interactionUpdate[;
        {newEmbed:
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {title:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Badges}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
          {description:$ifAwaited[$getGlobalUserVar[amogus;$authorID]<1;;<:Y_amogus:853162810318389259>]$ifAwaited[$getGlobalUserVar[ownerBadge;$authorID]<1;;<:BotDevAndOwnerBadge:859693781406580736>]$ifAwaited[$getGlobalUserVar[snBadge;$authorID]<1;;<:69:873514184065830942>]$ifAwaited[$getGlobalUserVar[mod;$authorID]<1;;<:BotAdminModBadge:859696755272318986>]$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>]$ifAwaited[$getGlobalUserVar[friendBadge;$authorID]<1;;<:FriendOfDevBadge:864164751319498784>]_ _}
        };
        {actionRow:
          {selectMenu:INVid:Inventory:1:1:no:
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
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
      $interactionUpdate[;
        {newEmbed:
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {title:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - All items}
          {field:Items:
            $ifAwaited[$getGlobalUserVar[Gem;$authorID]==0;; Gems<a:shiny:845964737229094912> - **$numberSeparator[$getGlobalUserVar[Gem;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[Rock;$authorID]==0;; Rocks:rock: - **$numberSeparator[$getGlobalUserVar[Rock;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[Pick;$authorID]==0;; Pickaxes - **$numberSeparator[$getGlobalUserVar[Pick;$authorID];,]**]_ _
          :yes}
          {field:Other Items:
            $ifAwaited[$getGlobalUserVar[Brick;$authorID]==0;; Bricks:bricks: -  **$numberSeparator[$getGlobalUserVar[Brick;$authorID];,]**]_ _
          :yes}
          {field:Rare:
            $ifAwaited[$getGlobalUserVar[floMathTest;$authorID]==0;;Flo's Math Test<:flo_math_test:922168667955933214> - **$numberSeparator[$getGlobalUserVar[floMathTest;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[yetMouse;$authorID]==0;;Yet's Mouse<:yets_mouse:922113363083943996> - **$numberSeparator[$getGlobalUserVar[yetMouse;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[supremeFlexPoster;$authorID]==0;;FS Poster<a:supremeFlexPoster:926388549320847380> - **$numberSeparator[$getGlobalUserVar[supremeFlexPoster;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[none;$authorID]==0;;None - **$numberSeparator[$getGlobalUserVar[none;$authorID];,]**]_ _
          :yes}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        };
        {actionRow:
          {selectMenu:INVid:Inventory:1:1:no:
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
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Food}
          {field:Food:
            $ifAwaited[$getGlobalUserVar[onion;$authorID]==0;;Onion - **$numberSeparator[$getGlobalUserVar[onion;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[apple;$authorID]==0;;Apple - **$numberSeparator[$getGlobalUserVar[apple;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[banana;$authorID]==0;;Banana - **$numberSeparator[$getGlobalUserVar[banana;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[egg;$authorID]==0;;Egg - **$numberSeparator[$getGlobalUserVar[egg;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[milk;$authorID]==0;;Milk - **$numberSeparator[$getGlobalUserVar[milk;$authorID];,]**]_ _
          :no}
          {field:Utensils:
            $ifAwaited[$getGlobalUserVar[pan;$authorID]==0;;Pan - **$numberSeparator[$getGlobalUserVar[pan;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[pot;$authorID]==0;;Pot - **$numberSeparator[$getGlobalUserVar[pot;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[oven;$authorID]==0;;Oven - **$numberSeparator[$getGlobalUserVar[oven;$authorID];,]**]
            $ifAwaited[$getGlobalUserVar[kettle;$authorID]==0;;Kettle - **$numberSeparator[$getGlobalUserVar[kettle;$authorID];,]**]_ _
          :no}
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        };
        {actionRow:
          {selectMenu:INVid:Inventory:1:1:no:
            {selectMenuOptions:Shield:shield:shield status and shield hp}
            {selectMenuOptions:Badges:badges:b a d g e s}
            {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
            {selectMenuOptions:Food/Utensils:food:f o o d}
            {selectMenuOptions:Packs:packs:openable packages}
          }
        }
        ;;everyone]
      $onlyIf[$interactionData[values[0]]==food;]
    `
  },{
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Packs}
          {description:
            $ifAwaited[$getGlobalUserVar[supremeFlexPackage;$authorID]==0;;Supreme Flex Pack<:supremeFlexPoster:926393830847168563> - **$numberSeparator[$getGlobalUserVar[supremeFlexPackage;$authorID];,]**]_ _
          }
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$ifAwaited[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        };
        {actionRow:
          {selectMenu:INVid:Inventory:1:1:no:
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