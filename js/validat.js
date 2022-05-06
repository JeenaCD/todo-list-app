function callback(p){
    console.log(p);
    window.open('./main.html');
}

function validate(callback){
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    if(email.value !="admin"|| password.value !="12345"){
        alert("Invalid user");
        console.log("enter123");
        // return false;
    }
    else{
        console.log("enter");
        var s="print";
    // return true;
    callback(s);
    }
}