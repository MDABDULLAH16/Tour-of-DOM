const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid yellow";
  section.style.margin = "10px";
  section.style.padding = "10px";
  section.style.backgroundColor = "lightgray";
  section.style.borderRadius = "10px";
}
const headings = document.getElementsByClassName("section-heading");
for (const heading of headings) {
  heading.style.color = "tomato";
}
const visited = document.getElementsByClassName("visited-places");
for (const visit of visited) {
  // styles under the ul
  visit.style.color = "green";
}
const fruits = document.getElementById("fruits-collection");
fruits.style.background = "lightblue";
