
const real_password = '1234j'

function is_valid(){
    let password =new String(document.getElementById('passWord').value).toLowerCase();
    console.log(password);
    const result = compare_password(password, real_password)
    document.getElementById('result').innerHTML=result;
}

const compare_password = (password, confirm_password)=>{
    if(password === confirm_password){
        return 'Password is valid'
    }
    return 'Password is not valid'
}