const botonesCategorias = document.querySelectorAll(".categoria-btn");
const contenedorProductos = document.getElementById("productos-container");

function actualizarBotones(botonActivo) {

    botonesCategorias.forEach(btn => {
        btn.classList.remove("active");
    });

    botonActivo.classList.add("active");

}

function filtrarProductos(categoria) {

    if (categoria === "Todos") {
        return productos;
    }

    return productos.filter(producto =>
        producto.categoria === categoria
    );

}

function actualizarCatalogo(listaProductos) {

    contenedorProductos.classList.add("oculto");

    setTimeout(() => {

        renderProductos(listaProductos);

        contenedorProductos.classList.remove("oculto");

    }, 350);

}

botonesCategorias.forEach(botonCategoria => {

    botonCategoria.addEventListener("click", () => {

        const categoria = botonCategoria.textContent;

        const productosFiltrados = filtrarProductos(categoria);

        actualizarBotones(botonCategoria);

        actualizarCatalogo(productosFiltrados);

    });

});

function renderProductos(listaProductos) {

    contenedorProductos

    contenedorProductos.innerHTML = "";

    listaProductos.forEach(producto => {

        const card = document.createElement("article");
        card.classList.add("card");

        const imagen = document.createElement("img");

        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const contenido = document.createElement("div");

        contenido.classList.add("card-content");

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement("p");

        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("span");
        precio.classList.add("precio");

        precio.textContent = `$${producto.precio.toLocaleString("es-AR")}`;

        contenido.appendChild(titulo);
        contenido.appendChild(descripcion);
        contenido.appendChild(precio);

        card.appendChild(imagen);
        card.appendChild(contenido);

        contenedorProductos.appendChild(card);

    });

}