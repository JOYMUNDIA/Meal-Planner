//Nav Javascript
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

//Switch between Daily and Weekly Meal Plan
document.addEventListener('DOMContentLoaded', function () {

        // Get all the radio buttons
            const dailyMealPlan = document.getElementById('dailyMealPlan');
            const weeklyMealPlan = document.getElementById('weeklyMealPlan');

        // Get the sections
            const familyPlanCard = document.querySelector('.family-plan-card-container');
            const familyWeeklyPlanCard = document.querySelector('.family-weekly-plan-card-container');

        // Function to set the correct display styles based on selected layout
            function updateLayout() {
                // Reset all sections to be invisible
                    familyPlanCard.classList.remove('flex');
                    familyWeeklyPlanCard.classList.remove('flex');

                // Hide all sections initially by removing the visibility classes
                    familyPlanCard.style.visibility = 'hidden';
                    familyWeeklyPlanCard.style.visibility = 'hidden';

                // Add transitions to the selected section
                    if (dailyMealPlan.checked) {
                        familyPlanCard.classList.add('flex');
                        familyPlanCard.style.visibility = 'visible';  // Make it visible
                    }
                    else if (weeklyMealPlan.checked) {
                        familyWeeklyPlanCard.classList.add('flex');
                        familyWeeklyPlanCard.style.visibility = 'visible';  // Make it visible
                    }
            }

            // Add event listeners for the radio buttons
                dailyMealPlan.addEventListener('change', updateLayout);
                weeklyMealPlan.addEventListener('change', updateLayout);

            // Initialize the layout on page load
                updateLayout();
        });

// Toggle Day and Week View for school Meal Plan
        document.addEventListener('DOMContentLoaded', function () {

            // Get all the radio buttons
            const schoolDailyMealPlan = document.getElementById('schoolDailyMealPlan');
            const schoolWeeklyMealPlan = document.getElementById('schoolWeeklyMealPlan');
        
            // Get the sections
            const schoolLunchPlanCard = document.querySelector('.school-lunch-plan-card-container');
            const schoolLunchWeeklyPlanCard = document.querySelector('.school-lunch-weekly-plan-card-container');
        
            // Function to set the correct display styles based on selected layout
            function updateLayout() {
                // Reset all sections to be hidden
                schoolLunchPlanCard.style.display = 'none';
                schoolLunchWeeklyPlanCard.style.display = 'none';
        
                // Show the correct section based on the selected radio button
                if (schoolDailyMealPlan.checked) {
                    schoolLunchPlanCard.style.display = 'flex';  // Make the Daily Meal Plan visible
                } else if (schoolWeeklyMealPlan.checked) {
                    schoolLunchWeeklyPlanCard.style.display = 'flex';  // Make the Weekly Meal Plan visible
                }
            }
        
            // Add event listeners for the radio buttons
            schoolDailyMealPlan.addEventListener('change', updateLayout);
            schoolWeeklyMealPlan.addEventListener('change', updateLayout);
        
            // Initialize the layout on page load
            updateLayout();
        });
        


//Weekly Meal Plan Javascript
// Get the necessary elements
const iconContainer = document.querySelector('.icon-container');
const calendarContainer = document.getElementById('calendar-container');
const startDateInput = document.getElementById('start-date');
const closeCalendarContainer = document.getElementById('close-calendar-container');

let calendarVisible = false;

// Toggle the calendar visibility on icon click (this will still work for mobile/touch devices)
iconContainer.addEventListener('click', function () {
    calendarVisible = !calendarVisible;

    if (calendarVisible) {
        calendarContainer.style.display = 'block';
    } else {
        calendarContainer.style.display = 'none';
    }
});

// Show the calendar when hovering over the icon container
iconContainer.addEventListener('mouseover', function () {
    if (!calendarVisible) {
        calendarContainer.style.display = 'block'; // Show the calendar on hover
    }
});

