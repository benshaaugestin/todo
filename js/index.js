window.onload = ()=>{
  let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
      // localStorage.setItem(keys[i][0],"active")

  }
console.log("values")
  values.map((n,index,array)=>{
    console.log("map",array[index][0])
        let li = document.createElement("li");
        let btn=document.createElement("BUTTON")
        btn.setAttribute("id",n)
        let btntext = document.createTextNode("DELETE");
        btn.appendChild(btntext)
        btn.className="deletebtn"
        li.onclick=()=>{
          localStorage.removeItem(n);
          document.getElementById(n).style.display="none"
        }
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
        let editbtn=document.createElement("BUTTON")
        let editbtntext = document.createTextNode("EDIT");
        editbtn.appendChild(editbtntext)
        editbtn.onclick=()=>{
          let div=document.createElement("div")
          let editabletextarea=document.createElement("textarea")
          editabletextarea.appendChild(document.createTextNode(x))
          editabletextarea.className="editablecontent"
          let savebtn=document.createElement("BUTTON")
          savebtn.appendChild(document.createTextNode("SAVE"))
          savebtn.className="save"
          div.appendChild(savebtn)
          div.appendChild(editabletextarea)
          console.log(div)
          document.getElementById(x).replaceWith(div)
        }
        let inputValue = y;
        let t = document.createTextNode(inputValue);
        li.appendChild(t)
        li.appendChild(btn)
        li.appendChild(editbtn)
        li.setAttribute("id",x)
        console.log("li",li)
        document.getElementById("text").value=""
        document.getElementById("myul").appendChild(li);

  }
  else {
    alert("Enter some value")
  }
}
