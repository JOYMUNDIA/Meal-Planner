document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.querySelector('.side-nav .dropbtn');
    const dropdownContent = document.querySelector('.side-nav .dropdown-content');
    const bodyDiv = document.querySelector('.body-div');
    const contactButton = document.querySelector('.side-nav button:nth-child(4)'); // Adjusted selector for Contact button
    const registerLoginButton = document.querySelector('.side-nav button.register-login'); // Adjusted selector for Register/Login button
    let isDropdownVisible = false;

    // Function to toggle dropdown visibility (when clicking the "Create" button)
    function toggleDropdown() {
        if (isDropdownVisible) {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
        isDropdownVisible = !isDropdownVisible;
        adjustButtonPosition(); // Adjust buttons' positions when dropdown is visible
    }

    // Function to adjust the position of Contact and Register/Login buttons
    function adjustButtonPosition() {
        if (isDropdownVisible) {
            contactButton.style.marginTop = '4rem'; // Move down for spacing
            registerLoginButton.style.marginTop = '4rem'; // Move down for spacing
        } else {
            contactButton.style.marginTop = ''; // Reset to normal
            registerLoginButton.style.marginTop = ''; // Reset to normal
        }
    }

    // Toggle dropdown when the "Create" button is clicked
    createButton.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent the click event from bubbling up
        toggleDropdown();
    });

    // Close dropdown if user clicks outside of it
    bodyDiv.addEventListener('click', (e) => {
        if (isDropdownVisible && !dropdownContent.contains(e.target) && !createButton.contains(e.target)) {
            dropdownContent.style.display = 'none';
            isDropdownVisible = false;
            adjustButtonPosition(); // Reset buttons' positions
        }
    });

    // Close the dropdown if a dropdown link is clicked
    const dropdownLinks = document.querySelectorAll('.side-nav .dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownContent.style.display = 'none';
            isDropdownVisible = false;
            adjustButtonPosition(); // Reset buttons' positions
            handleDropdownSelection(link); // Call function for selected link

            // Close the sidebar after a dropdown option is clicked
            closeNav();
        });
    });

    // Separate function for handling dropdown selection based on which option was clicked
    function handleDropdownSelection(link) {
        switch (link.textContent) {
            case 'Family Meal Plan':
                console.log("Selected Family Meal Plan");
                break;
            case 'School Lunch Meal Plan':
                console.log("Selected School Lunch Meal Plan");
                break;
            case 'Work Meal Plan':
                console.log("Selected Work Meal Plan");
                break;
            case 'Special Occasion/Festival Meal Plan':
                console.log("Selected Special Occasion Meal Plan");
                break;
            default:
                console.log("No valid plan selected");
        }
    }

    // Function to open the sidebar (for hamburger menu)
    function toggleNav() {
        const sideNav = document.getElementById("sideNav");
        if (sideNav.style.width === "250px") {
            sideNav.style.width = "0"; // Close the side nav
        } else {
            sideNav.style.width = "250px"; // Open the side nav
        }
    }

    // Add event listener for hamburger menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleNav); // Ensure hamburger triggers toggleNav
    }

    // Function to close the sidebar (for "close" button inside side-nav)
    function closeNav() {
        const sideNav = document.getElementById("sideNav");
        sideNav.style.width = "0"; // Close the side nav
    }

    // Add event listener for close button inside side-nav
    const closeButton = document.querySelector('.side-nav .closebtn');
    if (closeButton) {
        closeButton.addEventListener('click', closeNav); // Close sidebar when close button is clicked
    }

    // Close the side navbar when clicking Home, Contact, Register/Login buttons
    const navButtons = document.querySelectorAll('.side-nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Close the side navbar when a link is clicked except the Create button
            if (button !== createButton) {
                closeNav(); // Close the sidebar
            }
        });
    });

    // Add event listener for other nav links (Home, Contact, etc.)
    const sideNavLinks = document.querySelectorAll('.side-nav button');
    sideNavLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            if (link !== createButton) {
                closeNav(); // Close the side navbar when a link is clicked except the Create button
            }
        });
    });

    // Drop down functionality for the "Create" section (same logic for the side nav dropdown)
    const createButtonTopLevel = document.querySelector('.dropbtn');
    const dropdownContentTopLevel = document.querySelector('.dropdown-content');
    let isDropdownVisibleTopLevel = false;

    // Function to toggle dropdown visibility (Top Level)
    function toggleDropdownTopLevel() {
        if (isDropdownVisibleTopLevel) {
            dropdownContentTopLevel.style.display = 'none';
        } else {
            dropdownContentTopLevel.style.display = 'block';
        }
        isDropdownVisibleTopLevel = !isDropdownVisibleTopLevel;
    }

    // Toggle dropdown on click of the create button (Top Level)
    createButtonTopLevel.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent the click event from bubbling up
        toggleDropdownTopLevel();
    });

    // Close dropdown if user clicks outside of it (Top Level)
    bodyDiv.addEventListener('click', (e) => {
        if (isDropdownVisibleTopLevel && !dropdownContentTopLevel.contains(e.target) && !createButtonTopLevel.contains(e.target)) {
            dropdownContentTopLevel.style.display = 'none';
            isDropdownVisibleTopLevel = false;
        }
    });

    // Also close the dropdown if clicking on a dropdown link (Top Level)
    const dropdownLinksTopLevel = document.querySelectorAll('.dropdown-content a');
    dropdownLinksTopLevel.forEach(link => {
        link.addEventListener('click', () => {
            dropdownContentTopLevel.style.display = 'none';
            isDropdownVisibleTopLevel = false;
        });
    });
});