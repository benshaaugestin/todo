"use strict";

window.onload = function () {
  var localStorage = window.localStorage;
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }
  values.map(function (n, index, array) {
    var localStorage = window.localStorage;
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    btn.setAttribute("id", n);
    var btntext = document.createTextNode("DELETE");
    btn.appendChild(btntext);
    btn.className = "btn btn-danger deletebtn";
    btn.onclick = function () {
      localStorage.removeItem(n);
      document.getElementById(n).style.display = "none";
    };
    var editbtn = document.createElement("BUTTON");
    var editbtntext = document.createTextNode("EDIT");
    editbtn.appendChild(editbtntext);
    editbtn.className = "btn btn-success deletebtn";
    editbtn.onclick = function () {
      var div = document.createElement("li");
      div.setAttribute("id", n);
      var editabletextarea = document.createElement("textarea");
      editabletextarea.setAttribute("id", n);
      editabletextarea.appendChild(document.createTextNode(n));
      editabletextarea.className = "editablecontent";
      var savebtn = document.createElement("BUTTON");
      savebtn.appendChild(document.createTextNode("SAVE"));
      savebtn.className = "btn btn-info deletebtn";
      savebtn.onclick = function () {
        var newtext = editabletextarea.value;
        localStorage.removeItem(n);
        localStorage.setItem(newtext, newtext);
        li.setAttribute("id", newtext);
        document.getElementById(n).replaceWith(li);
        n = newtext;
        var node = document.getElementById(n);
        node.replaceChild(document.createTextNode(newtext), node.childNodes[0]);
      };
      div.appendChild(editabletextarea);
      div.appendChild(savebtn);
      document.getElementById(n).replaceWith(div);
    };
    var t = document.createTextNode(n);
    li.appendChild(t);
    li.appendChild(btn);
    li.appendChild(editbtn);
    li.setAttribute("id", n);
    document.getElementById("myul").appendChild(li);
  });
};
var add = function add() {
  var localStorage = window.localStorage;
  var x = document.getElementById("text").value;
  if (x !== "") {
    localStorage.setItem(x, x);
    var y = localStorage.getItem(x);
    var li = document.createElement("li");
    var btn = document.createElement("BUTTON");
    var btntext = document.createTextNode("DELETE");
    btn.appendChild(btntext);
    btn.className = "btn btn-danger deletebtn";
    btn.setAttribute("id", x);
    btn.onclick = function () {
      localStorage.removeItem(x);
      document.getElementById(x).style.display = "none";
    };
    var editbtn = document.createElement("BUTTON");
    var editbtntext = document.createTextNode("EDIT");
    editbtn.appendChild(editbtntext);
    editbtn.className = "btn btn-success deletebtn";
    editbtn.onclick = function () {
      var div = document.createElement("li");
      div.setAttribute("id", x);
      var editabletextarea = document.createElement("textarea");
      editabletextarea.setAttribute("id", x);
      editabletextarea.appendChild(document.createTextNode(x));
      var savebtn = document.createElement("BUTTON");
      savebtn.appendChild(document.createTextNode("SAVE"));
      savebtn.className = "btn btn-info";
      savebtn.onclick = function () {
        var newtext = editabletextarea.value;
        localStorage.removeItem(x);
        localStorage.setItem(newtext, newtext);
        btn.setAttribute("id", newtext);
        li.setAttribute("id", newtext);
        document.getElementById(x).replaceWith(li);
        x = newtext;
        var node = document.getElementById(x);
        node.replaceChild(document.createTextNode(newtext), node.childNodes[0]);
      };
      div.appendChild(editabletextarea);
      div.appendChild(savebtn);
      document.getElementById(x).replaceWith(div);
    };
    var inputValue = y;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.appendChild(btn);
    li.appendChild(editbtn);
    li.setAttribute("id", x);
    document.getElementById("text").value = "";
    document.getElementById("myul").appendChild(li);
  } else {
    alert("Enter some value");
  }
};
