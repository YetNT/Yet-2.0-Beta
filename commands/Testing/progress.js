
/*

var percentage = 9 // Percent of the bar you want full (out of 100)
var MAX = 45 // Amount of units in the bar
var units = (percentage / 100) * MAX // Amount of units that will be shaded (Do Not Edit)
var bar = []

console.log(units)

for ( i = 0; i < MAX; i++) {
  if ( i < units) {
    bar.push("/")
  } else {
    bar.push("|")
  }
}
console.log(bar)
  
*/
module.exports = [{
/*
  name:"bar",
  code:`
  $repeatMessage[$get[MAX];$get[unshade]]
  $editIn[5s;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[50;100];$get[MAX]]]]

  for one single frame
  
  $let[percent;0]
  $let[MAX;20]
  $let[shade;X]
  $let[unshade;C]
  `
*/
  name:"bar",
  code:`
  $repeatMessage[$get[MAX];$get[unshade]] **0% Completed**

  $editIn[3s;$get[f1];$get[f2];$get[f3];$get[f4];$get[f5];$get[f6];$get[f7];$get[f8];$get[f9];$get[f10]]

  $let[f10;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[100;100];$get[MAX]]] **100% Completed**]
  $let[f9;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[90;100];$get[MAX]]] **90% Completed**]
  $let[f8;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[80;100];$get[MAX]]] **80% Completed**]
  $let[f7;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[70;100];$get[MAX]]] **70% Completed**]
  $let[f6;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[60;100];$get[MAX]]] **60% Completed**]
  $let[f5;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[50;100];$get[MAX]]] **50% Completed**]
  $let[f4;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[40;100];$get[MAX]]] **40% Completed**]
  $let[f3;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[30;100];$get[MAX]]] **30% Completed**]
  $let[f2;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[20;100];$get[MAX]]] **20% Completed**]
  $let[f1;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[10;100];$get[MAX]]] **10% Completed**]
  $let[percent;0]
  $let[MAX;20]
  $let[shade;█]
  $let[unshade;▒]
  `
},{
  name:"custom-bar",
  code:`
  $repeatMessage[$get[MAX];$get[unshade]] **0% Completed**

  $editIn[3s;$get[f1];$get[f2];$get[f3];$get[f4];$get[f5];$get[f6];$get[f7];$get[f8];$get[f9];$get[f10]]

  $let[f10;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[100;100];$get[MAX]]] **100% Completed**]
  $let[f9;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[90;100];$get[MAX]]] **90% Completed**]
  $let[f8;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[80;100];$get[MAX]]] **80% Completed**]
  $let[f7;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[70;100];$get[MAX]]] **70% Completed**]
  $let[f6;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[60;100];$get[MAX]]] **60% Completed**]
  $let[f5;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[50;100];$get[MAX]]] **50% Completed**]
  $let[f4;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[40;100];$get[MAX]]] **40% Completed**]
  $let[f3;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[30;100];$get[MAX]]] **30% Completed**]
  $let[f2;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[20;100];$get[MAX]]] **20% Completed**]
  $let[f1;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[10;100];$get[MAX]]] **10% Completed**]
  $let[percent;0]
  $let[MAX;$message]
  $let[shade;█]
  $let[unshade;▒]
  $onlyIf[$isNumber[$message]==true;first msg must be number]
  $argsCheck[1;only 1 argument boi]
  `
}]

/*
$editIn[5s;$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[10;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[20;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[30;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[40;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[50;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[60;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[70;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[80;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[90;100];$get[MAX]]]
;
$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[100;100];$get[MAX]]]]
*/