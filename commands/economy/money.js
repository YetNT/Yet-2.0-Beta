/*
bal, dep/dep all, with/with all, share
*/
module.exports = [{
  name: "balance",
  aliases: ["bal","wallet",],
  description:"See a your (or another user)'s wallet and coins",
  usage:"y!balance (@user#2303)",
  code: `Balance Command has moved to </balance:1031617871421395064>!
  This is the beginning of the painful move to slash commands. For now bal is one of them`
}, {
  name : "leaderboard",
  description:"Global coin leaderboard",
  aliases : ["rich","lb"],
  code: `
  $globalUserLeaderboard[money;asc;**{top}.** {username} - {value}]
  `
},{
  name:"dep",
  description:"Deposit your coins into the bank",
  usage:"y!deposit [<positive integer>/all/max]",
  aliases:"deposit",
  code:`Deposit Command has moved to </bank deposit:1042026255438073926>`
},{
  name:"with",
  aliases:"withdraw",
  description:"Withdraw your coins into the bank",
  usage:"y!withdraw [<positive integer>/all/max]",
  code:`Withdraw Command has moved to </bank withdraw:1042026255438073926>`
},{
  name:"share",
  description:"Share coins with other users",
  usgae:"y!share <amount> [@user#6969]",
  code:`
    Share command has moved to </share:1041797277917917296>
  `
}]