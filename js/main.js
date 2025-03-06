// header sticky
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var headerHeight = $(".header-sticky").outerHeight();

    if (scroll > 245) {
        $(".header-sticky").addClass("sticky");
        $("body").css("padding-top", headerHeight + "px");
    } else {
        $(".header-sticky").removeClass("sticky");
        $("body").css("padding-top", "0");
    }
});


//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


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


