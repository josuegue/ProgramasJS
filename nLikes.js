function returndata(){
    num = parseInt(document.getElementById('likes').value);

    result = addCharacter(num);

    document.getElementById('result').innerHTML = result;
}

const addCharacter = (e) => {
    if (e >= 1000 && e < 1000000){
        return `${e/1000}K`
    }else if(e >= 1000000){
        return `${e/1000000}M`
    }else{
        return `${e}`
    }
}