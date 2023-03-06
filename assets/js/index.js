//send a request to web?id=gpm2NslgEqdhyBs84cs2zAfvcrgKh64Gtjbdex
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://myapp.local:5000/web?id=gpm2NslgEqdhyBs84cs2zAfvcrgKh64Gtjbdex", true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
    }
    else{
    console.log("error", xhr.status, xhr.responseText);
    }
    }
    xhr.send();



// Author: Sai Praveen Kondapalli Github Activity Feed
    GitHubActivity.feed({
    username: "saipraveenkondapalli",
    //repository: "your-repo", // optional
    selector: "#feed",
    limit: 5, // optional
});

// Download Resume
    button = document.getElementById("download-button");
    html = button.innerHTML;
    button.addEventListener("click", function() {
    // get the image with id loading
    var loading = document.getElementById("loading");
    // REMOVE THE hidden attribute
    loading.removeAttribute("hidden");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://flask-apis.vercel.app/api/resume_id", true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var fileId = response.resume_id
    var link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=" + fileId + "&force=true";
    link.download = true;
    link.click();
    // wait until download starts
    setTimeout(function() {
    // set the image to hidden
    loading.setAttribute("hidden", true);

}, 1000);

}
};
    xhr.send();
});

