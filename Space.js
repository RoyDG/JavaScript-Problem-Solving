//single and double space find-out
var space = "i am  a  good boy";
var count = 0;
console.log(space.length);
console.log(space[3]);

for (let i = 0; i < space.length; i++){
    let char = space[i];

   if (char === " "){
        count++
   }
}
console.log(count);


//skip double space
var doubleSpace = "i am  a soo  very good  boy";
var count2 = 0;
console.log(doubleSpace.length);

for (let i = 0; i < doubleSpace.length; i++) {
    let char2 = doubleSpace[i];

    if (char2 === " " && doubleSpace[i -1] != " ") {
        count2++
    }
}
console.log(count2);