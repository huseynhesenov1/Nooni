const loginInput = document.querySelectorAll(".form-control");
const loginForm = document.querySelector("form")
const myAlert = document.querySelector("#myalert")

const authLogin = (e) =>{
    e.preventDefault();
    if (!loginInput[0].value || !loginInput[1].value || !loginInput[2].value || !loginInput[3].value || !loginInput[4].value) {
        myAlert.className = "alert alert-warning"
        myAlert.innerHTML = "Please, fill inputs"
    }else{
        if (loginInput[3].value !== loginInput[4].value) {
            myAlert.className = "alert alert-danger"
        myAlert.innerHTML = "Password is different"
        }else{
            myAlert.className = "alert alert-success"
        myAlert.innerHTML = "Welcome to system"
        localStorage.setItem("fullname",loginInput[0].value)
        localStorage.setItem("email",loginInput[2].value)
        localStorage.setItem("password",loginInput[3].value)
        localStorage.setItem("login","false");
        window.location.assign("login.html")
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

