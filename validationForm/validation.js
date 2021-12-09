var err = []

function login(){
    var username = document.getElementById('username')
    var password = document.getElementById('password')

    var user = username.value
    var pass = password.value

    if(user==""){
        err.push("Please enter a username")
    }else if(user.length < 8){
        err.push("Username must be at least 8 characters")
    }else if(user.length > 8 && user.typeof=="number"){
        err.push("Please enter characters only")
    }
    if(pass==""){
        err.push("Please enter a password")
    }else if(pass.length < 8){
        err.push("Password must be at least 8 characters")
    }
    var errmg=document.getElementById('mydiv')
    errmg.innerText=err;
}