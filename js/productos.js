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
        "img/Cafes/flatWhite.jpg",
        true
    ),

    new Producto(
        2,
        "Avocado Toast",
        "Pan de masa madre con palta fresca.",
        5900,
        "Brunch",
        "img/Brunchs/avocadoToast.jpg"
    ),

    new Producto(
        3,
        "Cheesecake",
        "Con frutos rojos.",
        5800,
        "Pastelería",
        "img/Pasteleria/cheescake.jpg",
        true
    ),
    // ---------- CAFÉS ----------

    new Producto(
        4,
        "Latte",
        "Espresso con abundante leche vaporizada.",
        4500,
        "Cafés",
        "img/Cafes/latte.jpg",
        true
    ),

    new Producto(
        5,
        "Cappuccino",
        "Espresso, leche vaporizada y espuma cremosa.",
        4600,
        "Cafés",
        "img/Cafes/cappuccino.jpg"
    ),

    new Producto(
        6,
        "Espresso Doble",
        "Doble shot de café de especialidad.",
        3600,
        "Cafés",
        "img/Cafes/espresso.jpg"
    ),

    // ---------- PASTELERÍA ----------

    new Producto(
        7,
        "Cookie de Chocolate",
        "Galleta artesanal con chips de chocolate.",
        3200,
        "Pastelería",
        "img/Pasteleria/cookieChoco.jpg"
    ),

    new Producto(
        8,
        "Medialuna de Manteca",
        "Medialuna artesanal recién horneada.",
        2200,
        "Pastelería",
        "img/Pasteleria/medialuna.jpg"
    ),

    new Producto(
        9,
        "Brownie con Nueces",
        "Brownie húmedo con nueces y chocolate semiamargo.",
        4500,
        "Pastelería",
        "img/Pasteleria/brownieNuez.jpg"
    ),

    // ---------- BRUNCH ----------

    new Producto(
        10,
        "Tostado Jamón y Queso",
        "Pan de campo tostado con jamón y queso.",
        6500,
        "Brunch",
        "img/Brunchs/tostadoJQ.jpg"
    ),

    new Producto(
        11,
        "Bagel de Salmón",
        "Bagel con queso crema, salmón ahumado y rúcula.",
        9800,
        "Brunch",
        "img/Brunchs/bagelSalmon.jpg"
    ),

    new Producto(
        12,
        "Huevos Benedictinos",
        "Huevos poché sobre pan brioche con salsa holandesa.",
        8900,
        "Brunch",
        "img/Brunchs/huevosBenedictinos.jpg"
    ),

    // ---------- INFUSIONES ----------

    new Producto(
        13,
        "Té Chai",
        "Infusión especiada con leche.",
        4200,
        "Infusiones",
        "img/Infusiones/teChai.jpg",
        false,
        ["sinTacc"]
    ),

    new Producto(
        14,
        "Té Verde",
        "Té verde premium de hojas seleccionadas.",
        3900,
        "Infusiones",
        "img/Infusiones/teVerde.jpg",
        false,
        ["vegano"]
    ),

    // ---------- BEBIDAS ----------

    new Producto(
        15,
        "Limonada con Menta",
        "Limonada natural con menta fresca y jengibre.",
        4700,
        "Bebidas",
        "img/Bebidas/limonadaMenta.jpg",
        false,
        ["vegano", "sinTacc"]
    ),

    new Producto(
        16,
        "Jugo de Naranja",
        "Jugo exprimido en el momento.",
        4300,
        "Bebidas",
        "img/Bebidas/jugoNaranja.jpg",
        false,
        ["vegano", "sinTacc"]
    )
];