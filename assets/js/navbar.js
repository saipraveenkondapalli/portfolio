// Fetch the navigation bar HTML file
    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
    // Insert the navigation bar HTML into the page
    document.getElementById('navbar').innerHTML = data;
});

    function navbar(location){
        if (window.location.pathname == "/"){
            document.getElementById(location).scrollIntoView();
        }
        else{
            window.location.href =  "#" + location;
        }
    }
