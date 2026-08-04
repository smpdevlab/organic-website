

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

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! We'll connect with you shortly.");

    });

}


/* ===================================================
   SIMPLE FADE-IN ANIMATION
=================================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                
              /*  alert('intersectionObserver works! \n'+entry.target.className +' became visible!'); */
                entry.target.classList.add("show"); 

            }

        });

    },

    {

        threshold: 0.20

    }

);

const sections = document.querySelectorAll("section");

/* alert("Sections found: " + sections.length); */

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


/******************************************/

/*=====================================
PRODUCT SELECTION
=====================================*/

const productCheckboxes = document.querySelectorAll(
    '.catalog-item input[type="checkbox"]'
);

const selectedProductsList = document.getElementById(
    'selected-products-list'
);

const selectedCount = document.getElementById(
    'selected-count'
);



/*=====================================
RENDER SELECTED PRODUCTS
=====================================*/

function updateSelectedProducts() {

    const selectedProducts = [];

    productCheckboxes.forEach((product) => {

        if (product.checked) {

            selectedProducts.push(product.value);

        }

    });

    selectedProductsList.innerHTML = "";

    if (selectedProducts.length === 0) {

        selectedProductsList.innerHTML =
            '<p class="empty-selection">No products selected yet.</p>';

    } else {

        selectedProducts.forEach((product) => {

            const tag = document.createElement("span");

            tag.className = "selected-tag";

            tag.innerHTML = `
                ${product}
                <button
                    type="button"
                    class="remove-tag"
                    data-product="${product}">
                    &times;
                </button>
            `;

            selectedProductsList.appendChild(tag);

        });

    }

    selectedCount.textContent = selectedProducts.length;

    const removeButtons = document.querySelectorAll(".remove-tag");

    removeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const productToRemove = button.dataset.product;

            productCheckboxes.forEach((checkbox) => {

                if (checkbox.value === productToRemove) {

                    checkbox.checked = false;

                    checkbox.dispatchEvent(new Event("change"));

                }

            });

        });

    });

}/*****end of function */


/*=====================================
end of RENDER SELECTED PRODUCTS
=====================================*/



/*=============================================================== */

productCheckboxes.forEach((checkbox) => {

    checkbox.addEventListener("change", () => {

        updateSelectedProducts();

    });

});

updateSelectedProducts();



/*=============================================================== */
