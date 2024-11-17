// Array para almacenar los elementos del carrito
let carrito = [];

// Función para agregar un vuelo al carrito
function agregarAlCarrito(nombrePaquete, precioBase) {
    // Obtener valores seleccionados del formulario
    const tipoVuelo = document.getElementById("tipo-vuelo").value;
    const aeropuertoOrigen = document.getElementById("aeropuerto-origen").value;
    const aeropuertoDestino = document.getElementById("aeropuerto-destino").value;
    const fechaIda = document.getElementById("fecha-ida").value;
    const fechaVuelta = document.getElementById("fecha-vuelta").value;
    const cantidadPersonas = parseInt(document.getElementById("cantidad-personas").value);

    // Calcular el precio total basado en la cantidad de personas
    const precioTotal = precioBase * cantidadPersonas;

    // Crear un objeto para el elemento del carrito
    const item = {
        nombre: nombrePaquete,
        tipoVuelo: tipoVuelo,
        origen: aeropuertoOrigen,
        destino: aeropuertoDestino,
        fechaIda: fechaIda,
        fechaVuelta: fechaVuelta || "N/A", // Si no se selecciona fecha de vuelta (solo ida)
        cantidadPersonas: cantidadPersonas,
        precio: precioTotal
    };

    // Añadir el elemento al carrito
    carrito.push(item);

    // Actualizar el carrito en el HTML
    actualizarCarrito();
}

// Función para actualizar el contenido del carrito en el HTML
function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito-items");
    carritoContainer.innerHTML = ""; // Limpiar contenido previo

    let total = 0;

    // Generar contenido para cada elemento del carrito
    carrito.forEach((item, index) => {
        total += item.precio; // Sumar el precio al total

        // Crear el HTML para cada item del carrito
        const itemHTML = `
            <div class="carrito-item">
                <h5>${item.nombre}</h5>
                <p>Tipo de vuelo: ${item.tipoVuelo}</p>
                <p>Origen: ${item.origen}</p>
                <p>Destino: ${item.destino}</p>
                <p>Fecha de ida: ${item.fechaIda}</p>
                <p>Fecha de vuelta: ${item.fechaVuelta}</p>
                <p>Cantidad de personas: ${item.cantidadPersonas}</p>
                <p>Precio: $${item.precio.toLocaleString()}</p>
                <button class="btn btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
            <hr>
        `;
        carritoContainer.innerHTML += itemHTML;
    });

    // Actualizar el total en el HTML
    document.getElementById("total").innerText = total.toLocaleString();
}

// Función para eliminar un elemento del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar el elemento del array
    actualizarCarrito(); // Actualizar el carrito en el HTML
}