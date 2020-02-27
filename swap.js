//swap example1
var a = 5;
var b = 8;
console.log("before swap a=", a, "b=", b);

var a = 5;
var b = 8;
var c = a;
    a = b;
    b = c;
console.log("after swap a=", a, "b=", b);

//swap example2
var x = 5;
var y = 8;
    x = x + y;
    y = x - y;
    x = x - y;
console.log("after swap x=", x, "y=", y);

//swap example3
var p = 5;
var q = 6;
[p, q] = [q, p];
console.log("after swap p=", p, "q=", q);