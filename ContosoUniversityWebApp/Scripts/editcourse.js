document.addEventListener("DOMContentLoaded", function () {
    var id = getUrlParameters("id", "", true);
    var student = getUrlParameters("student", "", true);
    CourseModule.getCourseById(id, function (course) {
        loadForm(course);
    });
    setupCourseSubmit(id, student);
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

function setupCourseSubmit(id, student) {
    var form = document.forms.edit;
    form.onsubmit = function (e) {
        e.preventDefault();
        var newCourse = {
            CourseID: id,
            Title: document.getElementById("CourseNameinput").value,
            Credits: document.getElementById("CourseCreditsinput").value,
            Exam: document.getElementById("Examinput").value,
            Test: document.getElementById("Testinput").value,
            Assignment: document.getElementById("Assignmentinput").value,
            AssignmentDueDate: document.getElementById("AssignmentDueinput").value
        }
        CourseModule.editCourse(id, newCourse, function () {
            window.location.href = 'index.html' + '?id=' + student;
        });
    }

};

function loadForm(obj) {

    // Prefill form with details

    for (var key in obj) {
        console.log(key);
        if (key == "Title") {
            var forminput = document.getElementById("CourseNameinput");
            forminput.value = obj[key];
        }
        else if (key == "CourseID") {
            var forminput = document.getElementById("CourseIDinput");
            forminput.value = obj[key];
        }
        else if (key == "Credits") {
            var forminput = document.getElementById("CourseCreditsinput");
            forminput.value = obj[key];
        }
        else if (key == "Exam") {
            var forminput = document.getElementById("Examinput");
            forminput.value = obj[key];
        }
        else if (key == "Test") {
            var forminput = document.getElementById("Testinput");
            forminput.value = obj[key];
        }
        else if (key == "Assignment") {
            var forminput = document.getElementById("Assignmentinput");
            forminput.value = obj[key];
        }
        else if (key == "AssignmentDueDate") {
            var forminput = document.getElementById("AssignmentDueinput");
            forminput.value = obj[key];
        }
    }
};