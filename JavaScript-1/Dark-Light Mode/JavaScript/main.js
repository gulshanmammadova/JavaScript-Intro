function Mode(){
   
    if(document.body.style.backgroundColor==="black"){
        document.body.style.backgroundColor="white"; 
   document.getElementById("textname").style.color="black";
   document.getElementById("text1").style.color="black";
   document.getElementById("text2").style.color="black";
   document.getElementById("text3").style.color="black";
    }
    else{
        document.body.style.backgroundColor="black";
        document.getElementById("textname").style.color="white";
        document.getElementById("text1").style.color="white";
        document.getElementById("text2").style.color="white";
        document.getElementById("text3").style.color="white";
     
    }
}