console.log("this is my first line of code");

var blueBox = document.getElementById("blue-box");
var button = document.getElementById("button");

console.log(blueBox);

button.onclick = function() {
    blueBox.style.backgroundColor = "aqua";
};