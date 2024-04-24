const learnSection = document.getElementById("learning");
const dashboardSection = document.getElementById("card-listing");
const aboutSection = document.getElementById("about");
const logVisitSection = document.getElementById("log-visit")

const dashboardButton = document.getElementById("dashboardButton");
const learnButton = document.getElementById("learnButton");
const aboutButton = document.getElementById("aboutButton");
const logVisitButton = document.getElementById("logVisitButton");
const themeToggle = document.getElementById("theme-toggle-checkbox");


logVisitButton.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  aboutSection.style.display = "none";
  learnSection.style.display = "none";
  logVisitSection.style.display = "inherit";



});
dashboardButton.addEventListener("click", () => {
  dashboardSection.style.display = "grid";
  aboutSection.style.display = "none";
  learnSection.style.display = "none";
  logVisitSection.style.display = ""
  


});
learnButton.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  aboutSection.style.display = "none";
  learnSection.style.display = "inherit";
  logVisitSection.style.display = ""
  


});
aboutButton.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  aboutSection.style.display = "inherit";
  learnSection.style.display = "none";
  logVisitSection.style.display = ""
  


});

learnSection.style.display = "none";
dashboardSection.style.display = "grid";
aboutSection.style.display = "none";
