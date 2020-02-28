//addition excercise1
function add(a, b){
    var sum = a + b;
    return sum;
}
var result = add(2, 3);
console.log(result);

//multiplication then show 3 output and totalof output
function double(number){
    var result = number*2;
    return result;
}
var first = double(10);
var second = double(20);
var third = double(30);
console.log(first, second, third);
var total = first + second + third;
console.log(total);

//normal function
function pen(){
    console.log("this is my pen");
}
pen()

//Object exercise2
var student1 = {id:12, phone:'01759490093', name:'rahul'};
var details = student1;
console.log(details);

//adding new key & value
var student2 = { id: 12, phone: '01759490093', name: 'rahul' };
student2.class = 5;
var details = student2;
console.log(details);

//changing key
var student3 = { id: 12, phone: '01759490093', name: 'rahul' };
student3['id'] = 15;
var details = student3;
console.log(details);

//while loop
var number1 = 0;
var number2 = 0;
var number3 = 10;
while(number1<15){
    console.log(number1);
    number1++;
}
while(number2<=20){
    console.log(number2);
    number2++
}

//for loop1
for (var i=0; i<10;i++) {
    console.log(i);
}

//for loop2
var numbers = [4, 7, 11, 15, 20];
for (var i=0; i<numbers.length; i++){
    var element = numbers[i];
    console.log(element);
}

//Arry 1
var friendsAge = [29, 28, 27, 30];
console.log(friendsAge);
//find the value
console.log(friendsAge[0]);
//find out the value after putting the arry into another variable
var myAge = friendsAge[1];
console.log(myAge);
//find out the position 
var position = friendsAge.indexOf(27); 
console.log(position);

//arry 2
var eggs = [30, 60, 90, 75];
console.log(eggs);
eggs.push(45);
console.log(eggs);
eggs.pop();
console.log(eggs);
eggs.shift();
console.log(eggs);
eggs.unshift(120, 45);
console.log(eggs);
console.log(eggs.length);  

//conditions if else
var biscuits = 50;
if (biscuits>10){
    console.log("you should buy that packet");
}
else{
    console.log("this packet is not for you");
}
console.log(biscuits);