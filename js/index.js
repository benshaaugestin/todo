window.onload = ()=>{
  let localStorage=window.localStorage
  let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );


  }
  values.map((n,index,array)=>{
        let localStorage=window.localStorage
        let li = document.createElement("li");
        let btn=document.createElement("BUTTON")
        btn.setAttribute("id",n)
        let btntext = document.createTextNode("DELETE");
        btn.appendChild(btntext)
        btn.className="btn btn-danger deletebtn"
        btn.onclick=()=>{
            localStorage.removeItem(n);
            document.getElementById(n).style.display="none"
          }
          let editbtn=document.createElement("BUTTON")
          let editbtntext = document.createTextNode("EDIT");
          editbtn.appendChild(editbtntext)
          editbtn.className="btn btn-success deletebtn"
          editbtn.onclick=()=>{
            let div=document.createElement("li")
            div.setAttribute("id",n)
            let editabletextarea=document.createElement("textarea")
            editabletextarea.setAttribute("id",n)
            editabletextarea.appendChild(document.createTextNode(n))
            editabletextarea.className="editablecontent"
            let savebtn=document.createElement("BUTTON")
            savebtn.appendChild(document.createTextNode("SAVE"))
            savebtn.className="btn btn-info deletebtn"
            savebtn.onclick=()=>{
              let newtext=editabletextarea.value
              localStorage.removeItem(n)
              localStorage.setItem(newtext,newtext)
              li.setAttribute("id",newtext)
                document.getElementById(n).replaceWith(li)
                n=newtext
                var node=document.getElementById(n)
                node.replaceChild(document.createTextNode(newtext),node.childNodes[0])
            }
            div.appendChild(editabletextarea)
            div.appendChild(savebtn)
            document.getElementById(n).replaceWith(div)
          }
        let t = document.createTextNode(n);
        li.appendChild(t)
        li.appendChild(btn)
        li.appendChild(editbtn)
        li.setAttribute("id",n)
        document.getElementById("myul").appendChild(li);
      })
}
const add=()=>{
  let localStorage=window.localStorage
    let x=document.getElementById("text").value
    if(x!==""){
        localStorage.setItem(x, x);
        let y=localStorage.getItem(x);
        let li = document.createElement("li");
        let btn=document.createElement("BUTTON")
        let btntext = document.createTextNode("DELETE");
        btn.appendChild(btntext);
        btn.className="btn btn-danger deletebtn"
        btn.setAttribute("id",x)
        btn.onclick=()=>{
            localStorage.removeItem(x);
            document.getElementById(x).style.display="none"
          }
        let editbtn=document.createElement("BUTTON")
        let editbtntext = document.createTextNode("EDIT");
        editbtn.appendChild(editbtntext)
        editbtn.className="btn btn-success deletebtn"
        editbtn.onclick=()=>{
          let div=document.createElement("li")
          div.setAttribute("id",x)
          let editabletextarea=document.createElement("textarea")
          editabletextarea.setAttribute("id",x)
          editabletextarea.appendChild(document.createTextNode(x))
          let savebtn=document.createElement("BUTTON")
          savebtn.appendChild(document.createTextNode("SAVE"))
          savebtn.className="btn btn-info"
          savebtn.onclick=()=>{
            let newtext=editabletextarea.value
            localStorage.removeItem(x)
            localStorage.setItem(newtext,newtext)
            btn.setAttribute("id",newtext)
            li.setAttribute("id",newtext)
              document.getElementById(x).replaceWith(li)
              x=newtext
              var node=document.getElementById(x)
              node.replaceChild(document.createTextNode(newtext),node.childNodes[0] )
          }
          div.appendChild(editabletextarea)
          div.appendChild(savebtn)
          document.getElementById(x).replaceWith(div)
        }
        let inputValue = y;
        let t = document.createTextNode(inputValue);
        li.appendChild(t)
        li.appendChild(btn)
        li.appendChild(editbtn)
        li.setAttribute("id",x)
        document.getElementById("text").value=""
        document.getElementById("myul").appendChild(li);
  }
  else {
    alert("Enter some value")
  }
}
