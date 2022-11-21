 module.exports = [{/* Help Button */
   prototype:"button",
   type:"interaction",
   name:"help",
   code:`
 $interactionReply[_ _;
 {newEmbed:{color:#00FF00}{title:Helpful Commands.}
   {description:
     **y!info** - Bot information Questions
     **y!bsuggest** - Suggest a feature or update to the bot
     **y!bbug** - Report a bug
     **y!help** - There is no way of describing this command, other than you just used it.
     **y!calc** - Calculate somethin.
   }};;no;users;yes]`
 },{/* Others Button */
     prototype:"button",
     type:"interaction",
     name:"fun",
     code:`
   $interactionReply[_ _;
   {newEmbed:{color:#00FF00}{title:Uselessness commands}
   {description:
     **y!nu** - no you
     **y!yes** - yes
     **y!cap** - Is it cap or not the given message?
     **y!no** - no
     **y!8ball** - 8ball, what else?
     **y!ratio** - Ratio someone's message using the message ID [The bot will react with W or L]
     **y!yn** - yes or no?
   }};;no;users;yes]`
 
 },{/* Images Button */
     prototype:"button",
     type:"interaction",
     name:"img",
     code:`
   $interactionReply[_ _;
   {newEmbed:{color:#00FF00}{title:Images. Or Gifs}
   {description:
     **y!drip**- d  r  i  p
     **y!rip** - RIP
     **y!invert** - Inverts your or mentioned's profile picture
     **y!eject** - Is Imposter?
   }};;no;users;yes]`
 },{/* Economy Button */
    prototype:"button",
    type:"interaction",
    name:"eco",
    code:`
   $interactionReply[_ _;
   {newEmbed:{color:#00FF00}
   {title:Money commands lmao}
   {description:
     **y!rob** - Rob a user
     **y!buy** - Buy something from he shop
     **y!redeempromo** - Redeem a promocode
     **y!work** - Work for <:coinz:815194325729804308>
     **</claim daily:1041010256005840968>** - Daily Coins.
     **</claim hourly:1041010256005840968>** - Hourly Coins.
     **</claim monthly:1041010256005840968>** - Monthly Coins
     **</claim 69minutely:1041010256005840968>** - 69 Minutely Coins
     **y!mine** - Minecraft refrence? nah.
     **y!search** - Search for Gems
     **y!build** - Build for <:coinz:815194325729804308>, using bricks
     **y!recipe** - Recipes
     **y!cook** - cook something from recipe ofc
     **</inventory:1041779772717551638>** - Inventory. What else?
     **y!shop** - List of buyable items
     **</balance:1031617871421395064>** - Your balance
     **</bank deposit:1042026255438073926>** - Deposit.
     **</bank withdraw:1042026255438073926>** - Withdraw.
     **y!leaderbaord** - Money leaderboard
     **y!gamble** - Gamble
     **y!crime** -  Commit some crime
     **y!use** - Use item
     **</share:1041797277917917296>** - Share your coins with someone
   }};;no;users;yes]
   `
}]