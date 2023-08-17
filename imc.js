
function calculaIMC(){
    const weight = parseFloat (document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value)/100;
    
    const imc = calculate_imc(weight, height);
    console.log(imc);
    const result = is_valid(imc);
    
    document.getElementById('result').innerHTML = result;
}


const calculate_imc = (weight, height)=>{
    return weight / (height * height)
}

const is_valid = (imc) => {
    if(isNaN(imc)){
        return 'Ingresa valores validos';
    }else if(imc < 18.5){
        return 'Bajo de peso';
    } else if(imc >= 18.5 && imc < 24.9){
        return 'Normal';
    }else if(imc >= 25 && imc < 29.9){
        return 'Sobrepeso';
    }else if(imc >=30){
        return 'Obeso';
    } 
}