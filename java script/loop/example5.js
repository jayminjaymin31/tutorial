
var num = 123456789;
var check = num;
var reverse = 0;

while(num != 0){
    reverse = (reverse * 10)+(num % 10);
    num = parseInt(num/10);
}
console.log(`this is your reveres ${check} = `,reverse)