if (typeof(Storage) !== "undefined") {
console.log('Storage available');
} else {
console.log('Storage not  available');
    // Sorry! No Web Storage support..
}
//let localStorage = window.localStorage;

window.onload = () => {
  let localStorage = window.localStorage;

  let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
      // localStorage.setItem(keys[i][0],"active")

  }
// console.log("values")
  values.map((n,index,array)=>{
       let localStorage = window.localStorage;

    // console.log("map",array[index][0])
        let li = document.createElement("li");
        let btn=document.createElement("BUTTON");
        btn.setAttribute("id",n);
        let btntext = document.createTextNode("DELETE");
        btn.appendChild(btntext);
        btn.className="deletebtn";
        btn.onclick=()=>{
          // console.log(localStorage.getItem(n))
            localStorage.removeItem(n);
            document.getElementById(n).style.display="none";
          }
          let editbtn=document.createElement("BUTTON")
          let editbtntext = document.createTextNode("EDIT");
          editbtn.appendChild(editbtntext);
          editbtn.className="deletebtn";
          editbtn.onclick=()=>{
            let div=document.createElement("li");
            div.setAttribute("id",n);
            let editabletextarea=document.createElement("textarea");
            editabletextarea.setAttribute("id",n);
            editabletextarea.appendChild(document.createTextNode(n));
            // editabletextarea.className="editablecontent"
            let savebtn=document.createElement("BUTTON");
            savebtn.appendChild(document.createTextNode("SAVE"));
            savebtn.onclick=()=>{
              // console.log("nn",n)
              // console.log("editabletextarea.value",editabletextarea.value);
              let newtext=editabletextarea.value
              // console.log("newtext",newtext)
              localStorage.removeItem(n)
              localStorage.setItem(newtext,newtext)
              // btn.setAttribute("id",newtext)
              li.setAttribute("id",newtext)
                document.getElementById(n).replaceWith(li)
                n=newtext
                var node=document.getElementById(n)
                console.log("node",node.firstChild);
                node.removeChild( node.firstChild )
                node.appendChild( document.createTextNode(newtext) )
                // document.getElementById(n).nodeValue=newtext
                // console.log("li",)
            }
            div.appendChild(editabletextarea)
            div.appendChild(savebtn)
            // console.log(div)
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
document.getElementById('addBtn').addEventListener('click', function () {
    let localStorage = window.localStorage;
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
        editbtn.className="deletebtn"
        editbtn.onclick=()=>{
          let div=document.createElement("li")
          div.setAttribute("id",x)
          let editabletextarea=document.createElement("textarea")
          editabletextarea.setAttribute("id",x)
          editabletextarea.appendChild(document.createTextNode(x))
          // editabletextarea.className="editablecontent"
          let savebtn=document.createElement("BUTTON")
          savebtn.appendChild(document.createTextNode("SAVE"))
          savebtn.onclick=()=>{
            let newtext=editabletextarea.value
            console.log("newtext",newtext)
            localStorage.removeItem(x)
            localStorage.setItem(newtext,newtext)
            btn.setAttribute("id",newtext)
            li.setAttribute("id",newtext)
              document.getElementById(x).replaceWith(li)
              x=newtext
              var node=document.getElementById(x)
              console.log("node",node.firstChild);
              node.removeChild( node.firstChild )
              node.appendChild( document.createTextNode(newtext) )

          }
          // div.className="textarea-container"
          div.appendChild(editabletextarea)
          div.appendChild(savebtn)
          // console.log(div)
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
});
