module.exports = [{
  name:"redeempromo",
  aliases:"rp",
  code:`
  incorrect promococde noob
  `
},{
  name:"redeempromo this-is-not-a-promo-code",
  aliases:["rp this-is-not-a-promo-code","rp tinapc","redeempromo tinapc","redeempromo this-is-not-a-promocode","rp this-is-not-a-promocode","rp tinap","redeempromo tinap"],
  code:`
  $title[1;:white_check_mark: Promo Code Successfully Redeemed!]
  $description[
    **Code** : \`thisIsNotAPromocode\`
    **Code Value** : $coin1
    __***Lol gg. ig***__
  ]
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorId];1];$authorId]
  $setGlobalUserVar[thisIsNotAPromocode;claimed;$authorId]
  $onlyIf[$getGlobalUserVar[thisIsNotAPromocode;$authorId]==unclaimed;You already claimed this noob]
  `
},{
  name:"redeempromo newupdate",
  aliases:['rp new update','redeempromo new update','rp new-update','redeempromo new-update','rp nu','redeempromo nu'],
  code:`
  GG a valid promocode
  **+6900**$coin
  Dev Message : \`an updae\`:skull: ||\`You probably didn't claim this on a new update, but it's fine\`||
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorId];1];$authorId]
  $setGlobalUserVar[newUpdate;claimed;$authorId]
  $onlyIf[$getGlobalUserVar[newUpdate;$authorId]==unclaimed;You already claimed this noob]
  `
}]

// 073-787-7614