// fetch request to flask-apis.vercel.app/api/tracker?id=
// get id from URL

function resume_tracker(id) {
    // using fetch API
    fetch("https://flask-apis.vercel.app/api/tracker?id=" + id)
        .then(response => response.json())
        .then(data => {
                console.log(data);
            }
        )
        .catch(error => console.log(error));

}


// get id from URL param 'id'
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
resume_tracker(id);


