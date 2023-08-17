
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,20,40,50,1,31,67,45,12,562,45]
const lenghtarr = arr.length;
document.getElementById('showArr').innerHTML = `<p> El array es ${arr}</p><br><p>Eligen un rango, el array tiene ${lenghtarr} elementos.</p>`

function sumar_elementos(){
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const result = sum_arr(arr,start,end);
    console.log(result);
    document.getElementById('result').innerHTML = `<p>La suma de los elementos del array entre ${start} y ${end} es ${result}</p>`

}

const sum_arr = (arr,start,end)=>{
    let sum =0;
    for (let i=0; i<arr.length; i++){
        if(i>=start && i<=end){
            sum+=arr[i];
        }
    }
    return sum;
}

