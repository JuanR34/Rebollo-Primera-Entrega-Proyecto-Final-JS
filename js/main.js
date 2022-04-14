let categoria = ["1) tortas","2) galletas", "3) salados"];
let lista = ["torta de chocolate", " torta de vainilla", " torta de frutillas", " torta mixta"]; 
let lista2 = ["galletitas con chocolate", " galletitas de avena", " chipa"];
let lista3 = ["pizzas", " milanesas", " sandwiches", " hamburguesas"];

// SALUDO
function saludar  ( nombre = prompt ("Hola. Cual es tu nombre?")) {
    let frase = (`Bienvenido ${nombre} a RichCakes, los mejores productos! `);
    alert (frase);
    document.write (frase);
}

saludar();

//PRODUCTOS
let elegir = prompt (`Estos son nuestros productos, elija una categoria: \n ${categoria}`);
 
if (elegir == 1 || elegir == "tortas" || elegir == "torta") {
    alert (`Estos son nuestros productos de la categoria tortas: ${lista}.`);
} else if (elegir == 2 || elegir == "galletas" || elegir == "galleta") {
    alert (`Estos son nuestros productos de la categoria galletas: ${lista2}. \n Se venden por docena.`);
} else if (elegir == 3 || elegir == "salados" || elegir == "salado") {
     alert (`Estos son nuestros productos de la categoria salados: ${lista3}.`);}

 class Prod  {
     constructor (producto, cantidad, precio) {
     this.producto = producto;
     this.cantidad = cantidad;
     this.precio = precio;
     this.eleccion = alert (`Usted eligió ${this.producto} y su precio es $ ${this.precio * this.cantidad}`)
    }
}

if (elegir == 1 || elegir == "tortas" || elegir == "torta") {
const producto = prompt (`elegi un producto: ${lista}`);
const cantidad = prompt ("cuantas unidades?");

 const torta1 = new Prod (producto,cantidad, 1000) 
} else if (elegir == 2 || elegir == "galletas" || elegir == "galleta") {
    const producto = prompt (`elegi un producto: ${lista2}`);
const cantidad = prompt ("cuantas unidades?");

 const galleta1 = new Prod (producto,cantidad, 500)
} else if (elegir == 3 || elegir == "salados" || elegir == "salado") {
    const producto = prompt (`elegi un producto: ${lista3}`);
const cantidad = prompt ("cuantas unidades?");

 const galleta1 = new Prod (producto,cantidad, 700)
} else (alert ("no le gustó nada de nuestro menú?"))


