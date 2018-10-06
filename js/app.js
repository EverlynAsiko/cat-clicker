"use strict";

let clicks=0;
let clicks2=0;

function getClicks() {
	clicks++;
	document.getElementById("clicks").innerHTML=clicks;
}

let cat1=document.getElementById("cat1");

cat1.addEventListener("click", getClicks);

let parent=document.getElementById("main");
let newElement=document.createElement("div");
newElement.innerHTML='<h3>Cat 2</h3><button id="cat2"><img src="images/cat2.jpg"></button><p>Number of clicks:<span id="clicks2">0</span></p>'

parent.appendChild(newElement);

function getClicks2() {
	clicks2++;
	document.getElementById("clicks2").innerHTML=clicks2;
}

let cat2=document.getElementById("cat2");
cat2.addEventListener("click", getClicks2);