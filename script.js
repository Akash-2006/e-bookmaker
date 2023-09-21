const search=document.querySelector("#Search");
const form=document.querySelector("#options");
search.addEventListener("click",function(){
  
  if(form.classList.contains("hidden")){
    console.log("hii");
    form.classList.remove("hidden");
    search.textContent="close"
  }
  else{
    form.classList.add("hidden");
    search.textContent="search";
  }
})
var like=0

var d=document.getElementById("empty");
function add(d){
  like=document.getElementById(d).innerText;
   
    likevalue=parseInt(like);
    var mat=like.replace(likevalue,"")
    console.log(like+likevalue+mat);
    
  if(likevalue==0){
    
    likevalue=likevalue+1;
  }
  else{
    likevalue=likevalue-1;
  }
  document.getElementById(d).innerText=likevalue+mat;
}

