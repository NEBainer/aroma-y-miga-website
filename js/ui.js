function renderProductos(listaProductos) {

    const contenedor = document.getElementById("productos-container");

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

        contenedor.appendChild(card);

    });

}