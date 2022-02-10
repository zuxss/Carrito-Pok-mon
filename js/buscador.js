const filtrar = document.querySelector("#filtrar-juegos");

filtrar.addEventListener("input", function () {
  let juegos = document.querySelectorAll(".info-card");

  if (this.value.length > 0) {
    for (let i = 0; i < juegos.length; i++) {
      let juego = juegos[i];
      let nombreTd = juego.querySelector("h4");
      let nombre = nombreTd.textContent;
      let regEx = new RegExp(this.value, "i");
      //Ocultar-Mostrar Tarjeta al Buscar
      if (!regEx.test(nombre)) {
        juego.classList.add("invisible");
      } else {
        juego.classList.remove("invisible");
      }
    }
  } else {
    for (let i = 0; i < juegos.length; i++) {
      let juego = juegos[i];
      juego.classList.remove("invisible");
    }
  }
});
