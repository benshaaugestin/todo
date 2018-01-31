window.onload = ()=>{
  let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
      console.log( localStorage.getItem(keys[i][0]))
  }
console.log("values")
  values.map(n=>{
        let li = document.createElement("li");
        let btn=document.createElement("BUTTON")
        btn.setAttribute("id",n)
        let btntext = document.createTextNode("DELETE");
        btn.appendChild(btntext)
        btn.className="deletebtn"
        btn.onclick=()=>{
            localStorage.removeItem(n);
            document.getElementById(n).style.display="none"
          }
        let t = document.createTextNode(n);
        li.appendChild(t)
        li.appendChild(btn)
        li.setAttribute("id",n)
        document.getElementById("myul").appendChild(li);
      })
}
var add=()=>{
    let x=document.getElementById("text").value
    if(x!==""){
        localStorage.setItem(x, x);
        let y=localStorage.getItem(x);
        let li = document.createElement("li");
        let btn=document.createElement("BUTTON")
        let btntext = document.createTextNode("DELETE");
        btn.appendChild(btntext);
        btn.className="deletebtn"
        btn.setAttribute("id",x)
        btn.onclick=()=>{
            localStorage.removeItem(x);
            document.getElementById(x).style.display="none"
          }
        let inputValue = y;
        let t = document.createTextNode(inputValue);
        li.appendChild(t)
        li.appendChild(btn)
        li.setAttribute("id",x)
        document.getElementById("text").value=""
        document.getElementById("myul").appendChild(li);

  }
  else {
    alert("Enter some value")
  }
}
