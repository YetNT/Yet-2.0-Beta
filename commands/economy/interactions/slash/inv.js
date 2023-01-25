module.exports = [
  {
    name:"create2",
    code:`
      $createApplicationCommand[global;User Inventory;;true;user]
      $createApplicationCommand[global;inventory;Check out your items;true;slash]
    `
  },{
    type:"interaction",
    prototype:"slash",
    name:"User Inventory",
    code:`
      $setUserVar[user;$interactionData[targetId]]
      $interactionReply[;
        {newEmbed:
          {title:$username[$interactionData[targetId]]'s Inventory}
          {description:Click the select menu to get started!}
        }
      ;
        {actionRow:
          {selectMenu:INVid2:Inventory:1:1:no:
            {selectMenuOptions:Shield:shield:shield status and shield hp}
            {selectMenuOptions:Badges:badges:b a d g e s}
            {selectMenuOptions:Items/Other Materials/Rare:items:main, other and rare items}
            {selectMenuOptions:Food/Utensils:food:f o o d}
            {selectMenuOptions:Packs:packs:openable packages}
          }
        }
      ;;everyone]`
  },{
    name:"inventory",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[;
        {newEmbed:
          {title:Your Inventory}
          {description:Click the select menu to get started!}
        }
      ;
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
    `
    // in normal - $addSelectMenu[1;INVid;Inventory;1;1;no;Shield:shield status and shield hp:shield:no;Badges:b a d g e s:badges:no;Items/Other Materials/Rare:main, other and rare itmes:items:no;Food/Utensils:f o o d:food:no;Packs:openable packges:packs:no]
  }
]