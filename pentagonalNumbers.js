//Project name is Pentagonal numbers and ID is 44 in ProjectEuler


//Function for creating Pentagonal Numbers
function createPN(n){
    return (n * (3 * n - 1) / 2)
}


//Checking for is PN?
function check(x){
    let n = (1+Math.sqrt(1+24*x))/6;
    if (Math.floor(n)==n) return true;
    else return false
}

//Main Function
function pentagonalNumbers(){
    for(let i = 0;i < 5000;i++){
        PN1 = createPN(i)
        for(let j = i - 1;j > 0;j--){
            PN2 = createPN(j)
            if((check(PN1 + PN2)) && (check(PN1 - PN2)) == true){
                console.log(PN1 - PN2)
            }
        }
    }
}

pentagonalNumbers()
