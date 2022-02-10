//Productos en tarjeta
$(() => {
  $(".agregar-carrito").on("click", function () {
    $("#addCard").append("<h3>¡Añadiste un Producto!</h3>");
    $("#addCard").fadeIn(1000, function () {
      $("#addCard").fadeOut(500, function () {
        $("#addCard").empty();
      });
    });
  });

  // Quitar Boton Agregar
  $(".agregar-carrito").on("click", function () {
    $(this).attr("data-id");
    $(this).hide();
  });
  // Agregar Botón Agregar
  $("#vaciar-carrito").on("click", function () {
    $(".agregar-carrito").show();
  });
});
