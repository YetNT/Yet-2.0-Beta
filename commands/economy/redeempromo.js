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
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorId];6900];$authorId]
  $setGlobalUserVar[newUpdate;claimed;$authorId]
  $onlyIf[$getGlobalUserVar[newUpdate;$authorId]==unclaimed;You already claimed this noob]
  `
},{
  name:"redeempromo DvjFMy9fKU",
  code:`
  GG a valid promocode
  +$coin**10000**
  Dev Message : \`Thanks for joining the server, really appreciated :D\`
  $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorId];10000];$authorId]
  $setGlobalUserVar[DvjFMy9fKU;claimed;$authorId]
  $onlyIf[$getGlobalUserVar[DvjFMy9fKU;$authorId]==unclaimed;You already claimed this noob]
  $onlyIf[($channelId==796048687867625492)&&($guildId==794139215612870697);Incorrect channel/server.]
  `
}]

// 073-787-7614