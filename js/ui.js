let timeoutBusqueda;

const botonesCategorias = document.querySelectorAll(".categoria-btn");

const contenedorProductos = document.getElementById("productos-container");

const buscador = document.getElementById("buscador");

const contadorProductos = document.getElementById("contador-productos");

const modal = document.getElementById("modal-producto");

const modalImagen = document.getElementById("modal-imagen");

const modalCategoria = document.getElementById("modal-categoria");

const modalTitulo = document.getElementById("modal-titulo");

const modalDescripcion = document.getElementById("modal-descripcion");

const modalIngredientes = document.getElementById("modal-ingredientes");

const modalRecomendacion = document.getElementById("modal-recomendacion");

const modalBadges = document.getElementById("modal-badges");

const modalPrecio = document.getElementById("modal-precio");

const botonCerrarModal = document.getElementById("modal-cerrar");

const selectorOrden = document.getElementById("orden");

const botonesEtiquetas = document.querySelectorAll(".etiqueta-btn");

const botonLimpiar = document.querySelector("#limpiar-filtros");

const contenedorPaginacion = document.getElementById("paginacion");

const estado = {
    categoria: "Todos",
    busqueda: "",
    orden: "destacados",
    etiquetas: [],
    pagina:1,
    productosPorPagina:12
};

function subirAlCatalogo() {

    buscador.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}

function reiniciarPaginacion() {
    estado.pagina = 1;
}

function renderPaginacion(totalProductos){

    contenedorPaginacion.innerHTML = "";

    const totalPaginas = Math.ceil(
        totalProductos / estado.productosPorPagina
    );

    if(totalPaginas <= 1){
        return;
    }

    const botonAnterior = document.createElement("button");

    botonAnterior.textContent = "←";

    botonAnterior.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

    botonAnterior.disabled = estado.pagina === 1;

    botonAnterior.classList.add("paginacion-nav");

    botonAnterior.addEventListener("click", () => {

        estado.pagina--;

        actualizarCatalogo();

        subirAlCatalogo();

    });

    contenedorPaginacion.appendChild(botonAnterior);
    for(let pagina = 1; pagina <= totalPaginas; pagina++){

        const boton = document.createElement("button");

        boton.textContent = pagina;

        boton.classList.toggle(
            "active",
            pagina === estado.pagina
        );

        boton.addEventListener("click", () => {

            estado.pagina = pagina;

            actualizarCatalogo();

            subirAlCatalogo();

        });

        contenedorPaginacion.appendChild(boton);

    }

    const botonSiguiente = document.createElement("button");

    botonSiguiente.textContent = "→";

    botonSiguiente.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

    botonSiguiente.classList.add("paginacion-nav");

    botonSiguiente.disabled =

        estado.pagina === totalPaginas;

    botonSiguiente.addEventListener("click", () => {

        estado.pagina++;

        actualizarCatalogo();

        subirAlCatalogo();

    });

    contenedorPaginacion.appendChild(botonSiguiente);

}

function paginarProductos(listaProductos){

    const inicio =

        (estado.pagina - 1) *

        estado.productosPorPagina;

    const fin =

        inicio +

        estado.productosPorPagina;

    return listaProductos.slice(

        inicio,

        fin

    );

}

function actualizarBotonLimpiar(){

    const hayFiltros =

        estado.categoria !== "Todos" ||

        estado.busqueda !== "" ||

        estado.etiquetas.length > 0;

    botonLimpiar.classList.toggle(
        "visible",
        hayFiltros
    );

}

function sincronizarControles(){

    // Categorías
    botonesCategorias.forEach(boton => {

        boton.classList.toggle(
            "active",
            boton.textContent === estado.categoria
        );

    });

    // Etiquetas
    botonesEtiquetas.forEach(boton => {

        boton.classList.toggle(
            "active",
            estado.etiquetas.includes(
                boton.dataset.etiqueta
            )
        );

    });

    // Buscador
    buscador.value = estado.busqueda;

    // Orden
    selectorOrden.value = estado.orden;

}


function ordenarProductos(listaProductos){

    const productosOrdenados =
        [...listaProductos];

    switch(estado.orden){

        case "precio-asc":

            productosOrdenados.sort(
                (a,b)=>a.precio-b.precio
            );

            break;

        case "precio-desc":

            productosOrdenados.sort(
                (a,b)=>b.precio-a.precio
            );

            break;

        case "nombre-asc":

            productosOrdenados.sort(
                (a,b)=>
                    a.nombre.localeCompare(b.nombre)
            );

            break;

        case "nombre-desc":

            productosOrdenados.sort(
                (a,b)=>
                    b.nombre.localeCompare(a.nombre)
            );

            break;

        case "destacados":

            productosOrdenados.sort(
                (a,b)=>
                    Number(b.destacado) -
                    Number(a.destacado)
            );

            break;

    }

    return productosOrdenados;

}

