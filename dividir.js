const dividir = function(a,b){
    if(a === 0  || b === 0){
        return "No se puede dividir por cero"
    }
    return a / b
}

//console.log(dividir(25,5));
//console.log(dividir(0,8));
//console.log(dividir(15,0));

module.exports = dividir