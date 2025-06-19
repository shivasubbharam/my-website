function login(event) {
  event.preventDefault();
  const username = document.getElementById("usernamewer").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "admin" && password === "admin123") {
    message.style.color = "green";
    message.innerText = "Login successful!";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid credentials! Try admin / admin123.";
  }
}
