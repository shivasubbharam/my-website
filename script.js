function login(event) {
  event.preventDefault();
  const username = document.getElementById("Username65").value;
  const password = document.getElementById("password65").value;
  const message = document.getElementById("message");

  if (username === "admin" && password === "admin123") {
    message.style.color = "green";
    message.innerText = "Login successful!";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid credentials! Try admin / admin123.";
  }
}












