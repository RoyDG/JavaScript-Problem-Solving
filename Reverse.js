var statement = "Hello Myself";

function reverseString(str){
        let reverse = "";
        for (let i = 0; i < statement.length; i++){
            let char = str[i];
            reverse = char + reverse;
        }
    return reverse;    
}
var forMe = reverseString(statement);
console.log(forMe);

var foodBlog = reverseString("i am in");
console.log(foodBlog);


var sentence = "i am in";
var reverse2 = sentence.split('').reverse().join('');
    
console.log(reverse2);