window.onload = new Promise((resolve, reject) => {
        setTimeout(() => {
            let preloader = document.querySelector("#preloader");
            if (!preloader.classList.contains('hide')) {
                preloader.classList.add('hide');
            }
            resolve()
        }, 1000)
    })
    .then(() => {
        setTimeout(() => {
            let wrap = document.querySelector(".header__wrapper")
            wrap.classList.add("header__wrapper_active")
        }, 500)
    })