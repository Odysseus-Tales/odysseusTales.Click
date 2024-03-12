document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    // Event listener for menu toggle button
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Toggles the 'open' class on the menu
    });

    // Event listener for search button
    searchButton.addEventListener('click', function() {
        const keyword = searchInput.value.trim().toLowerCase();
        if (keyword === '') return; // If the search input is empty, do nothing

        const sections = document.querySelectorAll('section'); // Find all sections in the page

        sections.forEach(section => {
            const content = section.textContent.toLowerCase(); // Get the text content of the section and convert to lowercase
            if (content.includes(keyword)) {
                section.classList.add('highlight'); // Add a class to highlight the section
            } else {
                section.classList.remove('highlight'); // Remove the class if the keyword is not found
            }
        });
    });
});
