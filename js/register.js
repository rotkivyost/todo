window.name = 'register'
let regEmail = document.querySelector(".email");
let regPassword = document.querySelector(".password");
let form = document.querySelector(".submitBtn");
let err = document.querySelector(".error")
let reserve = false;
const userData = {};

form.addEventListener("click", () => {
  if (regEmail.value && regPassword.value) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      if (key === regEmail.value) {
        err.textContent = 'Данный электронный адрес уже зарегестрирован';
        reserve = true;
      }
    }
    if (regEmail.value.includes('@') && reserve != true) {
      userData[regEmail.value] = regPassword.value;
      localStorage.setItem(String(regEmail.value), regPassword.value);
      err.textContent = 'Поздравляем! Вы успешно зарегистрировались!';
      setTimeout(() => {
        document.location.href = './auth.html'
      }, 1500);
    }
  } else {
    alert("Введите email и пароль");
  }
});
