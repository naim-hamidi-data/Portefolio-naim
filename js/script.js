const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");


// Ouvrir / fermer le menu mobile

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});


// Fermer le menu lorsqu'un lien est sélectionné

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});
