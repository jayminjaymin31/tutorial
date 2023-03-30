function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n* factorial(n-1);
    }
}
let num =7;
console.log("Factorial of " + num + " is " + factorial(num));