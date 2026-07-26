/* ===========================
            DOM
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const reveals = document.querySelectorAll(".reveal");
const contenedor = document.getElementById("productos-container");


/* ===========================
      MENÚ HAMBURGUESA
=========================== */

function abrirMenu() {

    navLinks.classList.add("active");

}

function cerrarMenu() {

    navLinks.classList.remove("active");

}

function toggleMenu() {

    navLinks.classList.toggle("active");

}

menuToggle?.addEventListener("click", (e) => {

    e.stopPropagation();

    toggleMenu();

});

navLinks?.addEventListener("click", (e) => {

    e.stopPropagation();

});

document.addEventListener("click", () => {

    cerrarMenu();

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", cerrarMenu);

});


/* ===========================
       HEADER SCROLL
=========================== */

if (window.location.pathname.includes("productos.html")) {

    header?.classList.add("scrolled");

} else {

    window.addEventListener("scroll", () => {

        header?.classList.toggle("scrolled", window.scrollY > 50);

    });

}


/* ===========================
      REVEAL ANIMATION
=========================== */

window.addEventListener("scroll", () => {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

});


/* ===========================
    PRODUCTOS DESTACADOS
=========================== */

if (contenedor && !window.location.pathname.includes("productos.html")) {

    const destacados = productos.filter(producto => producto.destacado);

    renderProductos(destacados);

}