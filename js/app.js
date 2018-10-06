"use strict";

function catFunctionality(catName,clickId,imgSource) {
	let clicks=0;
	function getClicks() {
		clicks++;
		document.getElementById(clickId).innerHTML=clicks;
	}

	let parent=document.getElementById("main");
	let newElement=document.createElement("div");
	newElement.innerHTML='<h3>'+catName+'</h3><button id="'+catName+'"><img src="'+imgSource+'"></button><p>Number of clicks:<span id="'+clickId+'">0</span></p>'

	parent.appendChild(newElement);

	let cat=document.getElementById(catName);
	cat.addEventListener("click", getClicks);
}

catFunctionality("Cat 1","Click1","images/cat.jpg");
catFunctionality("Cat 2","Click2","images/cat2.jpg");