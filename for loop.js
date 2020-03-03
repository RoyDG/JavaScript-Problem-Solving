var marks = [33, 40, 50, 60, 70, 80];
var max = marks[0];

for(var i= 0; i <marks.length; i++){
    var element = marks [i];
    if(element > max){
        max = element;
    }
    
}
console.log("Highest value is", max);

//exm2
var numbers = [33, 40, 50, 60, 70, 80];
var sum = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}
console.log("total", sum);

//exm3
function getArrySum(numbers){
    var sum = numbers[1];

    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [33, 40, 50, 60, 70, 80];
var results = getArrySum(numbers);
console.log("Total of numbers = ", results);
