//example1
var mouse = 350;
var keyboard = 550;

if(mouse>keyboard){
    console.log("take mouse now");
}
else{ console.log("take both things");}

//example2
var india = 130;
var china = 160;
var usa = 50;

var max = Math.max(india, china, usa);
console.log(max);

var min = Math.min(india, china, usa);
console.log(min);

var log = Math.log(india, china, usa);
console.log(log);

var sqrt = Math.sqrt(usa);
console.log(sqrt);

//example3
var a = 90;
var b = 310;
var c = 220;

if (a>b){
    if(a>c){
        console.log("a is big");
    }
    else{
        console.log("c is big");
    }
}
else{
    if(b>c){
        console.log("b is big");
    }
    else{
        console.log("c is big");
    }
}
