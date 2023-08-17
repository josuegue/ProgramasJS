const arr = [1,2,45,23,12,56,75,35,1,2,4,1000,35,234,99]

document.getElementById('showArr').innerHTML = `<p> El array es [${arr}]</p>`

function max_num(){
    const result = maxNum(arr);
    console.log(result);
    document.getElementById('result').innerHTML = `<p>El número más grande del array es ${result}</p>`
}

const maxNum =(arr)=>{
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
