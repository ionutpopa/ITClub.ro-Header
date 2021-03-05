let menu = document.querySelector(".ham");
let topnav = document.querySelector(".topnav");
let links = document.getElementById("links");

const openHam = () => {
  menu.classList.toggle("opened");
  menu.setAttribute("aria-expanded", menu.classList.contains("opened"));

  if (links.style.display === "block") {
    topnav.style = `
    animation: close 300ms;
    -webkit-animation: close 300ms;
    `;
    links.style.display = "none";
  } else {
    links.style.display = "block";
    topnav.style = `
    animation: open 300ms;
    -webkit-animation: open 300ms;
    `;
  }
};
