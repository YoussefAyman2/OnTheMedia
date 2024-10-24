// Script File
//back to top page on reload
$(window).on("load", function () {
  $(window).scrollTop(0);
});
//Disable left click
// document.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
// });
document.querySelectorAll(".carousel-item").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

//Testmonials Slider
$(document).ready(function () {
  $(".carousel").carousel({
    duration: 300, // The transition speed when moving to the next slide
  });

  // Auto-loop function for automatic sliding every 6 seconds (6000 ms)
  function autoplay() {
    $(".carousel").carousel("next");
  }

  // Call the autoplay function every 6 seconds
  setInterval(autoplay, 6000);
});

// Show/Hide Menu  When Scrolling
var homeSection = document.querySelector(".navbar");
window.addEventListener("scroll", pageScrollFunction);
window.addEventListener("load", pageScrollFunction);
function pageScrollFunction() {
  if (window.scrollY > 90) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}
/// Form Communication
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  if (!validateForm(form)) return;

  const inputs = document.querySelectorAll("input");
  const textareas = document.querySelectorAll("textarea");
  let allFields = [...inputs, ...textareas];
  allFields.forEach((field) => {
    field.addEventListener("input", () => {
      removeError(field);
    });
  });
});
const validateForm = (form) => {
  let valid = true;
  let name = form.querySelector(".name");
  let message = form.querySelector(".message");
  let email = form.querySelector(".email");
  if (name.value == "") {
    giveError(name, "Please enter your name");
    valid = false;
  }
  if (message.value == "") {
    giveError(name, "Please enter your message");
    valid = false;
  }

  let emailrejex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let emailvalue = email.value;

  if (!emailrejex.test(emailvalue)) {
    giveError(email, "Please enter a valid email");
    valid = false;
  }
};
const giveError = (field, message) => {
  let parentElement = field.parentElement;
  parentElement.classList.add("error");
  let exisitingError = parentElement.querySelector(".err-msg");
  if (exisitingError) {
    exisitingError.remove();
  }
  let error = document.createElement("span");
  error.textContent = message;
  error.classList.add("err-msg");
  parentElement.appendChild(error);
};

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
let allFields = [...inputs, ...textareas];
allFields.forEach((field) => {
  field.addEventListener("input", () => {
    removeError(field);
  });
});

const removeError = (field) => {
  let parentElement = field.parentElement;
  parentElement.classList.remove("error");
  let error = parentElement.querySelector(".err-msg");
  if (error) {
    error.remove();
  }
};

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.querySelector(".btn-icon");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.opacity = "1";
  } else {
    scrollProgress.style.opacity = "0";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#2196f3 ${scrollValue}%,#d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

new WOW().init();
// When the user scrolls the page, execute this function
window.onscroll = function () {
  scrollFunction();
};

const togglebtn = document.querySelector(".toggle-btn");
const togglebtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");
togglebtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  togglebtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.querySelector(".navbar");

  // Add 'scrolled' class when the user scrolls more than 50px
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
