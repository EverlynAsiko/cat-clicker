"use strict";

let clicks=0;

function getClicks() {
	clicks++;
	document.getElementById("clicks").innerHTML=clicks;
}

var cat1=document.getElementById("cat1");

cat1.addEventListener("click", getClicks);

let parent=document.getElementById("main");
let newElement=document.createElement("div");
newElement.setAttribute("id", "cat2");
newElement.innerHTML='<button id="cat1"><img src="images/cat2.jpg"></button><p>Number of clicks:<span id="clicks">0</span></p>'

parent.appendChild(newElement);