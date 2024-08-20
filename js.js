const productos = JSON.parse(window.localStorage.getItem("productos") || "[]" ); 

function agregarProducto(id, nombre, precio, cantidad){
    if(productos.find(producto => producto.id === id)){
        return;
    }
    const nuevoProducto = {id, nombre, precio, cantidad};
    productos.push(nuevoProducto);
    window.localStorage.setItem("productos", JSON.stringify(productos))
}

function mostrarInventario(){
    for (let i = 0; i < productos.length; i++){
        console.log(`ID Producto ${productos[i].id} - Producto: ${productos[i].nombre} - Cantidad: ${productos[i].cantidad} - Precio: $ ${productos[i].precio}`)
    }
}

agregarProducto(1, "producto 1", 50, 90);
agregarProducto(2, "producto 2", 150, 190);
agregarProducto(3, "producto 3", 200, 50);
agregarProducto(3, "producto 3", 200, 50)
mostrarInventario();

 


 