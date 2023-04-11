//////////////////////////// Primera Pre-entrega.
// Declaro las variables
const iva = 1.21;
const compu = 10000;
const tele = 8000;
const parlante = 5000;
let metodoPago = "";
let precio;
let precioT = 0;
continuar = true;

function compra() {
    precio = 0;
    // Eleccion de producto 
    let cliente = prompt("Bienvenido a nuestra tienda, que desea comprar?(Ingrese 'computadora', 'tv', o 'parlante')")

    // Valido los datos
    while (cliente !== 'tv' && cliente !== 'parlante' && cliente !== 'computadora') {
        alert("ingrese producto valido");
        cliente = prompt("Que desea comprar?(Ingrese 'computadora', 'tv', o 'parlante')");
    }

    // Para mostrar por pantalla el producto que eligio y el precio
    if (cliente === "computadora") {
        precio += compu;
        alert("Usted eligio " + cliente + " el total es de $" + precio);
    } else if (cliente === "tv") {
        precio += tele;
        alert("Usted eligio " + cliente + " el total es de $" + precio);
    } else {
        precio += parlante;
        alert("Usted eligio " + cliente + " el total es de $" + precio);
    }

    // metodo de pago
    metodoPago = (prompt("ingrese si paga en 'Efectivo' o 'Tarjeta' (recuerde que los pagos con tarjeta se le agrega el IVA): "));

    // validacion metodo de pago

    while (metodoPago !== 'efectivo' && metodoPago !== 'tarjeta') {
        alert("Metodo de pago invalido");
        metodoPago = (prompt("ingrese si paga en 'Efectivo' o 'Tarjeta' (recuerde que los pagos con tarjeta se le agrega el IVA): "));
    }
    if (metodoPago === "tarjeta") {
        precio = precio * iva;
        alert("El precio con tarjeta quedo en $" + precio);
    } else {
        precio;
        alert("El precio en efectivo quedo en $" + precio);
    }

}
while (continuar) {
    compra();
    precioT += precio;
    continuar = confirm("Agregamos otro producto?");
}

alert("El total de la compra es de  $" + precioT + ".");