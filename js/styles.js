// js styles
const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid yellow";
  section.style.margin = "10px";
  section.style.padding = "10px";
  section.style.backgroundColor = "lightgray";
  section.style.borderRadius = "10px";
}
//heading styles
const headings = document.getElementsByClassName("section-heading");
for (const heading of headings) {
  heading.style.color = "tomato";
}
