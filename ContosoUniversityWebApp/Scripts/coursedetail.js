/* The ID is passed through the URL, so the pre-made function getUrlParameters extracts it. */
document.addEventListener("DOMContentLoaded", function () {
    var id = getUrlParameters("id", "", true);
    var student = getUrlParameters("student", "", true);
    CourseModule.getCourseById(id, function (course) {
        console.log("This bit " + course);

        /* Now we can display the course details. */
        courseDetails(course);
    });
});

function getUrlParameters(parameter, staticURL, decode) {
    /*
     Function: getUrlParameters
     Description: Get the value of URL parameters either from 
                  current URL or static URL
     Author: Tirumal
     URL: www.code-tricks.com
    */
    var currLocation = (staticURL.length) ? staticURL : window.location.search,
        parArr = currLocation.split("?")[1].split("&"),
        returnBool = true;

    for (var i = 0; i < parArr.length; i++) {
        parr = parArr[i].split("=");
        if (parr[0] == parameter) {
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        } else {
            returnBool = false;
        }
    }

    if (!returnBool) return false;
};

function courseDetails(obj) {
    for (var key in obj) {
        var infoelement = document.getElementById(key);
        infoelement.innerHTML = obj[key];
    }
}