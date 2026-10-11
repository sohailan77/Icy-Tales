// hamburger menu toggle functionality
const toggleButton = document.getElementById("nav-toggle");
const anchortags = document.getElementById("anchortags");

toggleButton.addEventListener("click", () => {
  anchortags.classList.toggle("onclick");
});

// nav toggle theme button functionality
const btn = document.querySelector("#mode");
const body = document.querySelector("body");

// Check saved theme when the page loads
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  btn.children[0].className = "fa-solid fa-sun";
} else {
  body.classList.add("light");
  btn.children[0].className = "fa-solid fa-moon";
}

// Toggle between light and dark mode
btn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");

    localStorage.setItem("theme", "light");

    btn.children[0].className = "fa-solid fa-moon";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");

    localStorage.setItem("theme", "dark");

    btn.children[0].className = "fa-solid fa-sun";
  }
});
