let  Email =document.getElementById("inputemail");
let password = document.getElementById("inputpassword");

document.getElementById("buttonn").addEventListener("click", () => {


    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', {
        email: Email.value,
        password: password.value
    })
    .then(function (response) {
        // handle success
        let token = response.token;
        localStorage.setItem("Tokenn", token);
        console.log(token);
        window.location.href = 'Home.html';
    })
    .catch(error => {
        console.log(error);
        alert(error.response.data.message);clear();
         Email.value="";
        password.value="";
    });
});

function ValidateEmail(){
    let regexemail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regexemail.test(Email.value)==true){
        Email.classList.add("is-valid");
        Email.classList.remove("is-invalid");
    }
    else {
       
        Email.classList.add("is-invalid");
        Email.classList.remove("is-valid");
    }
}
Email.addEventListener("keyup",ValidateEmail);

function Validatepassword(){
    let regexpassword= /^[A-Za-z0-9]{8,}$/;
    if(regexpassword.test(password.value)==true){
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    }
    else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
    }
}
password.addEventListener("keyup",Validatepassword);
