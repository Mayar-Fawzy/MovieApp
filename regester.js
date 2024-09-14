let PasswordRegister = document.getElementById("inputpasswordregister");
document.getElementById("buttonnregister").addEventListener("click", () => {
  axios
    .post("https://ecommerce.routemisr.com/api/v1/auth/signup", {
      email: document.getElementById("inputemailregister").value,
      name: document.getElementById("nameregister").value,
      password: PasswordRegister.value,
      phone: document.getElementById("phoneregister").value,
      rePassword:document.getElementById("inputrepasswordregister").value,
    })
    .then(function (response) {
      // handle success
      let token = response.token;
      localStorage.setItem("Tokenn", token);
      console.log(token);
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message); clear();
    });
   
});
function clear(){
    document.getElementById("nameregister").value="";
    document.getElementById("phoneregister").value="";
    document.getElementById("inputemailregister").value="";
    document.getElementById("inputrepasswordregister").value="";
    PasswordRegister.value="";

}
function ValidatePasswordRegister(){
  let regexPasswordRegister= /^[A-Za-z0-9]{8,}$/;
  if(regexPasswordRegister.test(PasswordRegister.value)==true){
      PasswordRegister.classList.add("is-valid");
      PasswordRegister.classList.remove("is-invalid");
  }
  else {
      PasswordRegister.classList.add("is-invalid");
      PasswordRegister.classList.remove("is-valid");
  }
}
PasswordRegister.addEventListener("keyup",ValidatePasswordRegister);