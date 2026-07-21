const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const reveals = document.querySelectorAll(".reveal");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

if (window.location.pathname.includes("productos.html")) {
    header.classList.add("scrolled");
} else {
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}

window.addEventListener("scroll", () => {
    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
});

//Renderizamos todos los productos o solo los destacados segun la pagina
const contenedor = document.getElementById("productos-container");

if (contenedor) {

    if (window.location.pathname.includes("productos.html")) {

        renderProductos(productos);

    } else {

        const destacados = productos.filter(
            producto => producto.destacado
        );

        renderProductos(destacados);

    }

}