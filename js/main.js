//Array de Productos
const productos = [
    { nombre: "maquina super taper", precio: 11190 },
    { nombre: "maquina pro", precio: 17500 },
    { nombre: "maquina wahl", precio: 13380 },
    { nombre: "kit de tijeras", precio: 9290 },
    { nombre: "tijera de pulir", precio: 4590 },
];
//Carrito
let carrito = [];
//Saludo y respuesta del usuario
let nombre = prompt("Ingresa tu nombre:");
let seleccion = prompt("Hola, " + nombre + " estas en nuestra tienda online, desea comprar algun producto?\nSelecciona tu respuesta:\n1 - Si quieres comprar\n2 - No gracias")
//Comenzamos con el bucle
while (seleccion != "1" && seleccion != "2") {
    alert("Error, ingresa una respuesta valida.");
    seleccion = prompt("Selecciona tu respuesta:\n1 - Si quieres comprar\n2 - No gracias")
}

if (seleccion == "1") {
    alert("a continuacion, nuestra lista de productos")
    let listaDeProducto = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$"
    );
    alert(listaDeProducto.join(" - "))
} else if (seleccion == "2") {
    alert("Gracias por pasar por nuestra tienda, hasta pronto");
}

while (seleccion != "no") {
    let productos = prompt("Agrega un producto de la tienda a tu carro!");
    let precio = 0
//Casos de los precios con switch
    if (productos == "maquina super taper" || productos == "maquina pro" || productos == "maquina wahl" || productos == "kit de tijeras" || productos == "tijera de pulir") {
        switch (productos) {
            case "maquina super taper":
                precio = 11190
                break;
            case "maquina pro":
                precio = 17500
                break;
            case "maquina wahl":
                precio = 13380
                break;
            case "kit de tijeras":
                precio = 9290
                break;
            case "tijera de pulir":
                precio = 4590
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades queres llevar?"))
//push del carrito
    carrito.push({productos,unidades,precio})
    console.log(carrito);
    }else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        })
    break;
    }
}

const total = carrito.reduce((acu, el) =>acu + el.precio * el.unidades, 0);
console.log(`el total a pagar de su compra es: ${total}`);

//Filtrado de productos
function filtradoDeProductos(arr, filtro) {
    const busquedaProducto = arr.find((elementos) =>{
        return elementos.nombre.includes(filtro.toLowerCase())
    })
    return busquedaProducto;
}

let promptEncontrado = prompt("Ingrese el producto que quiere filtrar:\n- maquina super taper\n- maquina pro\n- maquina wahl\n- kit de tijeras\n- tijera de pulir")
const servEncontrado = filtradoDeProductos(productos,promptEncontrado)
console.log(servEncontrado);