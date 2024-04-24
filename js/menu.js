const learnSection = document.getElementById("learning");
const dashboardSection = document.getElementById("card-listing");
const aboutSection = document.getElementById("about");

const dashboardButton = document.getElementById("dashboardButton");
const learnButton = document.getElementById("learnButton");
const aboutButton = document.getElementById("aboutButton");
const themeToggle = document.getElementById("theme-toggle-checkbox");

dashboardButton.addEventListener("click", () => {
  dashboardSection.style.display = "grid";
  aboutSection.style.display = "none";
  learnSection.style.display = "none";
  if (!themeToggle.checked){
    dashboardButton.style.backgroundColor = "#3d3d3d";
    learnButton.style.backgroundColor = "#494949";
    aboutButton.style.backgroundColor = "#494949";
  }

});
learnButton.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  aboutSection.style.display = "none";
  learnSection.style.display = "inherit";
  if (!themeToggle.checked){
    dashboardButton.style.backgroundColor = "#494949";
    learnButton.style.backgroundColor = "#3d3d3d";
    aboutButton.style.backgroundColor = "#494949";
  }

});
aboutButton.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  aboutSection.style.display = "inherit";
  learnSection.style.display = "none";
  if (!themeToggle.checked){
    dashboardButton.style.backgroundColor = "#494949";
    learnButton.style.backgroundColor = "#494949";
    aboutButton.style.backgroundColor = "#3d3d3d";
  }

});

learnSection.style.display = "none";
dashboardSection.style.display = "grid";
aboutSection.style.display = "none";