function cargarProductoModal(producto){

    modalImagen.src = producto.imagen;
    modalImagen.alt = producto.nombre;

    modalCategoria.textContent = producto.categoria;

    modalTitulo.textContent = producto.nombre;

    modalDescripcion.textContent = producto.descripcionLarga;

    modalRecomendacion.textContent = producto.recomendacion;

    modalPrecio.textContent =
        `$${producto.precio.toLocaleString("es-AR")}`;

    modalBadges.innerHTML = "";

    const badges = crearBadges(producto);

    if (badges){

        modalBadges.appendChild(badges);

    }

    modalIngredientes.innerHTML = "";

    producto.ingredientes.forEach(ingrediente => {

        const li = document.createElement("li");

        li.textContent = ingrediente;

        modalIngredientes.appendChild(li);

    });

}

function abrirModal(producto){

    if(!producto) return;

    botonCerrarModal.focus();

    cargarProductoModal(producto);

    modal.classList.add("abierto");

    document.body.style.overflow = "hidden";

}

function cerrarModal(){

    if (!modal.classList.contains("abierto")) return;

    modal.classList.remove("abierto");

    document.body.style.overflow = "";

}

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

function actualizarContador(totalProductos) {

    contadorProductos.classList.add("visible");

    if (totalProductos === 0) {

        contadorProductos.textContent =
            "No se encontraron productos";

        return;
    }

    const inicio =
        (estado.pagina - 1) *
        estado.productosPorPagina + 1;

    const fin = Math.min(
        estado.pagina * estado.productosPorPagina,
        totalProductos
    );

    if (totalProductos === 1) {

        contadorProductos.textContent =
            "Mostrando 1 de 1 producto";

        return;
    }

    contadorProductos.textContent =
        `Mostrando ${inicio}–${fin} de ${totalProductos} productos`;

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

    if(estado.etiquetas.length>0){

        resultado = resultado.filter(producto=>

            estado.etiquetas.every(etiqueta=>

                producto.etiquetas.includes(etiqueta)

            )

        );

    }

    return resultado;

}

function actualizarCatalogo() {

    const productosFiltrados = filtrarProductos();

    const productosOrdenados = ordenarProductos(productosFiltrados);

    const productosPaginados = paginarProductos(productosOrdenados);

    actualizarContador(productosOrdenados.length);

    contenedorProductos.classList.add("oculto");

    actualizarBotonLimpiar();

    sincronizarControles();

    setTimeout(() => {

        if (productosFiltrados.length === 0) {

            renderEstadoVacio();

        } else {

            renderProductos(productosPaginados);
            renderPaginacion(productosOrdenados.length);

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

        card.addEventListener("click", () => {

            abrirModal(producto);

        });

    });
}

botonCerrarModal?.addEventListener("click", cerrarModal);

botonesCategorias.forEach(botonCategoria => {

    botonCategoria.addEventListener("click", () => {
        
        estado.categoria = botonCategoria.textContent;

        reiniciarPaginacion();

        actualizarCatalogo();
    });
    
});

buscador?.addEventListener("input", () => {

    estado.busqueda = buscador.value;

    reiniciarPaginacion();

    clearTimeout(timeoutBusqueda);

    timeoutBusqueda = setTimeout(() => {

        actualizarCatalogo();

    }, 300);

});

modal?.addEventListener("click", (e) => {

    if (e.target === modal) {
        cerrarModal();
    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        cerrarModal();
    }

});

selectorOrden.addEventListener("change",()=>{

    estado.orden = selectorOrden.value;

    reiniciarPaginacion();

    actualizarCatalogo();

});

botonesEtiquetas.forEach(boton=>{

    boton.addEventListener("click",()=>{

        const etiqueta =
            boton.dataset.etiqueta;

        if(estado.etiquetas.includes(etiqueta)){

            estado.etiquetas = estado.etiquetas.filter(e=>e!==etiqueta);
        }

        else{
            estado.etiquetas.push(etiqueta);
        }

        reiniciarPaginacion();
        actualizarCatalogo();

    });

});

botonLimpiar.addEventListener("click",()=>{

    estado.categoria = "Todos";

    estado.busqueda = "";

    estado.orden = "destacados";

    estado.etiquetas = [];

    reiniciarPaginacion();

    actualizarCatalogo();

});

if (window.location.pathname.includes("productos.html")) {

    actualizarCatalogo();

}

