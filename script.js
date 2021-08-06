const d = document,
$secciones = d.querySelectorAll(".seccion"),
$anclasCuadro = d.querySelectorAll(".nav-cuadro"),
$anclas = d.querySelectorAll(".nav-cuadro p");

let anclaSeleccionada = 0;
$secciones[anclaSeleccionada].classList.add("visible");
$anclas[anclaSeleccionada].classList.add("color-rojo");

d.addEventListener("click", e => {

  $anclasCuadro.forEach((el, index) => {
    
    if(e.target === el || e.target === $anclas[index]){

      $anclas[anclaSeleccionada].classList.remove("color-rojo");
      $secciones.forEach(seccion => {
        seccion.classList.remove("visible");
      })
      
      $anclas[index].classList.add("color-rojo");
      anclaSeleccionada = index;
      $secciones[anclaSeleccionada].classList.add("visible");

    }
  });
})