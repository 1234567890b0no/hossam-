
function getapi(){
     
    var xhttp =new XMLDocument;
    xhttp.onreadystatechange = function(){
      if(this.readyState== 4&& this.status ==200){
        
        document.querySelector("#doom").innerHTML=this.responsext;
      }

   }
     xhttp.open("GET","https://jsonplaceholder.typicode.com/photos", true );
     xhttp.send(  )
     
}
//===============================
 

fetch("https://jsonplaceholder.typicode.com/photos") 
.then( function(item){

return item.json ()

})
.then( function(mohamed){
  
document.querySelector(".test img").src= mohamed[0] .url;
document.querySelector(".test h4").src= mohamed[0] .id;
document.querySelector(".test h6").src= mohamed[0] .yitle;


})


async function getapi(){

var item= await fetch("https://dummyjson.com/products");
var ahmed= await item.json();
var mohamed= await ahmed.products;
var mytext="";
for(var i=0;i<mohamed.length;i++){

    var cartoona= 
    `
    <div class="col-md-4  text-center">

     <img src ="${mohamed[i].images[0]}" class='img-fluid'>

     <h4>${mohamed[i].id}</h4>
     <h6>${mohamed[i].title}</h6>
     <h6>${mohamed[i].price}</h6>
     <h6>${mohamed[i].brand}</h6>
     <h6>${mohamed[i].category}</h6>
      </div>
      `;
       mytext=mytext+cartoona;

   }

  document.querySelector(".test").innerHTML=mytext

} 

getapi();