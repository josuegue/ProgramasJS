
function countCharacter(){
    text = document.getElementById('textInput').value;
    char = document.getElementById('character').value;

    const count = countLetter(text, char);
    document.getElementById('result').innerHTML = `The character ${char} appears ${count} times in the text`;
}

const countLetter = (str, char)=>{
    return str.split(char).length -1;
}