// Hide the calendar when the mouse leaves the icon container
iconContainer.addEventListener('mouseout', function () {
    if (!calendarVisible) {
        calendarContainer.style.display = 'none'; // Hide the calendar when hover ends
    }
});

//Close Calendar using close button
closeCalendarContainer.addEventListener('click', function () {
    calendarVisible = !calendarVisible;

    if (calendarVisible) {
        calendarContainer.style.display = 'none';
    } else {
        calendarContainer.style.display = 'none';
    }
});


// Update the start and end date when a start date is selected
function updateStartDate() {
    const startDate = new Date(startDateInput.value);

    if (startDate) {
        // Format the start date and calculate the end date (6 days after)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedStartDate = startDate.toLocaleDateString('en-GB', options);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        const formattedEndDate = endDate.toLocaleDateString('en-GB', options);

        // Update the start and end date text
        document.getElementById('start-end-date-text').textContent = `${formattedStartDate} - ${formattedEndDate}`;

        // Update table and dropdown
        populateDays(startDate);
        populateDropdownDays(startDate);
    }

}


function populateDays(startDate) {
    // Calculate each day and populate the corresponding cells
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const days = [startDate];  // Start with the selected start date

    // Generate the next 6 days based on the selected start date
    for (let i = 1; i <= 6; i++) {
        let nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + i);
        days.push(nextDay);
    }

    // Loop through the days and update the meal plan table
    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const dayName = dayNames[day.getDay()];
        const dayDate = day.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

        // Update the day name and date for each day
        document.querySelector(`#day-${i + 1} .day-name`).textContent = dayName;
        document.querySelector(`#day-${i + 1} .day-month`).textContent = dayDate;
    }
}

// New: Populate dropdown with the 7 days starting from startDate
function populateDropdownDays(startDate) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dropdown = document.getElementById('day-selector');
    dropdown.innerHTML = ''; // Clear existing options

    for (let i = 0; i < 7; i++) {
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);

        const dayName = dayNames[day.getDay()];
        const dayDate = day.toLocaleDateString('en-GB', { day: '2-digit', month: 'long' });

        const option = document.createElement('option');
        option.value = `day-${i + 1}`;
        option.textContent = `${dayName} ${dayDate}`;
        dropdown.appendChild(option);
    }
}

// Set the default start date to the day after today when the page loads
window.addEventListener('DOMContentLoaded', function () {
    const startEndText = document.getElementById('start-end-date-text');

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const endDate = new Date(tomorrow);
    endDate.setDate(tomorrow.getDate() + 6);

    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedStart = tomorrow.toLocaleDateString('en-GB', options); // e.g., 21 April 2025
    const formattedEnd = endDate.toLocaleDateString('en-GB', options);     // e.g., 27 April 2025

    startEndText.textContent = `${formattedStart} - ${formattedEnd}`;

    // Call functions on load
    populateDays(tomorrow);
    populateDropdownDays(tomorrow);
});


// Show Only the meal sections that are applicable to the selected day in the drop-down

