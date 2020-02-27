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

//Object excercise2
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
while(number1<15){
    console.log(number1);
    number1++;
}
while(number2<=20){
    console.log(number2);
    number2++
}
while (number2 < 2) {
    console.log(number2);
    number2++
}