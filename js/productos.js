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

    // ---------- DESTACADOS ----------

    new Producto(
        1,
        "Flat White",
        "Café suave con leche vaporizada.",
        4200,
        "Cafés",
        "img/Cafes/flatWhite.jpg",
        true,
        ["sinLactosa"]
    ),

    new Producto(
        2,
        "Avocado Toast",
        "Pan de masa madre con palta fresca.",
        5900,
        "Brunch",
        "img/Brunchs/avocadoToast.jpg",
        false,
        ["vegano"]
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
        false,
        ["sinLactosa"]
    ),

    new Producto(
        5,
        "Cappuccino",
        "Espresso, leche vaporizada y espuma cremosa.",
        4600,
        "Cafés",
        "img/Cafes/cappuccino.jpg",
        false,
        ["sinLactosa"]
    ),

    new Producto(
        6,
        "Espresso Doble",
        "Doble shot de café de especialidad.",
        3600,
        "Cafés",
        "img/Cafes/espresso.jpg",
        false,
        ["vegano", "sinTacc"]
    ),

    new Producto(
        18,
        "Americano",
        "Espresso suave con agua caliente.",
        3900,
        "Cafés",
        "img/Cafes/americano.jpg",
        false,
        ["vegano", "sinTacc"]
    ),

    new Producto(
        19,
        "Mocha",
        "Espresso con chocolate y leche vaporizada.",
        4900,
        "Cafés",
        "img/Cafes/mocha.jpg",
        true,
        ["sinLactosa"]
    ),

    new Producto(
        20,
        "Caramel Latte",
        "Latte con salsa de caramelo artesanal.",
        5200,
        "Cafés",
        "img/Cafes/caramelLatte.jpg",
        false,
        ["sinLactosa"]
    ),

    new Producto(
        21,
        "Cortado",
        "Espresso con una pequeña porción de leche.",
        3800,
        "Cafés",
        "img/Cafes/cortado.jpg"
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

    new Producto(
        22,
        "Lemon Pie",
        "Base crocante con crema de limón y merengue.",
        5600,
        "Pastelería",
        "img/Pasteleria/lemonPie.jpg"
    ),

    new Producto(
        23,
        "Muffin de Arándanos",
        "Muffin esponjoso con arándanos frescos.",
        3800,
        "Pastelería",
        "img/Pasteleria/muffinArandanos.jpg"
    ),

    new Producto(
        24,
        "Budín de Banana",
        "Budín casero con bananas maduras.",
        3600,
        "Pastelería",
        "img/Pasteleria/budinBanana.jpg",
        false,
        ["vegano"]
    ),

    new Producto(
        25,
        "Alfajor de Maicena",
        "Relleno de dulce de leche y coco rallado.",
        2900,
        "Pastelería",
        "img/Pasteleria/alfajorMaicena.jpg",
        false,
        ["sinTacc"]
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

    new Producto(
        26,
        "Wrap Vegetariano",
        "Vegetales grillados, hummus y hojas verdes.",
        7200,
        "Brunch",
        "img/Brunchs/wrapVege.jpg",
        false,
        ["vegano"]
    ),

    new Producto(
        27,
        "Tostadas Francesas",
        "Pan brioche con frutas y miel.",
        6800,
        "Brunch",
        "img/Brunchs/tostadasFrancesas.jpg"
    ),

    new Producto(
        28,
        "Yogur con Granola",
        "Yogur natural con granola artesanal y frutas.",
        5200,
        "Brunch",
        "img/Brunchs/yogurGranola.jpg",
        false,
        ["sinTacc"]
    ),

    new Producto(
        29,
        "Pancakes",
        "Pancakes con maple y frutos rojos.",
        7400,
        "Brunch",
        "img/Brunchs/pancakes.jpg"
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
        ["vegano", "sinTacc"]
    ),

    new Producto(
        30,
        "Matcha Latte",
        "Matcha premium con leche espumada.",
        4900,
        "Infusiones",
        "img/Infusiones/matchaLatte.jpg",
        true,
        ["sinLactosa"]
    ),

    new Producto(
        31,
        "Earl Grey",
        "Té negro con esencia de bergamota.",
        4100,
        "Infusiones",
        "img/Infusiones/earlGrey.jpg",
        false,
        ["vegano", "sinTacc"]
    ),

    new Producto(
        32,
        "Manzanilla",
        "Infusión relajante de flores de manzanilla.",
        3500,
        "Infusiones",
        "img/Infusiones/teManzanilla.jpg",
        false,
        ["vegano", "sinTacc"]
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
    ),

    new Producto(
        17,
        "Jugo de Frutos Rojos",
        "Jugo hecho con los frutos rojos más frescos.",
        5000,
        "Bebidas",
        "img/Bebidas/jugoRojo.jpg",
        false,
        ["vegano", "sinTacc"]
    ),

    new Producto(
        33,
        "Smoothie Tropical",
        "Mango, ananá y banana licuados.",
        5600,
        "Bebidas",
        "img/Bebidas/smoothieTropical.jpg",
        false,
        ["vegano", "sinTacc"]
    ),

    new Producto(
        34,
        "Chocolate Caliente",
        "Chocolate belga caliente con crema.",
        5200,
        "Bebidas",
        "img/Bebidas/chocolateCaliente.jpg"
    ),

    new Producto(
        35,
        "Iced Tea",
        "Té frío con limón y menta.",
        4300,
        "Bebidas",
        "img/Bebidas/icedTea.jpg",
        false,
        ["vegano", "sinTacc"]
    ),

    new Producto(
        36,
        "Smoothie de Frutilla",
        "Frutillas naturales con yogur y hielo.",
        5700,
        "Bebidas",
        "img/Bebidas/smoothieFrutilla.jpg",
        false,
        ["sinLactosa"]
    )

];