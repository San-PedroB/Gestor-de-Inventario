

for (let i = 0; i <= 10; i++){
    if (i == 10){
        console.log(`Numero: ${i} - Fin del bucle`);
    }
    else console.log(`Numero: ${i}`);
}


for (let i = 0; i <= 10; i++){
    if (i === 0){
        console.log(`El numero: ${i} no es par ni impar`)
    }
    else if (i % 2 === 0){
        console.log(`El numero: ${i} - Es par`);
    }
    else console.log(`El numero: ${i} - Es impar`);
}

//ACCEDER A ELEMENTOS DE UN ARRAY CON CICLO FOR A TRAVEZ DE SU INDICE
//AL FINAL AGREGO LOS PRODUCTOS SELECCIONADOS A UN ARRAY NUEVO

const electrodomesticos = [
    {nombre: "Televisor LED 50 pulgadas", precio: 479992, descuento: false},
    {nombre: "Refrigerador de 2 Puertas", precio: 719992, descuento: true},
    {nombre: "Lavadora Automática", precio: 279992, descuento: false},
    {nombre: "Horno de Microondas", precio: 103992, descuento: false},
    {nombre: "Aire Acondicionado 12,000 BTU", precio: 399992, descuento: false}
];

for (let i = 0; i < electrodomesticos.length; i++){
    console.log(electrodomesticos[i].nombre + " - Precio: $" + electrodomesticos[i].precio)
}

//console.log(electrodomesticos[2].nombre);

let arrayMenor4000 = [];
let contador = 0;
for (let i = 0; i < electrodomesticos.length; i++){
    if (i == 0){
        console.log("Productos que valen menos de $400.000: ")
    }
    if (electrodomesticos[i].precio <= 400000){
        contador += 1;
        console.log(`${contador}: ${electrodomesticos[i].nombre}`)
        arrayMenor4000.push({nombre: electrodomesticos[i].nombre, precio: electrodomesticos[i].precio});
    }
}
console.log(`Total de productos que valen menos de $400.000: ${contador}`)

console.log(arrayMenor4000);


for (let i = 0; i < 10; i++){
    if(i === 5){
        console.log("CINCO");
        continue;
    }
    console.log(i)
}

for(let d = 0; d < electrodomesticos.length; d++){
    if(electrodomesticos[d].descuento){
        let articuloDescuento = electrodomesticos[d].nombre;
        console.log(`El articulo ${articuloDescuento} posee un zukulemto descuento`)
    }
    else if (console.log(electrodomesticos[d].nombre));
}


//FIZZ BUZZ

