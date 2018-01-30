window.onload = ()=>{
  let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }
console.log("values")
  values.map(n=>{
        let li = document.createElement("li");
        let t = document.createTextNode(n);
        li.appendChild(t)
        li.setAttribute("id",n)
        li.onclick = ()=>{localStorage.removeItem(n)
        document.getElementById(n).style.display="none"}
        document.getElementById("myul").appendChild(li);
        console.log(li)
      })
}
var add=()=>{
    let x=document.getElementById("text").value
    if(x!==""){
        localStorage.setItem(x, x);
        let y=localStorage.getItem(x);
        let li = document.createElement("li");
        li.setAttribute("id",x)
        li.onclick = ()=>{localStorage.removeItem(x);
        document.getElementById(x).style.display="none";};
        let inputValue = y;
        let t = document.createTextNode(inputValue);
        li.appendChild(t)
        document.getElementById("text").value=""
        document.getElementById("myul").appendChild(li);

  }
  else {
    alert("Enter some value")
  }
}
