var dice = Math.random()*10;
console.log(dice);

var randomNumber = Math.random()+10;
console.log(randomNumber);

var randomNumber = Math.random()-10;
console.log(randomNumber);

var randomNumber = Math.random()/10;
console.log(randomNumber);

var output = Math.round(randomNumber);
console.log(output);

//under loop
for(i=0; i<5; i++){
    var randomNumber = Math.random()*6;
    var roundNumber = Math.round(randomNumber);
    console.log(roundNumber);
}
//print under 100 to 200
var result = 100 + Math.random() * 100;
console.log(result);
