// Page Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const mobilenav = document.getElementById("mobilenav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobilenav.classList.toggle("open");
});

mobilenav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobilenav.classList.remove("open");
  });
});

// Active Section in Navigation bar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Form Submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Send form data to API endpoint
  fetch("YOUR_API_ENDPOINT", { method: "POST", body: new FormData(this) })
    .then((response) => response.json())
    .then((data) => alert("Message sent!"))
    .catch((error) => console.error("Error:", error));
});
