// /balance
module.exports = {
  type:"interaction",
  prototype:"slash",
  name:"balance",
  code:`
    $ifAwaited[$interactionData[options.data[0].value]!=undefined;
      $interactionReply[bal;
        {newEmbed:
          {title:$username[$interactionData[options.data[0].value]]'s Balance}
          {color:FFF000}
          {field:Money:$numberSeparator[$getGlobalUserVar[money;$interactionData[options.data[0].value]];,]:no}
          {field:Bank:$numberSeparator[$getGlobalUserVar[bank;$interactionData[options.data[0].value]];,]:no}
          {footer:Global Leaderboard Position #COLON# $getLeaderboardInfo[money;$interactionData[options.data[0].value];globaluser;top]}
        }
      ;;;everyone]
    ;
      $interactionReply[bal;
        {newEmbed:
          {title:$username[$authorID]'s Balance}
          {color:FFF000}
          {field:Money:$numberSeparator[$getGlobalUserVar[money;$authorID];,]:no}
          {field:Bank:$numberSeparator[$getGlobalUserVar[bank;$authorID];,]:no}
          {footer:Global leaderboard Position #COLON# $getLeaderboardInfo[money;$authorId;globaluser;top]}
        }
      ;;;everyone]
    ]
  `
}