function toggleMealsByDay() {
    // Get the selected value from the dropdown
    const selectedDay = document.getElementById("day-selector").value;
    console.log('Selected Day:', selectedDay); // Debugging line to show which day is selected

    // Get all sections for the meals
    const allSections = document.querySelectorAll('.meal-type');
    console.log('All Meal Sections:', allSections); // Debugging line to show all sections

    // Get all sections for the meals
    const schoolMealSections = document.querySelectorAll('.school-meal');
    console.log('School Meal Sections:', schoolMealSections); // Debugging line to show all sections

    // Format the selectedDay to match the section IDs format (e.g., day-one, day-two, etc.)
    let formattedSelectedDay = selectedDay; 

    // Convert 'day-2' to 'day-two', 'day-3' to 'day-three', etc.
    if (formattedSelectedDay === "day-1") {
        formattedSelectedDay = "day-one";
    } else if (formattedSelectedDay === "day-2") {
        formattedSelectedDay = "day-two";
    } else if (formattedSelectedDay === "day-3") {
        formattedSelectedDay = "day-three";
    } else if (formattedSelectedDay === "day-4") {
        formattedSelectedDay = "day-four";
    } else if (formattedSelectedDay === "day-5") {
        formattedSelectedDay = "day-five";
    } else if (formattedSelectedDay === "day-6") {
        formattedSelectedDay = "day-six";
    } else if (formattedSelectedDay === "day-7") {
        formattedSelectedDay = "day-seven";
    }

    console.log('Formatted Selected Day:', formattedSelectedDay); // Debugging line to show the formatted day

    // Loop through each section (Family Meal Plan)
    allSections.forEach(section => {
        console.log('Checking section:', section.id); // Debugging line to show which section is being checked
        
        // Get the correct day part from the section ID (e.g., "day-one", "day-two")
        const sectionDay = section.id.split('-')[0] + '-' + section.id.split('-')[1]; // Get "day-one", "day-two", etc.
        console.log('Section day:', sectionDay); // Debugging line to show the section's day

        // Check if the section belongs to the selected day
        if (sectionDay === formattedSelectedDay) {
            console.log('Displaying section:', section.id); // Debugging line to show which section is being displayed
            section.style.display = 'flex'; // Show the selected day's section
        } else {
            console.log('Hiding section:', section.id); // Debugging line to show which section is being hidden
            section.style.display = 'none'; // Hide all other sections
        }
    });

    // Loop through each section (School Meal Plan)
    schoolMealSections.forEach(section => {
        console.log('Checking section:', section.id); // Debugging line to show which section is being checked
        
        // Get the correct day part from the section ID (e.g., "day-one", "day-two")
        const sectionDay = section.id.split('-')[0] + '-' + section.id.split('-')[1]; // Get "day-one", "day-two", etc.
        console.log('Section day:', sectionDay); // Debugging line to show the section's day

        // Check if the section belongs to the selected day
        if (sectionDay === formattedSelectedDay) {
            console.log('Displaying section:', section.id); // Debugging line to show which section is being displayed
            section.style.display = 'flex'; // Show the selected day's section
        } else {
            console.log('Hiding section:', section.id); // Debugging line to show which section is being hidden
            section.style.display = 'none'; // Hide all other sections
        }
    });
}

// Call toggleMealsByDay to initialize the page
window.onload = function() {
    toggleMealsByDay();
};


//Enable edit in Day view of Family Meal Plan
document.querySelectorAll('.meal-type').forEach(section => {
    let timeoutId = null;

    section.addEventListener('dblclick', () => {
        const paragraph = section.querySelector('p');

        // Enable editing
        paragraph.contentEditable = true;
        paragraph.focus();

        // Move cursor to the end using modern API
        const range = document.createRange();
        range.selectNodeContents(paragraph);
        range.collapse(false); // Collapse to the end

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        // Clear existing timeout if it exists
        if (timeoutId) clearTimeout(timeoutId);

        // Set timeout to disable editing after 30 seconds
        timeoutId = setTimeout(() => {
            paragraph.contentEditable = false;
        }, 30000);
    });
});

//Enable edit in Day view of School Meal Plan
document.querySelectorAll('.school-meal').forEach(section => {
    let timeoutId = null;

    section.addEventListener('dblclick', () => {
        const paragraph = section.querySelector('p');

        // Enable editing
        paragraph.contentEditable = true;
        paragraph.focus();

        // Move cursor to the end using modern API
        const range = document.createRange();
        range.selectNodeContents(paragraph);
        range.collapse(false); // Collapse to the end

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        // Clear existing timeout if it exists
        if (timeoutId) clearTimeout(timeoutId);

        // Set timeout to disable editing after 30 seconds
        timeoutId = setTimeout(() => {
            paragraph.contentEditable = false;
        }, 30000);
    });
});


