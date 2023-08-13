let check = document.querySelector("#check");
let password = document.querySelector("#pass");
let label = document.querySelector("#passLabel");
let email = document.querySelector("#mail");
let emailLable = document.querySelector("#email");
let errorMsg = document.getElementById("para");
let subBtn = document.querySelector("#sub_btn");
let form = document.querySelector(".form");
// form.addEventListener("submit",(e)=>{
//   e.preventDefault()
// })
// subBtn.addEventListener("click",()=>{
//   setTimeout(()=>{
//     errorMsg.style.display='none'
//   },1000)
// })
check.addEventListener("click", () => {
  // password part
  if (password.value.length > 0) {
    label.classList.add("top");
  } else {
    label.classList.remove("top");
  }

  // Email part

  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
password.addEventListener("focus", () => {
  emailLable.classList.add("top");
});
document.querySelector(".home").addEventListener("click", () => {
  if (password.value.length > 0) {
    label.classList.add("top");
  } else {
    label.classList.remove("top");
  }
});
