module.exports = [
  {
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
    $interactionUpdate[;
      {newEmbed:
        {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
        {title:$if[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Shield}
        {footer:$if[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
        {description:
          Shield $if[$getGlobalUserVar[shield;$authorID]!=0;**Active** 
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
    ]
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
          {title:$if[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Badges}
          {footer:$if[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
          {description:$if[$getGlobalUserVar[amogus;$authorID]<1;;<:Y_amogus:853162810318389259>]$if[$getGlobalUserVar[ownerBadge;$authorID]<1;;<:BotDevAndOwnerBadge:859693781406580736>]$if[$getGlobalUserVar[snBadge;$authorID]<1;;<:69:873514184065830942>]$if[$getGlobalUserVar[mod;$authorID]<1;;<:BotAdminModBadge:859696755272318986>]$if[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>]$if[$getGlobalUserVar[friendBadge;$authorID]<1;;<:FriendOfDevBadge:864164751319498784>]_ _}
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
      ]
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
          {title:$if[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - All items}
          {field:Items:
            $if[$getGlobalUserVar[Gem;$authorID]==0;; Gems<a:shiny:845964737229094912> - **$numberSeparator[$getGlobalUserVar[Gem;$authorID];,]**]
            $if[$getGlobalUserVar[Rock;$authorID]==0;; Rocks:rock: - **$numberSeparator[$getGlobalUserVar[Rock;$authorID];,]**]
            $if[$getGlobalUserVar[Pick;$authorID]==0;; Pickaxes - **$numberSeparator[$getGlobalUserVar[Pick;$authorID];,]**]_ _
          :yes}
          {field:Other Items:
            $if[$getGlobalUserVar[Brick;$authorID]==0;; Bricks:bricks: -  **$numberSeparator[$getGlobalUserVar[Brick;$authorID];,]**]_ _
          :yes}
          {field:Rare:
            $if[$getGlobalUserVar[floMathTest;$authorID]==0;;Flo's Math Test<:flo_math_test:922168667955933214> - **$numberSeparator[$getGlobalUserVar[floMathTest;$authorID];,]**]
            $if[$getGlobalUserVar[yetMouse;$authorID]==0;;Yet's Mouse<:yets_mouse:922113363083943996> - **$numberSeparator[$getGlobalUserVar[yetMouse;$authorID];,]**]
            $if[$getGlobalUserVar[supremeFlexPoster;$authorID]==0;;FS Poster<a:supremeFlexPoster:926388549320847380> - **$numberSeparator[$getGlobalUserVar[supremeFlexPoster;$authorID];,]**]
            $if[$getGlobalUserVar[none;$authorID]==0;;None - **$numberSeparator[$getGlobalUserVar[none;$authorID];,]**]_ _
          :yes}
          {footer:$if[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
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
      ]
      $onlyIf[$interactionData[values[0]]==items;]
    `
  },{
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$if[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Food}
          {field:Food:
            $if[$getGlobalUserVar[onion;$authorID]==0;;Onion - **$numberSeparator[$getGlobalUserVar[onion;$authorID];,]**]
            $if[$getGlobalUserVar[apple;$authorID]==0;;Apple - **$numberSeparator[$getGlobalUserVar[apple;$authorID];,]**]
            $if[$getGlobalUserVar[banana;$authorID]==0;;Banana - **$numberSeparator[$getGlobalUserVar[banana;$authorID];,]**]
            $if[$getGlobalUserVar[egg;$authorID]==0;;Egg - **$numberSeparator[$getGlobalUserVar[egg;$authorID];,]**]
            $if[$getGlobalUserVar[milk;$authorID]==0;;Milk - **$numberSeparator[$getGlobalUserVar[milk;$authorID];,]**]_ _
          :no}
          {field:Utensils:
            $if[$getGlobalUserVar[pan;$authorID]==0;;Pan - **$numberSeparator[$getGlobalUserVar[pan;$authorID];,]**]
            $if[$getGlobalUserVar[pot;$authorID]==0;;Pot - **$numberSeparator[$getGlobalUserVar[pot;$authorID];,]**]
            $if[$getGlobalUserVar[oven;$authorID]==0;;Oven - **$numberSeparator[$getGlobalUserVar[oven;$authorID];,]**]
            $if[$getGlobalUserVar[kettle;$authorID]==0;;Kettle - **$numberSeparator[$getGlobalUserVar[kettle;$authorID];,]**]_ _
          :no}
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$if[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
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
      ]
      $onlyIf[$interactionData[values[0]]==food;]
    `
  },{
    name:"INVid",
    type:"interaction",
    prototype:"selectMenu",
    
    code:`
      $interactionUpdate[;
        {newEmbed:
          {title:$if[$getGlobalUserVar[premium;$authorID]<1;;<:PremiumBadge:867676737994358795>] $username[$authorID]'s Inventory - Packs}
          {description:
            $if[$getGlobalUserVar[supremeFlexPackage;$authorID]==0;;Supreme Flex Pack<:supremeFlexPoster:926393830847168563> - **$numberSeparator[$getGlobalUserVar[supremeFlexPackage;$authorID];,]**]_ _
          }
          {color:$randomText[#FFFF00;#00FF00;#FFA500;#FFA500;#5539cc]}
          {footer:$if[$getGlobalUserVar[premium;$authorID]<1;this user is not a premum user \:(;this user is a premium user \:)]}
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
      ]
      $onlyIf[$interactionData[values[0]]==packs;]
    `
  }
]