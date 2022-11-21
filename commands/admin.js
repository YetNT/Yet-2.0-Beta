module.exports = [{
  name:"list",
  code:`
  $title[1;Enabled/Disabled Command List]
$addField[1;Rob;
$if[$getServerVar[rob]==1;<:x2:848129233850859531> Disabled;<:tick:848129234097668096> Enabled]
Arg = \`rob\`;yes]
$onlyPerms[managemessages;:x: Get more perms (Manage Messages)]
  `
},{
  name:"disable rob",
  $if:"v4",
  code:`
$title[1;Disabled $message]
$setServerVar[rob;1]
$onlyIf[$getServerVar[rob]==0;:x: **\`y!rob\` is already disabled**]
$onlyPerms[managemessages;:x: Get more perms (Manage Messages)]
  `
},{
  name:"enable rob",
  $if:"v4",
  code:`
$title[1;Enabled $message]
$setServerVar[rob;0]
$onlyIf[$getServerVar[rob]==1;:x: **\`y!rob\` is already enabled**]
$onlyPerms[managemessages;:x: Get more perms (Manage Messages)]
  `
}]