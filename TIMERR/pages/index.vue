<template>
    <div>
      <header>
        <h1>Timerr</h1>
        <nav>
          <!-- Desktop Menu -->
          <ul id="pc-only">
            <li><a href="home.html">Browse</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
  
            <li class="dropdown">
              <a href="services.html" class="drop">Services ⮟</a>
              <ul class="dropdown-content">
                <li class="dropdown">
                  <a href="list.html" class="drop">List ⮟</a>
                  <ul class="dropdown-content nested">
                    <li><a href="#">Hottest</a></li>
                    <li><a href="#">Newest</a></li>
                  </ul>
                </li>
                <li><a href="request.html" class="drop">Request</a></li>
                <li><a href="offer.html">Offer</a></li>
              </ul>
            </li>
            <li><a href="#" @click="openLoginModal">Login</a></li>
            <li><a id="dark-mode-button" @click="toggleDarkMode">Dark mode</a></li>
          </ul>
  
          <!-- Hamburger Icon -->
          <div id="hamburger" class="hamburger" @click="toggleMenu">&#9776;</div>
  
          <!-- Mobile Menu -->
          <ul id="mobile-only" :class="{ active: mobileMenuOpen }">
            <div id="hamburger" @click="toggleMenu">&times;</div>
            <li><a href="home.html">Browse</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
              <a href="services.html">Services</a>
              <ul class="service-submenu">
                <li>
                  <a href="list.html">List</a>
                  <ul class="service-submenu-nested">
                    <li><a href="#">Hottest</a></li>
                    <li><a href="#">Newest</a></li>
                  </ul>
                </li>
                <li><a href="request.html">Request</a></li>
                <li><a href="offer.html">Offer</a></li>
              </ul>
            </li>
            <li><a id="dark-mode-button" @click="toggleDarkMode">Dark mode</a></li>
            <li><a href="#" @click="openLoginModal">Login</a></li>
          </ul>
  
          <!-- Login Modal -->
          <div id="loginModal" class="modal" v-if="showLogin">
            <div class="modal-content">
              <span class="close" @click="closeLoginModal">&times;</span>
              <h2>Login</h2>
              <form>
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
              </form>
              <button type="submit" class="button-login">Login</button>
              <p style="color:red;"></p>
              <button class="button-register" @click="toggleToRegister">Register</button>
            </div>
          </div>
  
          <!-- Register Modal -->
          <div id="registerModal" class="modal" v-if="showRegister">
            <div class="modal-content">
              <span class="close" @click="closeRegisterModal">&times;</span>
              <h2>Register</h2>
              <form>
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
              </form>
              <button type="submit" class="button-login">Register</button>
              <p style="color:red;"></p>
              <button class="button-register" @click="toggleToLogin">Back to Login</button>
            </div>
          </div>
        </nav>
      </header>
  
      <main>
        <section class="what-is-timerr">
          <h2>What is Timerr?</h2>
          <p>Timerr is a web platform that combines the ideas of Fiverr and TimeBank.</p>
        </section>
  
        <div class="how-it-works">
          <section class="how-timerr-works">
            <h2>How does Timerr work?</h2>
            <p>Timerr allows users to offer services to others in exchange for time.</p>
          </section>
          <img id="time_rr" :src="darkMode ? 'media/time_rr_dark.png' : 'media/time_rr.png'" width="500" height="500" />
        </div>
  
        <section class="key-features">
          <h2>Key Features</h2>
          <ul>
            <li><b>Profile Management:</b> Create and edit your profile.</li>
            <li><b>Search and Request Services:</b> Find or request services.</li>
            <li><b>Service Verification:</b> Admins approve services.</li>
            <li><b>Time Management:</b> Manage your time credits.</li>
          </ul>
        </section>

  
      <div class="flex-container">
        <div class="card" @click="openCardModal(1)">
            <div class="card-content">
          <img :src="darkMode ? 'media/list_dark.png' : 'media/list.png'" alt="List requests">
            <h3>List offers!</h3>
            <p>Search from already available services.</p>
            <button class="button-3" role="button">Learn More!</button>
          </div>
        </div>
  
        <div class="card" @click="openCardModal(2)">
            <div class="card-content">
          <img :src="darkMode ? 'media/request_dark.png' : 'media/request.png'" alt="Request services">
            <h3>Request services!</h3>
            <p>Ask for help if you can't find from available.</p>
            <button class="button-3" role="button">Learn More!</button>
          </div>
        </div>
  
        <div class="card" @click="openCardModal(3)">
            <div class="card-content">
          <img :src="darkMode ? 'media/offer_dark.png' : 'media/offer.png'" alt="Offer services">
            <h3>Offer services!</h3>
            <p>Earn your time by offering something.</p>
            <button class="button-3" role="button">Learn More!</button>
          </div>
        </div>
      </div>
    </main>

      <!-- Card Modals -->
      <div v-if="cardModal === 1" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeCardModal">&times;</span>
          <p>Search for needed services from what's already on site!</p>
        </div>
      </div>
  
      <div v-if="cardModal === 2" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeCardModal">&times;</span>
          <p>Can't find something you need? Ask someone!</p>
        </div>
      </div>
  
      <div v-if="cardModal === 3" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeCardModal">&times;</span>
          <p>Not enough hours? Offer something and do your best!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, watch } from 'vue'

