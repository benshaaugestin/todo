"use strict";

window.onload = function () {
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
    // localStorage.setItem(keys[i][0],"active")
  }
  console.log("values");
  values.map(function (n, index, array) {
    console.log("map", array[index][0]);
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    btn.setAttribute("id", n);
    var btntext = document.createTextNode("DELETE");
    btn.appendChild(btntext);
    btn.className = "deletebtn";
    li.onclick = function () {
      localStorage.removeItem(n);
      document.getElementById(n).style.display = "none";
    };
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
    var editbtn = document.createElement("BUTTON");
    var editbtntext = document.createTextNode("EDIT");
    editbtn.appendChild(editbtntext);
    editbtn.onclick = function () {
      var div = document.createElement("div");
      var editabletextarea = document.createElement("textarea");
      editabletextarea.appendChild(document.createTextNode(x));
      editabletextarea.className = "editablecontent";
      var savebtn = document.createElement("BUTTON");
      savebtn.appendChild(document.createTextNode("SAVE"));
      savebtn.className = "save";
      div.appendChild(savebtn);
      div.appendChild(editabletextarea);
      console.log(div);
      document.getElementById(x).replaceWith(div);
    };
    var inputValue = y;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.appendChild(btn);
    li.appendChild(editbtn);
    li.setAttribute("id", x);
    console.log("li", li);
    document.getElementById("text").value = "";
    document.getElementById("myul").appendChild(li);
  } else {
    alert("Enter some value");
  }
};
