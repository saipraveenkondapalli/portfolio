// ----------------------------------------------------- GIT HUB -------------------------------------------------------
GitHubCalendar(".calendar", "saipraveenkondapalli");
        // or enable responsive functionality
        GitHubCalendar(".calendar", "saipraveenkondapalli", { responsive: true });


GitHubActivity.feed({
            username: "saipraveenkondapalli",
            //repository: "your-repo", // optional
            selector: "#feed",
            limit:5, // optional
        });


// ---------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Remove Profile Pic----------------------------------------------
var targetNode = document.body;
    var config = { attributes: true, childList: true, subtree: true };
    var observer = new MutationObserver(function(mutationsList) {
      for(var mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var img = document.querySelector("img[src='https://avatars.githubusercontent.com/u/63105626?v=4']");
          if(img) {
            img.style.display = "none";
            observer.disconnect();
          }
        }
      }
    });
    observer.observe(targetNode, config);

//----------------------------------------------------------------------------------------------------------------------