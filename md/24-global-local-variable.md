[js-file](/Js/24-global-local-variable.js)

GLOBAL AND LOCAL VARIABLE
JS-FILE

diffrence between local and global variable local -> not work at outise of function BUT globl -> work at both is side at out side or inside to so the pattern is

local variabl => local variable the value that we write in inside function global variable => global that variable we can use at inside and outside also

function local (){
    var a = ("this is local variable");
    document.writh(a);
}
local ();
var a = ("this is local varible");
function globle(){
    document.write(a);
}
document.writh(a);
the end