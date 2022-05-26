const multiplicar = function(a,b){
    if(a === 0  || b === 0){
        return 0
    }
    return a * b
}

//console.log(multiplicar(25,5));
//console.log(multiplicar(0,8));
//console.log(multiplicar(15,0));
 
module.exports = multiplicar