const darkMode = ref(false)
const mobileMenuOpen = ref(false)
const showLogin = ref(false)
const showRegister = ref(false)
const cardModal = ref(0)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}

// Modal controls
const openLoginModal = () => {
  showLogin.value = true
  showRegister.value = false
}

const closeLoginModal = () => {
  showLogin.value = false
}

const openCardModal = (index) => {
  cardModal.value = index
}

const closeCardModal = () => {
  cardModal.value = 0
}

const toggleToRegister = () => {
  showLogin.value = false
  showRegister.value = true
}

const toggleToLogin = () => {
  showRegister.value = false
  showLogin.value = true
}

const closeRegisterModal = () => {
  showRegister.value = false
}

// ✅ DOM-safe dark mode toggle
onMounted(() => {
  watch(darkMode, (val) => {
    if (val) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, { immediate: true })
})
</script>

  
  <style scoped>
/* Global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html, body {
  font-family: 'Poppins', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  line-height: 1.6;
  transition: all 0.3s ease-in-out;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
}

.dark-mode {
  background-color: #303030;
  color: white;
}

h1, h2, p {
  transition: color 0.3s ease;
}

/* Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: linear-gradient(90deg, rgba(186,0,93,1) 0%, rgba(22,0,11,1) 100%);
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 4px solid #6a0035;
}

header h1 {
  font-size: 2.5em;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 2px white;
  margin-left: 20px;
}

.dark-mode header {
  background: linear-gradient(90deg, rgba(22,0,11,1) 0%, rgba(186,0,93,1) 100%);
  color: white;
}

nav {
  margin-right: 20px;
}

nav ul {
  display: flex;
  list-style-type: none;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

nav ul li a:hover {
  background: white;
  color: #99004c;
  border-radius: 5px;
}

/* Dropdowns */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content li a {
  color: #333;
  padding: 12px 16px;
  display: block;
  text-decoration: none;
}

.dropdown-content li a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover > .dropdown-content {
  display: block;
}

.nested {
  display: none;
  position: absolute;
  top: 0;
  right: 100%;
}

.dropdown-content .dropdown:hover > .nested {
  display: block;
}

.dark-mode .dropdown-content {
  background-color: #5c5c5c;
}

.dark-mode .dropdown-content li a {
  color: white;
}

.dark-mode .dropdown-content li a:hover {
  background-color: #777;
}

/* Hamburger Menu */
#hamburger {
  display: none;
  font-size: 2em;
  color: white;
  cursor: pointer;
}

#mobile-only {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100%;
  background-color: #333;
  transition: right 0.3s ease;
  padding-top: 60px;
  list-style: none;
}

#mobile-only.active {
  right: 0;
}

#mobile-only li {
  padding: 10px;
}

#mobile-only a {
  color: white;
  text-decoration: none;
}

/* Responsive nav */
@media only screen and (max-width: 600px) {
  #pc-only {
    display: none;
  }

  #hamburger {
    display: block;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin-bottom: 10px;
  }

  header h1 {
    font-size: 2em;
  }
}

