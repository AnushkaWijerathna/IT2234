//write a boolean function to find a given number is prime

function isPrime(x){

    if(x < 2){
        return false
    }

    else{
        for(let i=2; i<x; i++){
            if(x%i == 0){
                return false
            }
        }
        return true

    }
    
}

console.log(isPrime(19))