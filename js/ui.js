let timeoutBusqueda;

const botonesCategorias = document.querySelectorAll(".categoria-btn");

const contenedorProductos = document.getElementById("productos-container");

const buscador = document.getElementById("buscador");

const contadorProductos = document.getElementById("contador-productos");

const modal = document.getElementById("modal-producto");

const modalImagen =
    document.getElementById("modal-imagen");

const modalTitulo =
    document.getElementById("modal-titulo");

const modalDescripcion =
    document.getElementById("modal-descripcion");

const modalBadges =
    document.getElementById("modal-badges");

const modalPrecio =
    document.getElementById("modal-precio");

const botonCerrarModal =
    document.getElementById("modal-cerrar");

const selectorOrden = document.getElementById("orden");

const botonesEtiquetas = document.querySelectorAll(".etiqueta-btn");

const estado = {
    categoria: "Todos",
    busqueda: "",
    orden: "destacados",
    etiquetas: []
};


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

    modalTitulo.textContent = producto.nombre;

    modalDescripcion.textContent = producto.descripcion;

    modalPrecio.textContent =
        `$${producto.precio.toLocaleString("es-AR")}`;

    modalBadges.innerHTML = "";

    const badges = crearBadges(producto);

    if (badges){

        modalBadges.appendChild(badges);

    }

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

    actualizarContador(productosOrdenados.length);

    contenedorProductos.classList.add("oculto");

    setTimeout(() => {

        if (productosFiltrados.length === 0) {

            renderEstadoVacio();

        } else {

            renderProductos(productosOrdenados);

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
        
        actualizarBotones(botonCategoria);

        actualizarCatalogo();
    });
    
});

buscador?.addEventListener("input", () => {

    estado.busqueda = buscador.value;

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

    actualizarCatalogo();

});

botonesEtiquetas.forEach(boton=>{

    boton.addEventListener("click",()=>{

        const etiqueta =
            boton.dataset.etiqueta;

        if(
            estado.etiquetas.includes(etiqueta)
        ){

            estado.etiquetas =
                estado.etiquetas.filter(
                    e=>e!==etiqueta
                );

            boton.classList.remove("active");

        }

        else{

            estado.etiquetas.push(etiqueta);

            boton.classList.add("active");

        }

        actualizarCatalogo();

    });

});

if (window.location.pathname.includes("productos.html")) {

    actualizarCatalogo();

}

