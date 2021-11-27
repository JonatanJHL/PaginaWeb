/* Agregar contenido pelicula*/
let titulo=["Puñales por la espalda",
                    "Fragmentado",
                    "Dejame salir",
                    "Infity War",
                    "Shutter Island"];
let calif=[8,
                      9,
                      9,
                      9,
                      10];
let im=["https://i.pinimg.com/236x/40/c9/58/40c958adf7c0004543ac4dd6640776dd.jpg",
                "https://i.pinimg.com/originals/0d/15/d7/0d15d7bbf4df475a627672857ceedc1c.jpg",
                "https://www.artmajeur.com/medias/standard/m/a/maxime-guze/artwork/12318386_get-out-poster30x40.jpg?v=1559486161",
                "https://m.media-amazon.com/images/I/81OmkfFqvsL._AC_SY741_.jpg",
                "https://m.media-amazon.com/images/I/51MsI8xR-NL._AC_.jpg"];
/**inicializa tabla**/
function agregaTabla(){
  var output = document.getElementById("output1");
  var hoverOutput = document.getElementById("hovertext1");
  for (var i = 0; i < titulo.length; i++) {
    var newDiv =  document.getElementById("output1").insertRow(-1);
    newDiv.innerHTML = '<td onmouseover="ponerImg(this)" id="'+i+'">'+titulo[i]+'</td><td>'+calif[i]+'</td>';
    output.appendChild(newDiv);
  }
  hoverOutput.innerHTML = ' <img class="tam" src="'+im[0]+'" alt="poster" >';
}

function ponerImg(ob) {
  var target = document.getElementById("hovertext1");
  target.innerHTML = '<img class="tam" src="'+im[ob.id]+'" alt="poster" >'
}
/**agregar**/
function agregarFila(){
  if(titulo.length==10){
    alert("solo se permiten 10 peliculas");
  }
  else{
    var tituloadd = prompt("Ingresa el nombre de la pelicula: ");
    var califadd = prompt("Ingresa calificacion de pelicula: ");
    var link = prompt("URL de portada de pelicula: ");

    if (tituloadd == null || califadd == null || link == null) {
      alert("te falto llenar un dato");
    }
    else{
      alert("Agregado");
      titulo.push(tituloadd);
      calif.push(califadd);
      im.push(link);
      console.log("titulo: "+tituloadd+" calificacion: "+califadd+" link:"+link);
      document.getElementById("output1").insertRow(-1).innerHTML = '<td onmouseover="ponerImg(this)" id="'+(titulo.length-1)+'">'+tituloadd+'</td><td>'+califadd+'</td>';
    }
  }
    
}
/**eliminar**/
function eliminarFila(){
  var table = document.getElementById("output1");
  var rowCount = table.rows.length;
  if(rowCount <= 1)
    alert('No hay mas que borrar');
  else
    table.deleteRow(rowCount -1);
    titulo.pop();
    calif.pop();
    im.pop();
}


