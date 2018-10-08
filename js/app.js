"use strict";

let catName=['Cat 1','Cat 2','Cat 3','Cat 4','Cat 5'];

let parent=document.getElementById("catlist");
let catlist='';
for(let i = 0; i < catName.length; i++) {
	catlist += '<div id="list_'+catName[i]+'">'+catName[i]+'</div>';
}
parent.innerHTML=catlist;

function catFunctionality(catName,clickId,imgSource) {
	let clicks=0;
	function getClicks() {
		clicks++;
		document.getElementById(clickId).innerHTML=clicks;
	}

	let parent=document.getElementById("images");
	let newElement=document.createElement("div");
	newElement.innerHTML='<h3>'+catName+'</h3><button id="'+catName+'"><img src="'+imgSource+'"></button><p>Number of clicks:<span id="'+clickId+'">0</span></p>'

	parent.appendChild(newElement);
	parent.replaceChild(newElement,parent.childNodes[0]);

	let cat=document.getElementById(catName);
	cat.addEventListener("click", getClicks);
}

//catFunctionality("Cat 1","Click1","images/cat.jpg");
//catFunctionality("Cat 2","Click2","images/cat2.jpg");
//catFunctionality("Cat 3","Click3","images/cat3.jpg");
//catFunctionality("Cat 4","Click4","images/cat4.jpg");
//catFunctionality("Cat 5","Click5","images/cat5.jpg");
document.getElementById("list_Cat 1").addEventListener("click",function() {
	catFunctionality("Cat 1","Click1","images/cat.jpg");
});
document.getElementById("list_Cat 2").addEventListener("click",function() {
	catFunctionality("Cat 2","Click2","images/cat2.jpg");
});
document.getElementById("list_Cat 3").addEventListener("click",function() {
	catFunctionality("Cat 3","Click3","images/cat3.jpg");
});
document.getElementById("list_Cat 4").addEventListener("click",function() {
	catFunctionality("Cat 4","Click4","images/cat4.jpg");
});
document.getElementById("list_Cat 5").addEventListener("click",function() {
	catFunctionality("Cat 5","Click5","images/cat5.jpg");
});