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
    button.innerHTML += '<img style="margin-left: 4px"; width="25px" src="/assets/img/loading.gif" />'
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
    button.innerHTML = html;
}, 1000);

}
};
    xhr.send();
});

