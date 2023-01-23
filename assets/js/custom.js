function openInNewTab(url) {
  window.open(url, "_blank");
}

$(document).ready(function() {
  $("#myList li").click(function() {
    $("#myModal").show();
  });

  $(".close").click(function() {
    $("#myModal").hide();
  });
});
