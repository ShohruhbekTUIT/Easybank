let elBtn = document.querySelector("#img-btn");
let elBox = document.querySelector(".rasm");
let elCancel = document.querySelector(".cancel");

elBtn.addEventListener("click" , () => {
  elBox.style.display = "block";
})

elCancel.addEventListener("click" , () =>{
  elBox.style.display = "none";
})