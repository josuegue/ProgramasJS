const arrNumbers = [1,2,3,4,5,6,7,8,9];

const sum = (arr) =>{
    return arr.reduce((acumulador, valorActual)=> acumulador + valorActual,0);
}

const result = sum(arrNumbers);
document.getElementById('result').innerHTML = `El array es [${arrNumbers}] y la suma de sus elementos es ${result}`