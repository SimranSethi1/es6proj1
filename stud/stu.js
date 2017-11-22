let tab=function(){
    return document.getElementById("t1");
}
let ad=function() {
    let n = document.getElementById("i1").value;
    let x = document.getElementById("i2").value;
    let y = document.getElementById("i3").value;
    let w = document.getElementById("i4").value;
    let t = document.getElementById("t1");
    let r=  t.rows;
    let i;
    if(n == '' || x == '' || y == '' ||w == ''){
        window.alert("some of the feilds are empty");
        return false;
    }
    for(i=0;i<r.length;i++)
    {
        if(r[i].cells[2].innerHTML==x)
        {
            window.alert("rollno already exist");
            return false;
        }
    }
    if(y<1900)
    {
        window.alert("invalid year");
        return false;
    }
    if( /[^a-zA-Z]/.test(n) ) {
        window.alert('Input is not alphanumeric');
        document.getElementById("i1").focus();
      return false;
     }
     
     if(/[^0-9]/.test(x))
     {
        window.alert('Input is not a valid roollno');
        document.getElementById("i2").focus();
      return false; 
     }
     if(/[^0-9]/.test(y))
     {
        window.alert('Input is not a valid year');
        document.getElementById("i3").focus();
      return false; 
     }
    let a = t.insertRow(1);
    let c5 = a.insertCell(0);
    let c1 = a.insertCell(1);
    let c2 = a.insertCell(2);
    let c3 = a.insertCell(3);
    let c4 = a.insertCell(4);
    let s = document.createElement("td");
    let b = document.createElement("input");
    b.setAttribute("type", "checkbox");
    s.appendChild(b);
    c5.appendChild(s);
    c1.innerHTML = n;
    c2.innerHTML = x;
    c3.innerHTML = y;
    c4.innerHTML = w;
}
let del=function(){
    let i;
    let table = new tab();
    let x = table.rows;
    for (i = 1; i < x.length; i++) {
         var row = x[i].cells[0].firstChild;
    if(x[i].cells[0].firstChild.children[0]==undefined)
    {
        if(x[i].cells[0].firstChild.checked==true)
        table.deleteRow(i);
    }
    else{
        if (x[i].cells[0].firstChild.children[0].checked == true)
        table.deleteRow(i);
    }
}
}
let func=function(p){
    let x=new tab();
    return (x.rows[p].cells);
}
let nisValid=function(m,n,o,q){
  if(m == '' || n == '' ||o == ''||q == '')
  return true;
  else
  return false;
}
let edit=function() {
    var x=document.getElementById("t1");
    let p = prompt("enter the row u want to edit");
    let m = document.getElementById("i1");
    let n = document.getElementById("i2");
    let o = document.getElementById("i3");
    let q = document.getElementById("i4");
    var x = new func(p);
    x[1].innerHTML=m.value;
    x[2].innerHTML=n.value;
    x[3].innerHTML=o.value;
    x[4].innerHTML=q.value;
}
