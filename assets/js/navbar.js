
    // Fetch the navigation bar HTML file
    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
    // Insert the navigation bar HTML into the page
    document.getElementById('navbar').innerHTML = data;
});

function section(tag){
    // if window is in home page then scroll to the section else redirect to home page and then scroll to the section
    if (window.location.pathname == "/"){
        document.getElementById(tag).scrollIntoView();

    }
    else{
        window.location.href = "/";


    }
}