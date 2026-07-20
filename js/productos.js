class Producto {

    constructor(
        id,
        nombre,
        descripcion,
        precio,
        categoria,
        imagen,
        destacado = false,
        etiquetas = []
    ) {

        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.destacado = destacado;
        this.etiquetas = etiquetas;

        this.slug = nombre
            .toLowerCase()
            .replace(/\s+/g, "-");

    }

}

const productos = [

    new Producto(
        1,
        "Flat White",
        "Café suave con leche vaporizada.",
        4200,
        "Cafés",
        "img/flatWhite.jpg"
    ),

    new Producto(
        2,
        "Avocado Toast",
        "Pan de masa madre con palta fresca.",
        5900,
        "Brunch",
        "img/avocadoToast.jpg"
    ),

    new Producto(
        3,
        "Cheesecake",
        "Con frutos rojos.",
        5800,
        "Pastelería",
        "img/cheescake.jpg"
    )

];