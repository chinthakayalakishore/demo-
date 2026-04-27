let register =()=>{

    let fname = document.forms["regForm"]["fname"].value
    let arr1 = [];
    if(/^$/.test(fname)){
        arr1.push("first name canit be empty");
    }else if(!/^[a-zA-Z0-9]{4,8}$/.test(fname)){
        arr1.push("please follow rules and regulations")
    }
    document.getElementById("fname_errors").innerHTML = arr1.join("")

     let lname = document.forms["regForm"]["lname"].value
    let arr2 = [];
    if(/^$/.test(lname)){
        arr2.push("last name canit be empty");
    }else if(!/^[a-zA-Z0-9]{4,8}$/.test(lname)){
        arr2.push("please follow rules and regulations")
    }
    document.getElementById("lname_errors").innerHTML = arr1.join("")


     let pswd = document.forms["regForm"]["pswd"].value
    let arr3 = [];
    if(/^$/.test(pswd)){
        arr3.push("password canit be empty");
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pswd)){
        arr3.push("please follow rules and regulations")
    }
    document.getElementById("pswd_errors").innerHTML = arr3.join("")

//       /^$/
//       /^[a-zA-Z0-9]{4,8}
//       /^(?=.*[a-z])(?=.[*!@#$%&*])(?=.*[A-z])(?=.*\d)[A-Za-z\d]{4,8}$/
//       /^[0-9]{10}$/
//    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return false
}