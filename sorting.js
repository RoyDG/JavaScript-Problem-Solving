//common numbers are erased
var name = [3, 6, 2, 7, 3, 2, 8];
var uniqueName = [];

for (i = 0; i < name.length; i++){
    var element = name [i];
    var index = uniqueName.indexOf(element);

    if (index == -1){
        uniqueName.push(element);
    }
}
console.log("Output", uniqueName);