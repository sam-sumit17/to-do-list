let x,y="<ul>";
let arr=[];
function deletee(){
    confirm('Delete the selected list item ?');
    // let forDelete = this.parentElement
   let sk=arr.splice(2,1);
   y="<ul>"+"<table>";
    for(let i=arr.length-1;i>=0;i--){
        
        y+="<tr>"+"<td>"+"<li>"+arr[i]+"</li>"+"</td>"+"<td><button id=myBtn >Edit</button>"+"<button id=myBtn1 >Delete</button></td></tr>";
    }
    y+="</table>"+"</ul>";
    document.getElementById('answer').innerHTML=y; 

}
function edite(){
    let forEdit = this.parentElement;
    let forDelete = this.parentElement
    arr.splice(2,1);
    // let input = document.createElement('input');
    // document.getElementById('text').value=forEdit;


    
}
function sam(){

    x=document.getElementById('text').value;
    if(x===""){alert('Enter Note First');}
    else {
    arr.push(x);
    y="<ul>"+"<table>";
    for(let i=arr.length-1;i>=0;i--){
        
        y+="<tr>"+"<td>"+"<li>"+arr[i]+"</li>"+"</td>"+"<td><button id=myBtn >Edit</button>"+"<button id=myBtn1 >Delete</button></td></tr>";
    }
    y+="</table>"+"</ul>";
    document.getElementById('output').style.display='block';
    document.getElementById('list').style.display='block';
    // background-image: linear-gradient(;
 //document.getElementById('output').style.backgroundImage='linear-gradient(to bottom,rgb(22, 244, 96),rgb(255, 254, 254))';
 document.getElementById('answer').style.border='solid black';
    document.getElementById('answer').innerHTML=y; 
    document.getElementById('text').value="";
    }
    document.getElementById("myBtn1").addEventListener("click", deletee);
    document.getElementById("myBtn").addEventListener("click",edite);
   
    
}



document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        sam();
    }
}
//
// document.getElementById("mybtn1").addEventListener("click",alert('delting the list item ?'));
