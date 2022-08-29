const prompt = require('prompt-sync')();
let primeFactorArray = new Array()
let count = 0;
let n = parseInt(prompt("Enter the number n to get its prime factors"));
function checkPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0||i<=1){
            return 1
        }
    }
    primeFactorArray[count]=n;
    count++;
    return 0;
}
let i = 2;
let temp =n;
while(n!=0){  
    
    if(n%i==0){
        let checkPrimeFactor = checkPrime(i)
        if(checkPrimeFactor==0){
            console.log(i)
            n=Math.floor(n/i);
            continue;
        }
    }
    i++;
    if(i>Math.floor(temp/2)){
        break;
    }
}
console.log(primeFactorArray)

