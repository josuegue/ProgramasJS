

const rangeInput = document.getElementById('salary');
const rangeValue = document.getElementById('rangeValue');

rangeInput.addEventListener('input', ()=>{
    rangeValue.textContent = rangeInput.value;
});

function calculate_salary(){
    age = parseInt(document.getElementById('age').value);
    salary =parseInt(document.getElementById('salary').value);
    n_ame = document.getElementById('nombre').value;
    const result = calculate(age,salary);

    document.getElementById('result').innerHTML = `${n_ame} your tax is ${result}`

}

const calculate = (age, salary)=>{
    if(age >= 18 && salary >=1000){
        return salary * 0.4;
    }
    else{
        return 0;
    }
}