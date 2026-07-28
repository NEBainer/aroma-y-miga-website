class Producto {

    constructor(
        id,
        nombre,

        descripcion,
        descripcionLarga,

        ingredientes = [],
        recomendacion = "",

        precio,
        categoria,
        imagen,

        destacado = false,
        etiquetas = []
    ) {

        // Identidad
        this.id = id;
        this.nombre = nombre;

        // Información
        this.descripcion = descripcion;
        this.descripcionLarga = descripcionLarga;
        this.ingredientes = ingredientes;
        this.recomendacion = recomendacion;

        // Información comercial
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.destacado = destacado;
        this.etiquetas = etiquetas;

        // Utilidades
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

        "Preparado con un espresso doble y leche microespumada, el Flat White ofrece un equilibrio perfecto entre intensidad y cremosidad. Una opción ideal para quienes disfrutan un café con cuerpo y una textura sedosa.",

        [
            "Espresso doble",
            "Leche vaporizada"
        ],

        "Perfecto para acompañar con una porción de cheesecake o una cookie artesanal.",

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

        "Una combinación de pan de masa madre tostado, palta fresca y un delicado toque de aceite de oliva y semillas seleccionadas. Un brunch liviano, fresco y lleno de sabor para cualquier momento del día.",

        [
            "Pan de masa madre",
            "Palta fresca",
            "Aceite de oliva",
            "Mix de semillas"
        ],

        "Ideal para quienes buscan una opción nutritiva y llena de frescura.",

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

        "Una base crocante de galletitas sostiene un relleno suave de queso crema, terminado con una generosa cobertura de frutos rojos. Un clásico de nuestra pastelería que combina dulzura y frescura en cada porción.",

        [
            "Queso crema",
            "Base de galletitas",
            "Frutos rojos"
        ],

        "Perfecto para disfrutar junto a un Flat White o un Cappuccino.",

        5800,
        "Pastelería",
        "img/Pasteleria/cheescake.jpg",

        true
    ),

    // ---------- CAFÉS ----------

    new Producto(
        1,
        "Flat White",

        "Café suave con leche vaporizada.",

        "Preparado con un espresso doble y leche microespumada, el Flat White ofrece un equilibrio perfecto entre intensidad y cremosidad. Una opción ideal para quienes disfrutan un café con cuerpo y una textura sedosa.",

        [
            "Espresso doble",
            "Leche vaporizada"
        ],

        "Perfecto para acompañar con una porción de cheesecake o una cookie artesanal.",

        4200,
        "Cafés",
        "img/Cafes/flatWhite.jpg",

        true,
        ["sinLactosa"]
    ),

    new Producto(
        4,
        "Latte",

        "Espresso con abundante leche vaporizada.",

        "Un clásico preparado con espresso de especialidad y una generosa cantidad de leche vaporizada. Su sabor suave y equilibrado lo convierte en una excelente elección para cualquier momento del día.",

        [
            "Espresso",
            "Leche vaporizada"
        ],

        "Ideal para desayunos o meriendas junto a una medialuna recién horneada.",

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

        "El equilibrio perfecto entre espresso intenso, leche vaporizada y una espuma ligera y aterciopelada. Cada taza se prepara al momento para conservar todo su aroma.",

        [
            "Espresso",
            "Leche vaporizada",
            "Espuma de leche"
        ],

        "Una excelente elección para disfrutar con pastelería artesanal.",

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

        "Dos shots de espresso preparados con granos cuidadosamente seleccionados. Intenso, aromático y con un cuerpo marcado que resalta todas las notas del café.",

        [
            "Espresso doble"
        ],

        "Ideal para quienes buscan una experiencia de café intensa y auténtica.",

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

        "Una preparación simple que combina espresso de especialidad con agua caliente para obtener una bebida liviana, equilibrada y muy aromática.",

        [
            "Espresso",
            "Agua caliente"
        ],

        "Perfecto para disfrutar durante una pausa o acompañar una lectura tranquila.",

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

        "La combinación ideal entre el carácter del espresso y la dulzura del chocolate, suavizada con leche vaporizada para lograr una bebida cremosa y reconfortante.",

        [
            "Espresso",
            "Chocolate",
            "Leche vaporizada"
        ],

        "Ideal para quienes disfrutan sabores dulces sin perder la esencia del café.",

        4900,
        "Cafés",
        "img/Cafes/mocha.jpg",

        false,
        ["sinLactosa"]
    ),

    new Producto(
        20,
        "Caramel Latte",

        "Latte con salsa de caramelo artesanal.",

        "Nuestro clásico latte enriquecido con una suave salsa de caramelo artesanal que aporta notas dulces sin opacar el sabor del espresso.",

        [
            "Espresso",
            "Leche vaporizada",
            "Salsa de caramelo"
        ],

        "Una excelente opción para quienes buscan un café con un toque dulce.",

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

        "La intensidad del espresso equilibrada con una pequeña cantidad de leche vaporizada. Una preparación simple que resalta el sabor del café sin perder suavidad.",

        [
            "Espresso",
            "Leche vaporizada"
        ],

        "Ideal para quienes prefieren un café corto, intenso y equilibrado.",

        3800,
        "Cafés",
        "img/Cafes/cortado.jpg"
    ),

    // ---------- PASTELERÍA ----------

    new Producto(
        3,
        "Cheesecake",

        "Con frutos rojos.",

        "Nuestra cheesecake combina una base crocante de galletitas con un relleno suave de queso crema y una generosa cobertura de frutos rojos. Un clásico irresistible para cualquier momento del día.",

        [
            "Queso crema",
            "Base de galletitas",
            "Frutos rojos"
        ],

        "Ideal para acompañar con un Flat White o un Cappuccino.",

        5800,
        "Pastelería",
        "img/Pasteleria/cheescake.jpg",

        true
    ),

    new Producto(
        7,
        "Cookie de Chocolate",

        "Galleta artesanal con chips de chocolate.",

        "Cookie horneada diariamente con una masa suave por dentro y bordes apenas crocantes. Repleta de chips de chocolate para un equilibrio perfecto entre textura y sabor.",

        [
            "Harina",
            "Manteca",
            "Chocolate semiamargo",
            "Azúcar"
        ],

        "Perfecta para acompañar un café recién preparado.",

        3200,
        "Pastelería",
        "img/Pasteleria/cookieChoco.jpg"
    ),

    new Producto(
        8,
        "Medialuna de Manteca",

        "Medialuna artesanal recién horneada.",

        "Elaborada con manteca y una masa de fermentación lenta que le aporta un interior liviano y un exterior dorado. Recién salida del horno cada mañana.",

        [
            "Harina",
            "Manteca",
            "Leche",
            "Azúcar"
        ],

        "Una opción clásica para el desayuno o la merienda.",

        2200,
        "Pastelería",
        "img/Pasteleria/medialuna.jpg"
    ),

    new Producto(
        9,
        "Brownie con Nueces",

        "Brownie húmedo con nueces y chocolate semiamargo.",

        "Brownie de textura intensa y húmeda elaborado con chocolate semiamargo y nueces seleccionadas. Un favorito para quienes disfrutan sabores profundos y auténticos.",

        [
            "Chocolate semiamargo",
            "Nueces",
            "Manteca",
            "Cacao"
        ],

        "Ideal para disfrutar con un Mocha o un Chocolate Caliente.",

        4500,
        "Pastelería",
        "img/Pasteleria/brownieNuez.jpg"
    ),

    new Producto(
        22,
        "Lemon Pie",

        "Base crocante con crema de limón y merengue.",

        "Una combinación equilibrada entre una base crocante, crema de limón fresca y un suave merengue italiano tostado que aporta un final delicado.",

        [
            "Masa dulce",
            "Crema de limón",
            "Merengue italiano"
        ],

        "Perfecto para quienes prefieren postres frescos y cítricos.",

        5600,
        "Pastelería",
        "img/Pasteleria/lemonPie.jpg"
    ),

    new Producto(
        23,
        "Muffin de Arándanos",

        "Muffin esponjoso con arándanos frescos.",

        "Muffin de textura aireada elaborado con arándanos que aportan un contraste natural entre dulzor y acidez en cada bocado.",

        [
            "Harina",
            "Arándanos",
            "Manteca",
            "Leche"
        ],

        "Excelente opción para acompañar un Té Verde o un Latte.",

        3800,
        "Pastelería",
        "img/Pasteleria/muffinArandanos.jpg"
    ),

    new Producto(
        24,
        "Budín de Banana",

        "Budín casero con bananas maduras.",

        "Budín elaborado con bananas maduras que aportan dulzor natural y una textura increíblemente húmeda. Una receta simple y llena de sabor.",

        [
            "Bananas",
            "Harina",
            "Canela",
            "Azúcar mascabo"
        ],

        "Ideal para disfrutar en la merienda junto a un café suave.",

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

        "Dos suaves tapas de maicena unidas por abundante dulce de leche y terminadas con coco rallado. Un clásico de la pastelería argentina.",

        [
            "Maicena",
            "Dulce de leche",
            "Coco rallado"
        ],

        "Perfecto para quienes buscan un sabor tradicional.",

        2900,
        "Pastelería",
        "img/Pasteleria/alfajorMaicena.jpg",

        false,
        ["sinTacc"]
    ),

    // ---------- BRUNCH ----------

    new Producto(
        2,
        "Avocado Toast",

        "Pan de masa madre con palta fresca.",

        "Una generosa capa de palta fresca sobre pan de masa madre tostado, terminada con un toque de aceite de oliva y condimentos seleccionados. Un brunch fresco, liviano y lleno de sabor.",

        [
            "Pan de masa madre",
            "Palta fresca",
            "Aceite de oliva",
            "Mix de semillas"
        ],

        "Ideal para quienes buscan una opción liviana y nutritiva.",

        5900,
        "Brunch",
        "img/Brunchs/avocadoToast.jpg",

        false,
        ["vegano"]
    ),

    new Producto(
        10,
        "Tostado Jamón y Queso",

        "Pan de campo tostado con jamón y queso.",

        "Nuestro clásico tostado preparado con pan de campo, jamón cocido y queso fundido. Dorado a la plancha para lograr una textura crocante por fuera y un interior irresistible.",

        [
            "Pan de campo",
            "Jamón cocido",
            "Queso"
        ],

        "Perfecto para un almuerzo rápido o una merienda abundante.",

        6500,
        "Brunch",
        "img/Brunchs/tostadoJQ.jpg"
    ),

    new Producto(
        11,
        "Bagel de Salmón",

        "Bagel con queso crema, salmón ahumado y rúcula.",

        "Bagel artesanal relleno con queso crema, salmón ahumado y rúcula fresca. Una combinación elegante que equilibra sabores suaves y ahumados.",

        [
            "Bagel",
            "Queso crema",
            "Salmón ahumado",
            "Rúcula"
        ],

        "Ideal para quienes disfrutan sabores delicados y sofisticados.",

        9800,
        "Brunch",
        "img/Brunchs/bagelSalmon.jpg"
    ),

    new Producto(
        12,
        "Huevos Benedictinos",

        "Huevos poché sobre pan brioche con salsa holandesa.",

        "Huevos poché servidos sobre pan brioche tostado y cubiertos con una suave salsa holandesa. Un clásico del brunch preparado al momento.",

        [
            "Pan brioche",
            "Huevos poché",
            "Salsa holandesa",
            "Ciboulette"
        ],

        "Una elección ideal para disfrutar un brunch completo.",

        8900,
        "Brunch",
        "img/Brunchs/huevosBenedictinos.jpg"
    ),

    new Producto(
        26,
        "Wrap Vegetariano",

        "Vegetales grillados, hummus y hojas verdes.",

        "Wrap elaborado con vegetales grillados, hummus artesanal y hojas verdes frescas, envuelto en una tortilla suave. Una opción llena de color y sabor.",

        [
            "Tortilla de trigo",
            "Hummus",
            "Zucchini",
            "Berenjena",
            "Morrón",
            "Hojas verdes"
        ],

        "Perfecto para quienes buscan una comida liviana sin resignar sabor.",

        7200,
        "Brunch",
        "img/Brunchs/wrapVege.jpg",

        true,
        ["vegano"]
    ),

    new Producto(
        27,
        "Tostadas Francesas",

        "Pan brioche con frutas y miel.",

        "Rodajas de pan brioche doradas a la plancha, acompañadas por frutas frescas de estación y un delicado toque de miel. Un desayuno clásico con un giro especial.",

        [
            "Pan brioche",
            "Frutas frescas",
            "Miel"
        ],

        "Ideal para comenzar el día con algo dulce.",

        6800,
        "Brunch",
        "img/Brunchs/tostadasFrancesas.jpg"
    ),

    new Producto(
        28,
        "Yogur con Granola",

        "Yogur natural con granola artesanal y frutas.",

        "Yogur natural acompañado por granola artesanal crocante y frutas frescas. Una combinación simple, equilibrada y llena de textura.",

        [
            "Yogur natural",
            "Granola artesanal",
            "Frutas frescas"
        ],

        "Una excelente opción para un desayuno fresco y liviano.",

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

        "Esponjosos pancakes preparados al momento y servidos con syrup de maple y una selección de frutos rojos frescos que aportan el equilibrio perfecto entre dulzor y acidez.",

        [
            "Pancakes",
            "Syrup de maple",
            "Frutos rojos"
        ],

        "Perfectos para compartir o disfrutar como protagonista del brunch.",

        7400,
        "Brunch",
        "img/Brunchs/pancakes.jpg"
    ),
    // ---------- INFUSIONES ----------

    new Producto(
        13,
        "Té Chai",

        "Infusión especiada con leche.",

        "Una mezcla aromática de té negro y especias tradicionales, suavizada con leche vaporizada para lograr una bebida cálida, cremosa y reconfortante.",

        [
            "Té negro",
            "Canela",
            "Cardamomo",
            "Jengibre",
            "Leche vaporizada"
        ],

        "Ideal para disfrutar en días frescos o acompañar una porción de pastelería artesanal.",

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

        "Elaborado con hojas seleccionadas de té verde que conservan todo su aroma y frescura. Una infusión delicada, liviana y de sabor vegetal.",

        [
            "Hojas de té verde premium"
        ],

        "Perfecto para quienes prefieren sabores suaves y naturales.",

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

        "Preparado con matcha premium batido cuidadosamente y leche espumada, logrando una bebida de textura sedosa y un sabor intenso con notas vegetales.",

        [
            "Matcha premium",
            "Leche espumada"
        ],

        "Una excelente alternativa para quienes buscan algo diferente al café.",

        4900,
        "Infusiones",
        "img/Infusiones/matchaLatte.jpg",

        false,
        ["sinLactosa"]
    ),

    new Producto(
        31,
        "Earl Grey",

        "Té negro con esencia de bergamota.",

        "Una infusión clásica que combina té negro con el delicado aroma cítrico de la bergamota, logrando una taza elegante y equilibrada.",

        [
            "Té negro",
            "Esencia natural de bergamota"
        ],

        "Ideal para acompañar una medialuna o un alfajor de maicena.",

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

        "Una infusión suave preparada con flores de manzanilla cuidadosamente seleccionadas, reconocida por su delicado aroma floral y su sabor reconfortante.",

        [
            "Flores de manzanilla"
        ],

        "Ideal para disfrutar después de una comida o al finalizar el día.",

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

        "Preparada en el momento con jugo de limón recién exprimido, hojas de menta fresca y un delicado toque de jengibre que aporta frescura en cada sorbo.",

        [
            "Limón",
            "Menta fresca",
            "Jengibre",
            "Hielo"
        ],

        "Perfecta para los días cálidos o para acompañar un brunch.",

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

        "Elaborado exclusivamente con naranjas frescas exprimidas al momento para conservar todo su sabor y propiedades naturales.",

        [
            "Naranjas frescas"
        ],

        "Ideal para comenzar el día con una opción fresca y natural.",

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

        "Una combinación de frutos rojos cuidadosamente seleccionados que ofrece un sabor intenso, fresco y ligeramente ácido.",

        [
            "Frutillas",
            "Arándanos",
            "Frambuesas",
            "Hielo"
        ],

        "Perfecto para quienes disfrutan sabores frutales intensos.",

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

        "Una mezcla cremosa de frutas tropicales licuadas con hielo que logra una bebida refrescante, naturalmente dulce y llena de sabor.",

        [
            "Mango",
            "Ananá",
            "Banana",
            "Hielo"
        ],

        "Ideal para refrescarse en cualquier momento del día.",

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

        "Preparado con chocolate belga de excelente calidad y coronado con crema batida para lograr una bebida intensa, cremosa y reconfortante.",

        [
            "Chocolate belga",
            "Leche",
            "Crema batida"
        ],

        "La elección perfecta para disfrutar en los días más fríos.",

        5200,
        "Bebidas",
        "img/Bebidas/chocolateCaliente.jpg"
    ),

    new Producto(
        35,
        "Iced Tea",

        "Té frío con limón y menta.",

        "Té negro servido bien frío con limón y hojas de menta fresca, una bebida liviana y refrescante para cualquier momento del día.",

        [
            "Té negro",
            "Limón",
            "Menta",
            "Hielo"
        ],

        "Ideal para acompañar comidas livianas o disfrutar por la tarde.",

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

        "Preparado con frutillas frescas, yogur natural y hielo para obtener una bebida cremosa, refrescante y con el equilibrio justo entre dulzor y acidez.",

        [
            "Frutillas",
            "Yogur natural",
            "Hielo"
        ],

        "Perfecto para quienes buscan una opción fresca y cremosa.",

        5700,
        "Bebidas",
        "img/Bebidas/smoothieFrutilla.jpg",

        false,
        ["sinLactosa"]
    )

];