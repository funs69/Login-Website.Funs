document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi sederhana (email & password harus diisi)
  if(email === "admin@gmail.com" && password === "12345") {
    window.location.href = "home.html";
  } else {
    alert("Email atau Password salah!");
  }
});