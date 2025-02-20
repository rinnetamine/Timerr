// change img on dark mode variant
function dark_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var image = document.getElementById("time_rr");
  if (image.src.includes("media/time_rr.png")) {
    image.src = "media/time_rr_dark.png";
  } else {
    image.src = "media/time_rr.png";}

  var image = document.getElementById("list");
  if (image.src.includes("media/list.png")) {
    image.src = "media/list_dark.png";
  } else {
    image.src = "media/list.png";
  }

  var image = document.getElementById("offer");
  if (image.src.includes("media/offer.png")) {
    image.src = "media/offer_dark.png";
  } else {
    image.src = "media/offer.png";}

  var image = document.getElementById("request");
  if (image.src.includes("media/request.png")) {
    image.src = "media/request_dark.png";
  } else {
    image.src = "media/request.png";}

  }

// modal buttons appearing and closing func
const openModalBtn1 = document.getElementById("openModalBtn1");
const openModalBtn2 = document.getElementById("openModalBtn2");
const openModalBtn3 = document.getElementById("openModalBtn3");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");

const closeBtns = document.getElementsByClassName("close");

openModalBtn1.onclick = function() {
  modal1.style.display = "flex";
}

openModalBtn2.onclick = function() {
  modal2.style.display = "flex";
}

openModalBtn3.onclick = function() {
  modal3.style.display = "flex";
}

for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
}

// mobile version hamburger menu oppening
function toggleMenu() {
  const menu = document.getElementById("mobile-only");
  const hamburger = document.getElementById("hamburger");
  
  menu.classList.toggle("active");
  hamburger.classList.toggle("open");
}


// login modal 
document.getElementById("loginBtn").addEventListener("click", openLoginModal);

function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

function toggleToRegister() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("registerModal").style.display = "block";
}

function toggleToLogin() {
  document.getElementById("registerModal").style.display = "none";
  document.getElementById("loginModal").style.display = "block";
}

document.getElementById("loginForm").onsubmit = function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
    closeLoginModal();
  } else {
    document.getElementById("errorMessage").innerText = "Invalid credentials!";
  }
};

document.getElementById("registerForm").onsubmit = function(event) {
  event.preventDefault();

  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;

  localStorage.setItem('username', newUsername);
  localStorage.setItem('password', newPassword);

  document.getElementById("registerMessage").innerText = "Registration successful! You can now log in.";
  setTimeout(() => {
    toggleToLogin(); 
  }, 2000);
};

function closeRegisterModal() {
  document.getElementById("registerModal").style.display = "none";
  document.getElementById("loginModal").style.display = "block";
}