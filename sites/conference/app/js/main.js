$(() => {
    // Preloader
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!$("#preloader").hasClass("hide")) {
                $("#preloader").addClass("hide")
            }
            resolve()
        }, 1000);
        })
        .then(() => {
            setTimeout(() => {
                $(".header-wrap").addClass("header-wrap_active")
            }, 500)
        })

    // Burger-menu
    $(".menu-button").on('click', function () {
        $(".navbar__menu").toggleClass("navbar__menu_active");
        $(".menu-button__line").toggleClass("menu-button__line_active");
    });

    // Owl-carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
});