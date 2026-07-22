const botonesCategorias = document.querySelectorAll(".categoria-btn");

const contenedorProductos = document.getElementById("productos-container");

const buscador = document.getElementById("buscador");

const estado = {
    categoria: "Todos",
    busqueda: ""
};

function actualizarBotones(botonActivo) {

    botonesCategorias.forEach(btn => {
        btn.classList.remove("active");
    });

    botonActivo.classList.add("active");

}

function filtrarProductos() {

    let resultado = productos;

    if (estado.categoria !== "Todos") {

        resultado = resultado.filter(producto =>
            producto.categoria === estado.categoria
        );

    }

    if (estado.busqueda !== "") {

        resultado = resultado.filter(producto =>

            producto.nombre
                .toLowerCase()
                .includes(
                    estado.busqueda.toLowerCase()
                )

        );

    }

    return resultado;

}

function actualizarCatalogo() {

    const productosFiltrados = filtrarProductos();

    contenedorProductos.classList.add("oculto");

    setTimeout(() => {

        renderProductos(productosFiltrados);

        contenedorProductos.classList.remove("oculto");

    }, 350);

}

function renderProductos(listaProductos) {

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

botonesCategorias.forEach(botonCategoria => {

    botonCategoria.addEventListener("click", () => {
        
        estado.categoria = botonCategoria.textContent;
        
        actualizarBotones(botonCategoria);

        actualizarCatalogo();
    });
    
});

buscador.addEventListener("input", () => {

    estado.busqueda = buscador.value;

    actualizarCatalogo();

});


