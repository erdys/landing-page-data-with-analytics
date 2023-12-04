// Load Styles
import "./scss/main.scss";

// Load Bootstrap init
import { initBootstrap } from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
    tooltip: true,
    popover: true
});

// Your app code
console.log(`Hello ${process.env.LOCAL_HOST}`);

document.addEventListener("DOMContentLoaded", function () {
    const btnScrollToTop = document.getElementById("btnScrollToTop");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnScrollToTop.classList.add("show");
        } else {
            btnScrollToTop.classList.remove("show");
        }
    });

    btnScrollToTop.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
