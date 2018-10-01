"use strict";

let clicks=0;

function getClicks() {
	clicks++;
	document.getElementById("clicks").innerHTML=clicks;
}

var catImage=document.getElementById("catImage");

catImage.addEventListener("click", getClicks);
