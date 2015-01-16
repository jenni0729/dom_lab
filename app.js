// Your code here

//var initialize = function (){
	//console.log("Window done loading page");
	//changeGreeting();
	//listItems();
	//document.querySelector("#reset")
//}



//window.addEventListener("load", function ()){
	//document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";

//};

function changeGreeting(){
	document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";
}

//recfactoring: cleaning up code as well as possible.//

//
var initialize = function () {
  changeGreeting();
  changeBackground();
  changeClass();
  // REMEMBER YOU CAN MODULARIZE
};

var items = document.getElementsByTagName("li");

function changeBackground(){
for(var i = 0; i < items.length; i++) {
	items[i].style.backgroundColor = "yellow";
	}
}

//items.addEventlistener("click", changeClass);

// function changeClass(){
// 	for(var i = 0; i < items.length; i++) {
// 	items[i].className = "selected";
// 	}
// }

// var items = document.getElementsByTagName("li");
// console.log("items", items);

// for(var i = 0; i < items.length; i++) {
// 	var listItem = items[i];
// 	listItem.style.borderBottom = "solid black 1px";
// 	console.log("listItem", listItem);
// }

// var datatypes = document.getElementsByClassName("datatype");
// //console.log("datatypes", datatypes);
// for(var i = 0; i < datatypes.length; i++) {
// 	datatypes[i].style.color = "red";


window.onload = initialize;

//function
