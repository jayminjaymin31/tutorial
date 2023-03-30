var x = 100
var y = 23
console.log(x/y);
console.log(Math.floor(x/y));

var no = 78528;
var count = 0;
 
while(no!=0){
    no= Math.floor(no/10);
    count++;
}
console.log("no of digit = ", count);