 function primeNumber(checkprime){

    if(checkprime < 1){
        return `${checkprime} is not a prime  number`
    }else{
        for(let i = 2; i <= checkprime; i++ ){
            if(checkprime % 2==0){
                return(`${checkprime} is not a prime number`)
            }

        }
    }
    return `${checkprime} is a prime number`
 }

 console.log(primeNumber(14))