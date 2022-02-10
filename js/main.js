//Declaración de Variables
const carrito = document.querySelector("#carrito");
const listaJuegos = document.querySelector("#lista-juegos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const comprarCarritoBtn = document.querySelector("#comprar-carrito");
let articulosCarrito = [];

//EventListeners
cargarEventListeners();

function cargarEventListeners() {
  //  Agregar Carrito
  listaJuegos.addEventListener("click", agregarJuego);
  // Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  // Comprar el Carrito
  comprarCarritoBtn.addEventListener("click", comprarCarrito);
  //Contenido cargado
  document.addEventListener("DOMContentLoaded", () => {
    articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    total = JSON.parse(localStorage.getItem("total")) || [];
    document.getElementById("total").innerHTML = `Precio Total:$${total}`;
    carritoHTML();
  });
}

// Añadir Carrito
function agregarJuego(e) {
  if (e.target.classList.contains("agregar-carrito")) {
    const juego = e.target.parentElement.parentElement;
    leerDatosJuego(juego);
  }
}

// Tomar Datos Juego
function leerDatosJuego(juego) {
  const infoJuego = {
    imagen: juego.querySelector("img").src,
    titulo: juego.querySelector("h4").textContent,
    precio: juego.querySelector(".precio").textContent,
    id: juego.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  let total = 0;
  if (articulosCarrito.some((juego) => juego.id === infoJuego.id)) {
    const juegos = articulosCarrito.map((juego) => {
      if (juego.id === infoJuego.id) {
        return juego;
      } else {
        return juego;
      }
    });
    articulosCarrito = [...juegos];
  } else {
    articulosCarrito = [...articulosCarrito, infoJuego];
  }

  articulosCarrito.forEach(function (elemento) {
    total += parseInt(elemento["precio"]);
    localStorage.setItem("total", JSON.stringify(total));
    document.getElementById("total").innerHTML = `Precio Total:$${total}`;
  });
  console.log(articulosCarrito);
  carritoHTML();
}

// Muestra el juego seleccionado en el Carrito
function carritoHTML() {
  limpiarCarrito();

  articulosCarrito.forEach((juego) => {
    const row = document.createElement("tr");
    row.innerHTML = `
               <td>  
                  <img src="${juego.imagen}" width=40px height=40px>
               </td>
               <td>${juego.titulo}</td>
               <td>${juego.precio}</td>
               <td>${juego.cantidad} </td>
          `;
    contenedorCarrito.appendChild(row);
  });

  sincronizarStorage();
}
//Local Storage
function sincronizarStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

// Elimina los juegos del carrito en el DOM
function vaciarCarrito() {
  if (articulosCarrito.length === 0) {
    document.getElementById("total").innerHTML = "No hay productos";
  } else {
    document.getElementById("total").innerHTML = "Vaciaste el Carrito";
    while (contenedorCarrito.firstChild) {
      articulosCarrito = [];
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      localStorage.clear(articulosCarrito);
      sessionStorage.clear(articulosCarrito);
      document.getElementById("total").innerHTML = "Vaciaste el Carrito";
    }
  }
}
//Comprar Carrito
function comprarCarrito() {
  if (articulosCarrito.length === 0) {
    document.getElementById("total").innerHTML = "No hay productos";
  } else {
    vaciarCarrito();
    document.getElementById("total").innerHTML = "¡Compra Realizada!";
  }
}
// Limpiar Carrito
function limpiarCarrito() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