for (let i = 1; i < 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} - FIZZ BUZZ`)
    }
    else if (i % 5 === 0){
        console.log(`${i} - BUZZ`)
    }
    else if (i % 3 === 0){
        console.log(`${i} - FIZZ`)
    }
}


function decirNombre (nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

function decirEdad(edad){
    console.log(`tu edad es de ${edad}`);
    return edad;
}

function comprobarEdad(edad){
    if(edad > 18) {
        console.log("Tienes mas de 18 años")
    }
    else {
        console.log("No tienes mas de 18 años")
    }
    return edad;
}

function saludoCompleto(nombre, apellido, edad){
   decirNombre(nombre, apellido);
   const edadComprobada = decirEdad(edad);
   comprobarEdad(edadComprobada);
}

saludoCompleto("Pedro", "Beltran", 31);




//---------------------------------------------GESTOR DE INVENTARIO----------------------------------------------------------------------

let productos = [];

//TODO: AGREGAR VALIDACION DE TIPO DE DATO A ID, PRECIO, CANTIDAD
//CREAR FUNCIONES PARA VALIDAR DATOS
//VER TEMA DE ERRORES SI PONGO UN TEXTO "EQUIS" EN UN INPUT QUE DEBE SER NUMBER O STRING, ENFOCARLO EN ERROR.

/*function agregarProducto(id, nombre, precio, cantidad){
    let nuevoProducto = {id, nombre, precio, cantidad};
    const idExiste = productos.some(producto => producto.id === id); //retorna un bulean
    if (idExiste){
        console.log(`El producto con ID ${id} ya existe`);
    }
    else {productos.push(nuevoProducto);
    console.log(`Producto ${nombre} agregado satisfactoriamente`)};
};*/ // VERSION JS CLASICO (ABAJO VERSION JS MODERNO CON ARROW FUNCTION)


const agregarProducto = (id, nombre, precio, cantidad) => {
    //Verificar que nombre sea un string y que no este vacio
    if(typeof nombre !== "string" || nombre.trim() === ""){
        console.log("El articulo debe tener un nombre");
        return;
    }
    // Verificar que id, precio y cantidad sean valores numéricos
    if(typeof id !== "number" || typeof precio !== "number" || typeof cantidad !== "number"){
        console.log("ID, precio y cantidad deben ser valores numéricos");
        return;
    }
    // Verificar que precio y cantidad sean mayores que 0
    if(precio <= 0 || cantidad <= 0){
        console.log("Precio o Cantidad no pueden ser menores a 1");
        return;
    }
    let nuevoProducto = {id, nombre, precio, cantidad};
    // Verificar si el producto ya existe en el inventario
    if (!comprobarId(id)){
        return;
    }
    productos.push(nuevoProducto);
    console.log(`Producto ${nombre} agregado satisfactoriamente`);
};

//id y nuevoID debe ser number
//comprobar que una id ya existe en array
const comprobarId = (id) => {
    if(typeof id !== "number" || id < 0){
        console.log(`El id: "${id}" no es valido, debe ser un numero positivo`);
        return;
    }
    const productoExiste = productos.find(producto => producto.id === id)
    if(productoExiste){
        console.log(`El ID ${id} ya se encuentra registrado en el producto ${productoExiste.nombre}`)
        return false;
    }
    return true;
}

const modificarProducto = (id, nuevoId, nuevoNombre, nuevoPrecio, nuevaCantidad) => {
    //Validar que nuevoID no se repita, excepto si es el mismo que el ID actual
    if (nuevoId !== id && !comprobarId(nuevoId)){
        return; // Detener si el nuevo ID ya existe y es diferente del actual
    }

    //validar que nuevoID, nuevoPrecio y nuevaCantidad sean numeros positivos

    if(typeof nuevoId !== "number" || nuevoId < 0){
        console.log("El nuevo ID debe ser un numero positivo mayor a 0 ")
        return;
    };
    if(typeof nuevoPrecio !== "number" || nuevoPrecio < 1){
        console.log("El nuevo precio debe ser un numero mayor a 1");
        return;
    };
    if(typeof nuevaCantidad !== "number" || nuevaCantidad < 0){
        console.log("La nueva cantidad debe ser un numero mayor o igual a 0")
        return;
    };
    //validar que nuevoNombre no sea un string vacio
    if(typeof nuevoNombre !== "string" || nuevoNombre.trim === ""){
        console.log(`El nuevo nombre no puede ser una cadena de texto vacia`);
        return;
    }

    //condicion si .find devuelve true
    let producto = productos.find(producto => producto.id === id);
    if (producto){
        producto.id = nuevoId;
        producto.nombre = nuevoNombre;
        producto.precio = nuevoPrecio;
        producto.cantidad = nuevaCantidad;
        console.log("Producto cambiado con exito");
    }
    //condicion si develve false
    else { console.log(`No es posible modificar, ya que el ID ${id} no existe`);
    };
}

const mostrarInventario = () =>{
    if (productos.length < 1){
        console.log("NO HAY NADA EN EL INVENTARIO")
        return;
    }
    console.log("INVENTARIO COMPLETO: ")
    productos.forEach((producto) => {
        console.log(`ID: ${producto.id} - Producto: ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $ ${producto.precio}`)
    });
};

const calcularValorInventario = () => {
    let total = 0;
    productos.forEach((producto) => {
        let totalProducto = producto.precio * producto.cantidad;
        total += totalProducto;
    });
    console.log(total);
    return total;
};


// EN FUNCION CALCULAR MAYOR CANTIDAD VER COMO SOLUCIONAR EL CASO DE QUE 2 PRODUCTOS CUENTEN CON LA MISMA CANTIDAD DE UNIDADES
const calcularMayorCantidad = () => {
    let mayorCantidad = 0;
    let arrayMayorCantidad = [];
    productos.forEach((producto)=>{
        if(producto.cantidad > mayorCantidad){
            mayorCantidad = producto.cantidad;
            arrayMayorCantidad = [producto.nombre];
        }
        else if (producto.cantidad === mayorCantidad){
            arrayMayorCantidad.push(producto.nombre);
        }
    });
    if(arrayMayorCantidad.length === 1 ){
        console.log(`nombre producto ${arrayMayorCantidad[0]} - cantidad ${mayorCantidad} unidades`);
    }
    else if (arrayMayorCantidad.length > 1){
        console.log(`Los productos con mayor cantidad son: ${arrayMayorCantidad.join(", ")}con ${mayorCantidad} unidades cada uno`);
    }
    else {
        console.log("No hay productos en el inventario");
    }
};




agregarProducto(1, "producto 1", 50, 90);
agregarProducto(2, "producto 2", 150, 190);
agregarProducto(3, "producto 3", 200, 190);


calcularMayorCantidad();

comprobarId("asdasdsa");
