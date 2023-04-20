// var text = document.getElementById("harga");
// var drop = document.getElementById("event");
// drop.addEventListener("change", function (e) {
//   text.textContent = "Rp. " + e.target.value;
// });

// // function submit() {
// //   // if (!this.form.checkbox.checked) {
// //   //   alert("You must agree to the terms first.");
// //   //   return false;
// //   // }
// //   alert("Thankyou for submitting this form!");
// // }

// // function validate() {
// //   let checkbox = document.getElementById("agree_document");
// //   if (!checkbox.checked) {
// //     text.innerHTML = "Please accept";
// //   }
// // }

// const form = document.querySelector("#form");
// const submitButton = document.querySelector("#submit");
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbw4A5HfuOL4CQfhZFwB_kDzGgkuzAVVYMjHYcho75TOPZnJdVe-qDZWJQA2py8UqPoooQ/exec";

// form.addEventListener("submit", (e) => {
//   submitButton.disabled = true;
//   e.preventDefault();
//   let requestBody = new FormData(form);
//   fetch(scriptURL, { method: "POST", body: requestBody })
//     .then((response) => {
//       alert("Success!", response);
//       submitButton.disabled = false;
//     })
//     .catch((error) => {
//       alert("Error!", error.message);
//       submitButton.disabled = false;
//     });
// });
