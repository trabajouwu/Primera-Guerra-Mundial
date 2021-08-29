const d = document,
$secciones = d.querySelectorAll(".seccion"),
$anclasCuadro = d.querySelectorAll(".nav-cuadro"),
$anclas = d.querySelectorAll(".nav-cuadro p"),
$audio = d.querySelector("audio"),
$audioBtn = d.querySelector(".audio img")

let isPaused = true,
anclaSeleccionada = 0;
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
  if (e.target === $audioBtn){
    if (isPaused){
      $audio.play()
      isPaused = false
      $audioBtn.setAttribute("src", "https://image.flaticon.com/icons/png/512/61/61180.png")
    }
    else{
      $audio.pause()
      isPaused = true
      $audioBtn.setAttribute("src", "https://image.flaticon.com/icons/png/512/17/17550.png")
    }
  }
})
