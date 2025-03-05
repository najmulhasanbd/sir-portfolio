

//offcanvas menu toggle
document.addEventListener("DOMContentLoaded", function () {
    let toggleBtn = document.querySelector(".toggle-submenu");
    let submenu = toggleBtn.nextElementSibling;
    let arrow = toggleBtn.querySelector(".arrow");

    toggleBtn.addEventListener("click", function (event) {
        event.preventDefault();
        submenu.style.display = (submenu.style.display === "block") ? "none" : "block";

        if (submenu.style.display === "block") {
            arrow.textContent = "▲";
        } else {
            arrow.textContent = "▼";
        }
    });
});

//lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

//aos
AOS.init();