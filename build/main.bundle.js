"use strict";

window.onload = function () {
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }
  console.log("values");
  values.map(function (n) {
    var li = document.createElement("li");
    var t = document.createTextNode(n);
    li.appendChild(t);
    li.setAttribute("id", n);
    li.onclick = function () {
      localStorage.removeItem(n);
      document.getElementById(n).style.display = "none";
    };
    document.getElementById("myul").appendChild(li);
    console.log(li);
  });
};
var add = function add() {
  var x = document.getElementById("text").value;
  if (x !== "") {
    localStorage.setItem(x, x);
    var y = localStorage.getItem(x);
    var li = document.createElement("li");
    li.setAttribute("id", x);
    li.onclick = function () {
      localStorage.removeItem(x);
      document.getElementById(x).style.display = "none";
    };
    var inputValue = y;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("text").value = "";
    document.getElementById("myul").appendChild(li);
  } else {
    alert("Enter some value");
  }
};
