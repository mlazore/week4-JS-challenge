const arr = [`1`, `2`, `3`];

var total = 0;
for(let i = 0; i < arr.length; i++){
    total += arr[i];
}
var avg = total / arr.length;
console.log(avg)