// Load Styles
import "./scss/main.scss";

// Load Bootstrap init
import { initBootstrap } from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
    tooltip: true,
    popover: true
});

// Load LazyLoad
import "lazysizes";

// Load Swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Load AOS

import AOS from "aos";
import "aos/dist/aos.css";

// Your app code

AOS.init({
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 600 //
});

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

const featureLogotype = new Swiper(".featureLogotype", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true
});

const featureDescription = new Swiper(".featureDescription", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
        swiper: featureLogotype
    }
});
