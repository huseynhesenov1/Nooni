const databaseUser = {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password")
}
const loginInput = document.querySelectorAll(".form-control");
const loginForm = document.querySelector("form")
const myAlert = document.querySelector("#myalert")

const authLogin = (e) =>{
    e.preventDefault();
    if (!loginInput[0].value || !loginInput[1].value) {
        myAlert.innerHTML = "Please, fill input"
        myAlert.className = "alert alert-warning"
    }else{
        if (loginInput[0].value === databaseUser.email && loginInput[1].value === databaseUser.password) {
            myAlert.innerHTML = "Welcome to system"
            myAlert.className = "alert alert-success"
            window.location.assign("home.html")
        localStorage.setItem("login","true");

        }else{
            myAlert.innerHTML = "Email or Password is wrong"
            myAlert.className = "alert alert-warning"
        }
    }
}
loginForm.onsubmit = authLogin

//     ============================                 mode               =============================
let Swich = true;
const Modebtn = document.querySelector("#modeBtn")
const item = document.querySelector(".light")
if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode","light")
}else{
      Modebtn.addEventListener("click",()=>{
        if (Swich == true) {
          item.className="dark"
          Modebtn.style.backgroundColor = "#fff"
          Modebtn.style.color = "black"
          localStorage.setItem("mode","dark")
          Modebtn.innerHTML="Light"
          Swich=false
        }else{
          item.className="light"
          Modebtn.style.backgroundColor = "black"
          Modebtn.style.color = "#fff"
          localStorage.setItem("mode","light")
          Modebtn.innerHTML="Dark"
          Swich=true
        }
    })
}
if (localStorage.getItem("mode")=="light") {
  Modebtn.innerHTML="Dark"
  item.className="light"
  Modebtn.style.backgroundColor = "bla"
  Modebtn.style.color = "#fff"
}else{
  Modebtn.innerHTML="Light"
  item.className="dark"
  Modebtn.style.backgroundColor = "#fff"
  Modebtn.style.color = "black"
}