//Edit weekly Timetable with Modal
/*document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("weekly-timetable-modal");
    const modalHeader = document.querySelector(".modal-header");
    const modalDateContainer = document.querySelector(".weekly-timetable-modal .date-container");
    const modalMealCell = document.querySelector(".modal-meal");
    const modalEnterBtn = document.querySelector(".modal-enter-btn");
    const modalClearBtn = document.querySelector(".modal-clear-btn");
    const closeModalBtn = document.querySelector(".close-modal-button");
    const weeklyTimetableContent = document.getElementById("weekly-timetable-content");

    let activeCell = null;

    // Extract date container from clicked row
    function getDateContainerFor(cell) {
        const row = cell.closest("tr");
        const dateContainer = row.querySelector(".date-container");
        return dateContainer ? dateContainer.cloneNode(true) : document.createElement("div");
    }

    // Extract meal type from class (e.g. "day-three-breakfast" -> "Breakfast")
    function getMealTypeFromClass(cell) {
        const classList = Array.from(cell.classList);
        const mealClass = classList.find(cls => cls.startsWith("day-") && cls.includes("-"));
        if (!mealClass) return "Meal";
        return mealClass.split("-").pop().replace(/^\w/, c => c.toUpperCase()); // capitalize
    }

    // Only target .meals inside the main timetable, not inside the modal (Family Meal Plan)
    weeklyTimetableContent.querySelectorAll(".meals").forEach(cell => {
        cell.addEventListener("dblclick", () => {
            activeCell = cell;

            // Show modal
            modal.style.display = "block";
            weeklyTimetableContent.classList.add("blurred");

            // Set modal header and meal
            const mealType = getMealTypeFromClass(cell);
            modalHeader.textContent = mealType;

            // Copy date from table
            const dateDiv = getDateContainerFor(cell);
            modalDateContainer.innerHTML = ""; // Clear existing
            modalDateContainer.appendChild(dateDiv);

            // Load current meal text
            modalMealCell.textContent = cell.textContent;
            modalMealCell.contentEditable = true;
            modalMealCell.focus();
        });
    });

    // Only target .school meals inside the main timetable, not inside the modal (School Meal Plan)
    weeklyTimetableContent.querySelectorAll(".school-meals").forEach(cell => {
        cell.addEventListener("dblclick", () => {
            activeCell = cell;

            // Show modal
            modal.style.display = "block";
            weeklyTimetableContent.classList.add("blurred");

            // Set modal header and meal
            const mealType = getMealTypeFromClass(cell);
            modalHeader.textContent = mealType;

            // Copy date from table
            const dateDiv = getDateContainerFor(cell);
            modalDateContainer.innerHTML = ""; // Clear existing
            modalDateContainer.appendChild(dateDiv);

            // Load current meal text
            modalMealCell.textContent = cell.textContent;
            modalMealCell.contentEditable = true;
            modalMealCell.focus();
        });
    });

    // ENTER BUTTON — Save text back
    modalEnterBtn.addEventListener("click", () => {
        if (activeCell) {
            activeCell.textContent = modalMealCell.textContent.trim();
        }
        closeModal();
    });

    // CLEAR BUTTON — Clear modal text
    modalClearBtn.addEventListener("click", () => {
        modalMealCell.textContent = "";
        modalMealCell.focus();
    });

    // CLOSE BUTTON — Cancel
    closeModalBtn.addEventListener("click", () => {
        closeModal();
    });

    function closeModal() {
        modal.style.display = "none";
        weeklyTimetableContent.classList.remove("blurred");
        activeCell = null;
        modalMealCell.contentEditable = false;
    }
});*/

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("weekly-timetable-modal");
    const modalHeader = document.querySelector(".modal-header");
    const modalDateContainer = document.querySelector(".weekly-timetable-modal .date-container");
    const modalMealCell = document.querySelector(".modal-meal");
    const modalEnterBtn = document.querySelector(".modal-enter-btn");
    const modalClearBtn = document.querySelector(".modal-clear-btn");
    const closeModalBtn = document.querySelector(".close-modal-button");
    const weeklyTimetableContent = document.getElementById("weekly-timetable-content");

    let activeCell = null;

    function getDateContainerFor(cell) {
        const row = cell.closest("tr");
        const dateContainer = row.querySelector(".date-container");
        return dateContainer ? dateContainer.cloneNode(true) : document.createElement("div");
    }

    function getMealTypeFromClass(cell) {
        const classList = Array.from(cell.classList);
        const mealClass = classList.find(cls => cls.startsWith("day-") && cls.includes("-"));
        if (!mealClass) return "Meal";
        return mealClass.split("-").pop().replace(/^\w/, c => c.toUpperCase());
    }

    // Only target .meals inside the main timetable, not inside the modal (Family Meal Plan)
    weeklyTimetableContent.querySelectorAll(".meals").forEach(cell => {
        cell.addEventListener("dblclick", () => {
            activeCell = cell;

            // Show modal
            modal.style.display = "block";
            weeklyTimetableContent.classList.add("blurred");

            // Set modal header and meal
            const mealType = getMealTypeFromClass(cell);
            modalHeader.textContent = mealType;

            // Copy date from table
            const dateDiv = getDateContainerFor(cell);
            modalDateContainer.innerHTML = ""; // Clear existing
            modalDateContainer.appendChild(dateDiv);

            // Load current meal text
            modalMealCell.textContent = cell.textContent;
            modalMealCell.contentEditable = true;
            modalMealCell.focus();
        });
    });

    // Only target .school meals inside the main timetable, not inside the modal (School Meal Plan)
    weeklyTimetableContent.querySelectorAll(".school-meals").forEach(cell => {
        cell.addEventListener("dblclick", () => {
            activeCell = cell;

            // Show modal
            modal.style.display = "block";
            weeklyTimetableContent.classList.add("blurred");

            // Set modal header and meal
            const mealType = getMealTypeFromClass(cell);
            modalHeader.textContent = mealType;

            // Copy date from table
            const dateDiv = getDateContainerFor(cell);
            modalDateContainer.innerHTML = ""; // Clear existing
            modalDateContainer.appendChild(dateDiv);

            // Load current meal text
            modalMealCell.innerHTML = cell.innerHTML;
            modalMealCell.contentEditable = true;
            modalMealCell.focus();

            // Add input event to convert full stops to line breaks
            modalMealCell.addEventListener("input", handleFullstopToLineBreak);
        });
    });

    function handleFullstopToLineBreak() {
        const html = modalMealCell.innerHTML;

        // Replace periods not already followed by <br> with .<br>
        const updatedHtml = html.replace(/\. ?(?!<br>)/g, ".<br>");

        if (html !== updatedHtml) {
            modalMealCell.innerHTML = updatedHtml;
            placeCursorAtEnd(modalMealCell);
        }
    }

    function placeCursorAtEnd(el) {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(el);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        el.focus();
    }

    modalEnterBtn.addEventListener("click", () => {
        if (activeCell) {
            activeCell.innerHTML = modalMealCell.innerHTML.trim();
        }
        closeModal();
    });

    modalClearBtn.addEventListener("click", () => {
        modalMealCell.innerHTML = "";
        modalMealCell.focus();
    });

    closeModalBtn.addEventListener("click", () => {
        closeModal();
    });

    function closeModal() {
        modal.style.display = "none";
        weeklyTimetableContent.classList.remove("blurred");
        activeCell = null;
        modalMealCell.contentEditable = false;
        modalMealCell.removeEventListener("input", handleFullstopToLineBreak);
    }
});



// Saved Plans Javascript

// Saved Plans Sidebar Navigation
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("backdrop");
    sidebar.classList.toggle("active");
    backdrop.classList.toggle("active");
}




