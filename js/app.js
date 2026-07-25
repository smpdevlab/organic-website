/* ===================================================
   MOBILE MENU
=================================================== */

const menuButton = document.querySelector(".mobile-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* ===================================================
   CLOSE MENU AFTER CLICK
=================================================== */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


/* ===================================================
   STICKY HEADER SHADOW
=================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ===================================================
   ENQUIRY FORM
=================================================== */

const enquiryForm = document.querySelector(".enquiry-card form");

enquiryForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! We'll connect with you shortly.");

});


/* ===================================================
   SIMPLE FADE-IN ANIMATION
=================================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.20

    }

);

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});