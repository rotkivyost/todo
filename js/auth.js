window.name = 'auth';
let authEmail = document.querySelector(".email");
let authPassword = document.querySelector(".password");
let err = document.querySelector(".error");
let form = document.querySelector(".submitBtn");
let authorizationEmail = false;
let authorizationPass = false;
let key;
let value;

form.addEventListener("click", (event) => {
  event.preventDefault()
  if (authEmail.value && authPassword.value) {
    for (let i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i)
      if (key === authEmail.value) {
        authorizationEmail = true;
        for (let j = 0; j < localStorage.length; j++) {
          value = localStorage.getItem(localStorage.key(j));
          if (value === authPassword.value) {
            authorizationPass = true;
          }
        }
      } 
    }
    if (authorizationEmail && authorizationPass) {
      document.location.href = './index.html'
    } else {
      err.textContent = 'Введен неверный логин или пароль'
    }
  } else {
    alert("Введите email и пароль");
  }
});