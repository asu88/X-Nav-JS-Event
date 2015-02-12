
document.addEventListener("keyup", function(){
       
    var texto = document.getElementById("texto") 
    //document.getElementById("contenido").innerHTML = texto.value;
    document.getElementById("contenido").style.color = texto.value;
});
