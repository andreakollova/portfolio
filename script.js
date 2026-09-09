let githubElement = document.querySelector(".github");
githubElement.setAttribute("href", "https://github.com/andreakollova");
console.log(githubElement.getAttribute("href"));


let doHeader = document.getElementById("meno");
let doZrucnosti = document.querySelector(".zrucnosti");


let newElement = document.createElement("div");
newElement.textContent = "Toto je novy element";


document.getElementById("meno").appendChild(newElement);

doZrucnosti.appendChild(newElement);


newElement.setAttribute("id", "new")
console.log(newElement.getAttribute("id"))

document.getElementById("kontakt").addEventListener("click", function(){
alert("Button was clicked")
})