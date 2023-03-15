//function with return value

function fullName(Fname,Lname){
      var a = Fname + " " + Lname;

return a;
}

var fn=fullName("mujahid","khan");
    console.log(fn);



//sum of functino 

//function dafinetion
function sum(math,eng,sc){
    var s = math+eng+sc;

    return s;
}

function percentage(tt){
     var per =tt/300*100;
     console.log(per);
}

var total =sum(70,70,70);


percentage(total);  //function calling
