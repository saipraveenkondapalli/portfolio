
    // Fetch the navigation bar HTML file
    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
    // Insert the navigation bar HTML into the page
    document.getElementById('navbar').innerHTML = data;
});

