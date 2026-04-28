
function register(){

let uname = document.forms["logForm"]["uname"].value;
let arr1=[];

if(uname.trim()==""){
    arr1.push("Username can't be empty");
}
else if(!/^[a-zA-Z0-9]{4,8}$/.test(uname)){
    arr1.push("Username must be 4-8 letters or numbers");
}

document.getElementById("uname_errors").innerHTML=arr1.join("<br>");



let pswd = document.forms["logForm"]["pswd"].value;
let arr2=[];

if(pswd.trim()==""){
    arr2.push("Password can't be empty");
}
else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(pswd)){
    arr2.push("Use 8+ chars, upper, lower, number, special symbol");
}

document.getElementById("pswd_errors").innerHTML=arr2.join("<br>");

if(arr1.length==0 && arr2.length==0){
   alert("Login Successful");
   return true;
}

return false;

}