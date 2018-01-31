"use strict";

window.onload = function () {
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
    console.log(localStorage.getItem(keys[i][0]));
  }
  console.log("values");
  values.map(function (n) {
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    btn.setAttribute("id", n);
    var btntext = document.createTextNode("DELETE");
    btn.appendChild(btntext);
    btn.className = "deletebtn";
    btn.onclick = function () {
      localStorage.removeItem(n);
      document.getElementById(n).style.display = "none";
    };
    var t = document.createTextNode(n);
    li.appendChild(t);
    li.appendChild(btn);
    li.setAttribute("id", n);
    document.getElementById("myul").appendChild(li);
  });
};
var add = function add() {
  var x = document.getElementById("text").value;
  if (x !== "") {
    localStorage.setItem(x, x);
    var y = localStorage.getItem(x);
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    var btntext = document.createTextNode("DELETE");
    btn.appendChild(btntext);
    btn.className = "deletebtn";
    btn.setAttribute("id", x);
    btn.onclick = function () {
      localStorage.removeItem(x);
      document.getElementById(x).style.display = "none";
    };
    var inputValue = y;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.appendChild(btn);
    li.setAttribute("id", x);
    document.getElementById("text").value = "";
    document.getElementById("myul").appendChild(li);
  } else {
    alert("Enter some value");
  }
};
