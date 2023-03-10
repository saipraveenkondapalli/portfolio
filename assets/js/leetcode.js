
function leetcode(name){
    //xhhtp request to http://192.168.55.102:5000/api/leetcode/ and display the result in div with id="leetcode"
    var xhr = new XMLHttpRequest();
    leetcode_image = document.getElementById("leetcode-loading");
    xhr.open("GET", "https://flask-apis.vercel.app/api/leetcode/?username=" + name, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE & xhr.status === 200) {
            var response = JSON.parse(this.responseText);
            leetcode_image.setAttribute("hidden", "true");
            // get element with problemsSolved and change the innerText to the response.problemsSolved
            document.getElementById("problemsSolved").innerText = response.problems_solved[0].count;
            // elements with id active_days and streak
            document.getElementById("active_days").innerText = response.active_days;
            document.getElementById("streak").innerText = response.streak;

            /* now get the  tbody with id=leetcode and start making the inner HTML of the tbody by accessing response.recently_solved which is a list in the following format
            <tr>
                <td>x.title</td>
                <td class="text-center" >x.timestamp </td>
            </tr>
             */
            var leetcode = document.getElementById("leetcode");
            leetcode.innerHTML = "";
            for (var i = 0; i < response.recently_solved.length; i++) {
                var x = response.recently_solved[i];
                leetcode.innerHTML += "<tr><td>" + x.title + "</td><td class='text-center'>" + epochToDateString(x.timestamp)+ "</td></tr>";

            }
            cal = document.getElementById('cal');
            cal.innerHTML = response.calender;
            cal.scrollLeft = cal.scrollWidth;


        }
        // set user agent to 'request sever'


};
    xhr.setRequestHeader("Custom-Header", "JSON");
    xhr.send();

}
function epochToDateString(epochTime) {
    var now = new Date();
    var then = new Date(epochTime * 1000);

    var diff = (now - then) / 1000;
    if (diff < 60) {
        return "Just now";
    } else if (diff < 3600) {
        return Math.floor(diff / 60) + " minutes ago";
    } else if (diff < 86400) {
        return Math.floor(diff / 3600) + " hours ago";
    } else if (diff < 604800) {
        var daysAgo = Math.floor(diff / 86400);
        if (daysAgo === 1) {
            return "Yesterday";
        } else {
            return daysAgo + " days ago";
        }
    } else {
        return then.toLocaleDateString();
    }
}



//call the function with your leetcode username
leetcode("saipraveenkondapalli");