/* Main layout */
main {
  width: 100%;
  margin: 0;
  padding: 20px 0;
  margin-top: 60px; /* Adjust based on your header height */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

/* Sections */
.what-is-timerr,
.how-timerr-works,
.key-features {
  width: 100%;
  max-width: 800px;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin: 0 auto;
}

.what-is-timerr:hover,
.how-timerr-works:hover,
.key-features:hover {
  transform: translateY(-5px);
}

.what-is-timerr h2,
.how-timerr-works h2,
.key-features h2 {
  font-size: 2.2em;
  margin-bottom: 15px;
  font-weight: 600;
  color: #cc0066;
}

.what-is-timerr p,
.how-timerr-works p,
.key-features ul li {
  font-size: 1.1em;
  line-height: 1.75;
  color: #555;
}

/* How it works layout */
.how-it-works {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
}

.how-it-works img {
  width: 45%;
  height: auto;
}

@media (max-width: 768px) {
  .how-it-works {
    flex-direction: column;
  }

  .how-it-works img {
    width: 100%;
  }
}

/* Features list */
.key-features ul {
  list-style-type: none;
  padding-left: 20px;
}

.key-features ul li::before {
  content: '•';
  color: #cc0066;
  font-size: 1.4em;
  position: absolute;
  left: -15px;
  top: -2px;
}

.key-features ul li {
  position: relative;
  margin-bottom: 15px;
}

/* Cards */
.flex-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
  border-radius: 8px;
}

.card h3 {
  font-size: 1.8em;
  color: #cc0066;
}

.card p {
  color: #555;
}

/* Buttons */
.button-3 {
  background-color: #b93059;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-3:hover {
  background-color: #ff0000;
  transform: scale(1.05);
}

/* Modals */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  text-align: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

/* Dark mode styling */
body.dark-mode main,
body.dark-mode html,
body.dark-mode .what-is-timerr,
body.dark-mode .how-timerr-works,
body.dark-mode .key-features,
body.dark-mode .card {
  background-color: #424242 !important;
  color: #f0f0f0;
}

body.dark-mode .card h3 {
  color: #ff66a3;
}

body.dark-mode .card p {
  color: #e0e0e0;
}

body.dark-mode .button-3 {
  background-color: #cc0066;
}

body.dark-mode .button-3:hover {
  background-color: #ff3385;
}

/* Dark Mode Styling */
body.dark-mode {
  background-color: #1e1e1e;
  color: #e0e0e0;
}

/* Smooth transitions */
body.dark-mode *,
body.dark-mode *::before,
body.dark-mode *::after {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Section backgrounds */
body.dark-mode main,
body.dark-mode .what-is-timerr,
body.dark-mode .how-timerr-works,
body.dark-mode .key-features,
body.dark-mode .modal,
body.dark-mode .card {
  background-color: #2a2a2a;
  color: #f0f0f0;
  border: 1px solid #444;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

/* Section titles */
body.dark-mode h1,
body.dark-mode h2,
body.dark-mode h3 {
  color: #ff66a3;
}

/* Paragraphs */
body.dark-mode p,
body.dark-mode li {
  color: #cccccc;
}

/* Lists */
body.dark-mode .key-features ul li::before {
  color: #ff66a3;
}

/* Buttons */
body.dark-mode .button-3 {
  background-color: #cc0066;
  color: #ffffff;
  border: none;
}

body.dark-mode .button-3:hover {
  background-color: #ff3385;
}

/* Cards */
body.dark-mode .card h3 {
  color: #ff66a3;
}

body.dark-mode .card p {
  color: #ddd;
}

/* Modals */
body.dark-mode .modal-content {
  background-color: #2e2e2e;
  color: #ffffff;
}

body.dark-mode .close {
  color: #ff66a3;
}

/* Dropdown menus */
body.dark-mode .dropdown-content {
  background-color: #3a3a3a;
}

body.dark-mode .dropdown-content li a {
  color: #fff;
}

body.dark-mode .dropdown-content li a:hover {
  background-color: #4a4a4a;
}

/* Modal dark mode */
.dark-mode .modal {
  background-color: rgba(0, 0, 0, 0.7);
}

.dark-mode .modal-content {
  background-color: #333;
  color: #eaeaea;
}

.dark-mode .close {
  color: #eaeaea;
}
  </style>
  