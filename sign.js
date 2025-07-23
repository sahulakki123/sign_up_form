let signup=()=>{

    let name = document.querySelector("#name").value.trim();
    let num = document.querySelector("#num").value.trim();
    let email = document.querySelector("#email").value.trim();
    let pass = document.querySelector("#pass").value.trim();
    let cpass = document.querySelector("#cpass").value.trim();
  
    let errname = document.querySelector("#errname")
    let errnum = document.querySelector("#errnum")
    let erremail = document.querySelector("#erremail")
    let errpass = document.querySelector("#errpass")
    let errcpass = document.querySelector("#errcpass")


    if (name==""){
        errname.innerHTML="please enter name"
        errname.style.color="red"
        return false
    }
    else if (isNaN(num)){
        errnum.innerHTML="Please enter number only"
        return false
    }
    else if(num.length!=10){
        errnum.innerHTML="Please enter Valid number"
        return false
    }
    else if (!(email.includes("@") && email.includes(".com"))){
        erremail.innerHTML="Please enter the vailid email"
        return false
    }
    else if(!(pass.match(/[!@#$%^&*]/) && pass.match(/[1234567890]/) && pass.match(/[A-Z]/) && pass.match(/[a-z]/))){
        errpass.innerHTML="Please enter the stroing passwerd"
        return false
    }
    else if (pass !== cpass) {
        errpass.innerHTML="Please enter same passwerd "
        document.querySelector("#cpass").value=""
        document.querySelector("#cpass").focus()
        return false
    }

    alert("Account created successfully!");
    document.querySelector("#signup");
};
