// su dung lai cac gia tri cu khi tao moi
var oldarray= [1,2,3];
var newarray= [oldarray,4,5];

console.log(oldarray);
console.log(newarray);

var newarray= [...oldarray,4,5];
console.log(newarray);