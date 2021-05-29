const scriptURL =
  "https://script.google.com/macros/s/AKfycbz5O62WRczTtWXU3dZsG0gJOhhcZIrOla1W6VgBI5SD5jOFyP4WVWQMSq9JcCYuTJ2gTA/exec";
const form = document.forms["form-control"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert(`${form}`);
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
