// FAQ accordion
// waiting for the content of document is loaded
document.addEventListener("DOMContentLoaded", () => {
    // grabbing faq container
    const faqContainer = document.querySelector(".faq-content");

    // listening for a click on that container
    faqContainer.addEventListener("click", (e) => {
    // getting the closest header to where the click happened
    const groupHeader = e.target.closest(".faq-group-header");

    // making sure that it returns nothing if clicked on body
    if (!groupHeader) return;

    // getting the group itself
    const group = groupHeader.parentElement;

    // getting the group body from the group selected above
    const groupBody = group.querySelector(".faq-group-body");

    // getting the icon for closing and opening
    const icon = groupHeader.querySelector("i");

    // toggling icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // toggling visibility of faq's body
    groupBody.classList.toggle("open");

    // close other opened faq bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    // looping through other groups
    otherGroups.forEach((otherGroup) => {
        // making sure that the other group is not equal to the group that's clicked on
        if (otherGroup !== group) {
        // getting other group body
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        // getting other icon
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        // removing the open class from other group body
        otherGroupBody.classList.remove("open");
        // removing the minus icon
        otherIcon.classList.remove("fa-minus");
        // adding the plus icon
        otherIcon.classList.add("fa-plus");
        }});
    });
});

// mobile menu
// adding an event listener
document.addEventListener("DOMContentLoaded", () => {
    // getting the hamburger button
    const hamburgerButton = document.querySelector(".hamburger-button");
    // getting the mobile menu
    const mobileMenu = document.querySelector(".mobile-menu");

    // listening for a click, to toggle whether burger menu is active or not
    hamburgerButton.addEventListener("click", () =>
        mobileMenu.classList.toggle("active")
    );
});
