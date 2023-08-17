const arrNumbers = [1,2,3];

const sum = (arr) =>{
    return arr.reduce((acumulador, valorActual)=> acumulador * valorActual,1);
}

const result = sum(arrNumbers);
document.getElementById('result').innerHTML = `El array es [${arrNumbers}] y la multiplicacion de sus elementos es ${result}`