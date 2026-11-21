
const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");

menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

});

// Cerrar el menú al seleccionar un enlace
const navigationLinks = navigation.querySelectorAll(
    ".navigation-list a"
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

});
