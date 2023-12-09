const visited = document.getElementsByClassName("visited-places");
for (const visit of visited) {
  // styles under the ul
  visit.style.color = "green";
}
const fruits = document.getElementById("fruits-collection");
fruits.style.background = "lightblue";
// added fruit item with js
const added_fruits = document.getElementById("fruit-list");
const li1 = document.createElement("li");
li1.innerText = "Alu vorta";
added_fruits.appendChild(li1);

//new section added
const section_container = document.getElementById("section-container");
const section = document.createElement("section");
section_container.appendChild(section);
// console.log(section);
const h2 = document.createElement("h2");
h2.innerText = "Shopping Cart";
h2.classList.add("section-heading");
// console.log(h2);
section.appendChild(h2);
const ulList = document.createElement("ul");
section.appendChild(ulList);
const Shoppingli1 = document.createElement("li");
Shoppingli1.innerText = "HP Laptop 5G Core i5";
ulList.appendChild(Shoppingli1);

const Shoppingli2 = document.createElement("li");
Shoppingli2.innerText = "Lanevo prime j4";
ulList.appendChild(Shoppingli2);

const Shoppingli3 = document.createElement("li");
Shoppingli3.innerText = "Oppo reno 8t";
ulList.appendChild(Shoppingli3);

const Shoppingli4 = document.createElement("li");
Shoppingli4.innerText = "Realme Narzo 30A";
ulList.appendChild(Shoppingli4);

const dressUP_container = document.createElement("section");
dressUP_container.innerHTML = `
<h2 class="section-heading">My favourite Dress collection </h2>
<ul> 
<li>T-shirt </li>
<li>Longgi </li>
<li>Genji </li>
<li>Pants </li>
</ul>
`;

section_container.appendChild(dressUP_container);
