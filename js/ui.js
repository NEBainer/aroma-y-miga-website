let timeoutBusqueda;

const botonesCategorias = document.querySelectorAll(".categoria-btn");

const contenedorProductos = document.getElementById("productos-container");

const buscador = document.getElementById("buscador");

const contadorProductos = document.getElementById("contador-productos");

const estado = {
    categoria: "Todos",
    busqueda: ""
};

function crearBadges(producto) {

    if (producto.etiquetas.length === 0) {

        return null;

    }

    const contenedor = document.createElement("div");
    contenedor.classList.add("producto-badges");

    producto.etiquetas.forEach(etiqueta => {

        const datosBadge = BADGES[etiqueta];

        if (!datosBadge) return;

        const badge = document.createElement("span");
        badge.classList.add("badge", datosBadge.clase);

        badge.innerHTML = `
            <i class="${datosBadge.icono}"></i>
            ${datosBadge.texto}
        `;

        contenedor.appendChild(badge);

    });

    return contenedor;

}

function renderEstadoVacio(){

    contenedorProductos.innerHTML = `

        <div class="estado-vacio">

            <span>🔍</span>

            <h3>No encontramos productos</h3>

            <p>
                Probá con otra búsqueda
                o seleccioná otra categoría.
            </p>

        </div>

    `;

}

function actualizarContador(cantidad) {

    contadorProductos.classList.add("visible");

    if (cantidad === 0) {

        contadorProductos.textContent = "No se encontraron productos";

        return;

    }

    contadorProductos.textContent =
        cantidad === 1
            ? "Mostrando 1 producto"
            : `Mostrando ${cantidad} productos`;

}

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

    actualizarContador(productosFiltrados.length);

    contenedorProductos.classList.add("oculto");

    setTimeout(() => {

        if (productosFiltrados.length === 0) {

            renderEstadoVacio();

        } else {

            renderProductos(productosFiltrados);

        }

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

        const badges = crearBadges(producto);

        const precio = document.createElement("span");
        precio.classList.add("precio");

        precio.textContent = `$${producto.precio.toLocaleString("es-AR")}`;

        contenido.appendChild(titulo);
        contenido.appendChild(descripcion);
        if (badges) {
            contenido.appendChild(badges);
        }
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

    clearTimeout(timeoutBusqueda);

    timeoutBusqueda = setTimeout(() => {

        actualizarCatalogo();

    }, 300);

});

