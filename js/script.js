// console.log("hellow from JS");
const tagName = document.getElementsByTagName("li");
//   console.log(tagName);
for (const li of tagName) {
  //   console.log(li.innerHTML);
}
const persons = document.getElementsByClassName("person-name");
for (const person of persons) {
  // console.log(person.innerText);
}

const uniqeName =
  ((document.getElementById("jamal").style.color = "red"),
  (document.getElementById("jamal").style.backgroundColor = "green"),
  (backgroundColor = "blue"));
uniqeName.innerText = "kire mama ki khobor";
