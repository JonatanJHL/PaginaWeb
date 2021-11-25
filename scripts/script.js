/*leer mas perfil*/
function vermasPerfil(id) {
    if(id=="masPerfil"){
        document.getElementById("desplegarPerfil").style.display="block";   
        document.getElementById("masPerfil").style.display="none";
    }
    else if(id=="menosPerfil"){
        document.getElementById("desplegarPerfil").style.display="none";
        document.getElementById("masPerfil").style.display="inline";
    }
}
/*Fin leer masperfil*/
/*leer mas educacion*/
function vermas(id) {
    if(id=="mas"){
        document.getElementById("desplegar").style.display="block";   
        document.getElementById("mas").style.display="none";
    }
    else{
        document.getElementById("desplegar").style.display="none";
        document.getElementById("mas").style.display="inline";
    }
}
/*Fin leer mas educacion*/
/*alerta para red proxima*/
function alertProximamente(){
    alert("aun no cuento con esta red, pero proximamente");
}
/*Fin alerta para red proxima*/
/* Agregar contenido pelicula*/
function Agrega() {
    var titulo = prompt("Ingresa el nombre de la pelicula: ");
    var calif = prompt("Ingresa calificacion de pelicula: ");
    var link = prompt("URL de portada de pelicula: ");
    if (titulo == null && calif == null && link == null) {
        alert("te falto llenar un dato");
    }
    else{
        alert("Agregado");
    }
  }
/* */


