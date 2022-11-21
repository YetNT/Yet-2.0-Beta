/*
yes, no, ratio, yn, 8ball, nu, cap
*/
module.exports = [{
  name: "yes",
  code: `$deleteCommand <@$authorID> : **yes**`
}, {
  name: "no",
  code: `$deleteCommand <@$authorID> : **no**`
}, {
  name: "ratio",
  aliases: ["WL","WorL"],
  code: `
  $deleteCommand
  $addMessageReactions[$channelId;$message[1];$randomText[🇼;🇱]]
  $onlyIf[$messageExists[$message[1];$channelID]==true;Make sure that you mention \`the message id\`, and that the message is in the \`same channel\` your in]`
},{
  name:"yn",
  code:`
  $title[1;Yes or No?]
    $addField[1;My Answer;$randomText[Probably;Porbably Not;Yeah;Nah;Yes;No];yes]
    $addField[1;$username[$authorID] Asked;$message;yes]
    $argsCheck[>0;:x: enter a msg]
    `
}, {
  name:"8ball",
  code:`
  $title[1;8ball :moyai:]

  $color[1;$random[000000;999999]]
$footer[1;The answers are random.]
$addField[1;🎱My Answer :;$randomText[Yes;No;Not sure;You know it;Absolutely not;Absolutely yes;Cannot tell;Sure;Mmm, I have no idea.;Haha ye boi;What? no!;Yep;Nope;Maybe;I'm too afraid to tell;Sorry that's too hard to answer.;Most likely.;Ask ur mum.;I asked your crush she/he said no.;Most certainly....NOT.];yes]
$addField[1;<@$authorID> asked:;$message;yes]
$argsCheck[>0;:x: enter a msg bruv]

  `
},{
  name:"nu",
  aliases:'noyou',
  code:`$randomText[No You;no you;No you]`
},{
name:"cap",
code:`
$title[1;Cap? or not?]
$addField[1;My Response;$randomText[Nah aint cap;cap;OMEGA CAP;Thats some godly cap right there;Not Cap;hmm, its true.;Supreme Cap;The **c**at ate **a** big mouse named **p**at]]
$addField[1;Message;$message]
$argsCheck[>0;:x: Cap, anyways what am i supposed to respond to?]
`
}]