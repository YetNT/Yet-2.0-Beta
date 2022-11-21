module.exports = [
  {
    name:"creat45",
    code:`
      $createApplicationCommand[global;work;Check out your items;true;slash]
      $createApplicationCommand[global;build;Check out your items;true;slash]
      $createApplicationCommand[global;mine;Check out your items;true;slash]
      $createApplicationCommand[global;crime;Check out your items;true;slash]
    `
},{
    name:"work",
    type:"interaction",
    prototype:"slash",
    code:`
      $interactionReply[ok]
    `
  }
]