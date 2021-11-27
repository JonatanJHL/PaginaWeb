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

let ListaPeliculas=["Puñales por la espalda","Fragmentado","Dejame salir","Infity War","Shutter Island"];
let ListaCalificacion=[8,9,9,9,10];
let ListaURL=["",
    "",
    "",
    "",
    ""];
function Agrega() {
    var titulo = prompt("Ingresa el nombre de la pelicula: ");
    var calif = prompt("Ingresa calificacion de pelicula: ");
    var link = prompt("URL de portada de pelicula: ");
    if (titulo == null || calif == null || link == null) {
        alert("te falto llenar un dato");
    }
    else{
        alert("Agregado");
        ListaPeliculas.push(titulo);
        ListaCalificacion.push(calif);
        ListaURL.push(link);
    }
  }
function Elimina() {
    ListaPeliculas.pop();
    ListaCalificacion.pop();
    ListaURL.pop();
}
/*escribir datos*/
for (var valor of ListaPeliculas) {
    var foo = document.createAttribute('<tr><td>'+ListaPeliculas+'</td><td>' +ListaCalificacion+ '</td></tr>');
    document.querySelector(".box1peli").appendChild(foo);
}

function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      //
      for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
  }
/* */


