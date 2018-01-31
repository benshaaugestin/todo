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
    // li.onclick=()=>{
    //   localStorage.removeItem(n);
    //   document.getElementById(n).style.display="none"
    // }
    // localStorage.clear();
    btn.onclick = function () {
      console.log(localStorage.getItem(n));
      localStorage.removeItem(n);
      document.getElementById(n).style.display = "none";
    };
    var editbtn = document.createElement("BUTTON");
    var editbtntext = document.createTextNode("EDIT");
    editbtn.appendChild(editbtntext);
    editbtn.onclick = function () {
      var div = document.createElement("li");
      div.setAttribute("id", n);
      var editabletextarea = document.createElement("textarea");
      editabletextarea.setAttribute("id", n);
      editabletextarea.appendChild(document.createTextNode(n));
      // editabletextarea.className="editablecontent"
      var savebtn = document.createElement("BUTTON");
      savebtn.appendChild(document.createTextNode("SAVE"));
      savebtn.onclick = function () {
        console.log("nn", n);
        console.log("editabletextarea.value", editabletextarea.value);
        var newtext = editabletextarea.value;
        console.log("newtext", newtext);
        localStorage.removeItem(n);
        localStorage.setItem(newtext, newtext);
        btn.setAttribute("id", newtext);
        li.setAttribute("id", newtext);
        document.getElementById(n).replaceWith(li);
        n = newtext;
      };
      // div.className="textarea-container"
      div.appendChild(editabletextarea);
      div.appendChild(savebtn);
      console.log(div);
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
      var div = document.createElement("li");
      var editabletextarea = document.createElement("textarea");
      editabletextarea.setAttribute("id", x);
      editabletextarea.appendChild(document.createTextNode(x));
      // editabletextarea.className="editablecontent"
      var savebtn = document.createElement("BUTTON");
      savebtn.appendChild(document.createTextNode("SAVE"));
      savebtn.onclick = function () {
        var newtext = document.getElementById(x).value;
        localStorage.removeItem(x);
        localStorage.setItem(newtext, newtext);
      };
      // div.className="textarea-container"
      div.appendChild(editabletextarea);
      div.appendChild(savebtn);
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
