let productoSeleccionado = "Monitor Samgung 250 pulgadas";
let precioDelProducto = 2500;
let usuarioLogueado = true;

console.log((productoSeleccionado && `Gracias por elegir ${productoSeleccionado}`)|| "No seleccionaste ningún producto" );

precioDelProducto = 0

console.log( precioDelProducto || productoSeleccionado && `Gracias por elegir ${productoSeleccionado}` && "¡Tu compra está 100% bonificada!");

usuarioLogueado = false;

console.log(usuarioLogueado || "Por favor, iniciá sesión para continuar.");

//Prueba caso 1

productoSeleccionado = "";
precioDelProducto = 0;
usuarioLogueado = false;

console.log((productoSeleccionado && `Gracias por elegir ${productoSeleccionado}`)|| "No seleccionaste ningún producto" );

console.log(productoSeleccionado && `Gracias por elegir ${productoSeleccionado}` && "¡Tu compra está 100% bonificada!");

console.log(usuarioLogueado || "Por favor, iniciá sesión para continuar.");

// Prueba caso 2 

productoSeleccionado = "";
precioDelProducto = 0;
usuarioLogueado = true;

console.log((productoSeleccionado && `Gracias por elegir ${productoSeleccionado}`)|| "No seleccionaste ningún producto" );

console.log( precioDelProducto || productoSeleccionado && `Gracias por elegir ${productoSeleccionado}` && "¡Tu compra está 100% bonificada!")


console.log(usuarioLogueado || "Por favor, iniciá sesión para continuar.");

//Prueba caso 3 

productoSeleccionado = "Mouse HP 360";
precioDelProducto = 200
usuarioLogueado = false;

console.log((productoSeleccionado && `Gracias por elegir ${productoSeleccionado}`)|| "No seleccionaste ningún producto" );

console.log( precioDelProducto || productoSeleccionado && `Gracias por elegir ${productoSeleccionado}` && "¡Tu compra está 100% bonificada!")

console.log(usuarioLogueado || "Por favor, iniciá sesión para continuar.");

//Prueba caso 4 

productoSeleccionado = "Caramelos de cortesía";
precioDelProducto = 0;
usuarioLogueado = true;

console.log((productoSeleccionado && `Gracias por elegir ${productoSeleccionado}`)|| "No seleccionaste ningún producto" );

console.log( precioDelProducto || productoSeleccionado && `Gracias por elegir ${productoSeleccionado}` && "¡Tu compra está 100% bonificada!")

console.log(usuarioLogueado || "Por favor, iniciá sesión para continuar.");