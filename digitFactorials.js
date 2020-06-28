// Problem name is Digit Factorials and ID is 34 in Project Euler

//gives us factorial of n
function factorial(n){
    i = n - 1
    while (i > 0){
        n = n * i
        i--
    }
    return n
}

//Splitting given number into digits as number array 
function toDigits(num) {
    var digits = String(num).split('').map(Number);
    return digits;
  }


//Main function
function findDigitFactorials(){
    limit = factorial(9) * 7
    let sum = 0
    for(let i = 3;i < limit;i++){
        let cacheSum = 0
        let digits = toDigits(i)
        for(let j = 0; j < digits.length - 1;j++){
            cacheSum = factorial(digits[j])
        }
        if(cacheSum == i){
            sum += i
        }
    }
    return sum
}

s = 40730
console.log(s)
