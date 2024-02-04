const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Uzupełnij wszystkie pola!");
  } else {
    console.log({ email: email.value, password: password.value });
    registerForm.reset();
  }
}
