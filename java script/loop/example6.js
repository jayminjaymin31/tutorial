//palindrome no ===> 121  121
var num = 13131;
var check = num;
var reverse = 0;
var palindrome;

while(num != 0){
    reverse = (reverse * 10)+(num % 10);
    palindrome = reverse;
    num = parseInt(num/10);
}
if(check == palindrome){
    console.log(`this number is palindroms ${check} = `,palindrome)
}else{
    console.log(`this is not palindroms number`)
}