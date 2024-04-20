// Get the "Read More" button
const readMoreBtn = document.getElementById('read-more-btn');

// Add click event listener to the button
readMoreBtn.addEventListener('click', function() {
    // Get the URL from the data-page attribute
    const pageUrl = readMoreBtn.getAttribute('data-page');
    
    // Redirect to the specified page
    window.location.href = pageUrl;
});

  // Get all success buttons
const successButtons = document.querySelectorAll('.success-btn');

// Function to handle button click
function handleButtonClick(event) {
    // Get the data-page attribute value
    const page = event.target.getAttribute('data-page');
    
    // Redirect to the specified page
    window.location.href = page;
}

// Add click event listener to each success button
successButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});


  