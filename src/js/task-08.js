const form = document.querySelector("form.login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Please enter both email and password!");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
}
