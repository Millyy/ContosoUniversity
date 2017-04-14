document.addEventListener("DOMContentLoaded", function () {
    setupCourseSubmit();
});

function setupCourseSubmit() {
    var form = document.forms.create;
    form.onsubmit = function (e) {
        e.preventDefault();
        var newCourse = {
            CourseID: document.getElementById("CourseIDinput").value,
            Title: document.getElementById("CourseNameinput").value,
            Credits: document.getElementById("CourseCreditsinput").value,
            Exam: document.getElementById("Examinput").value,
            Test: document.getElementById("Testinput").value,
            Assignment: document.getElementById("Assignmentinput").value,
            AssignmentDueDate: document.getElementById("AssignmentDueinput").value
        }
        CourseModule.addCourse(newCourse, function () {

            swal({
                title: "Success!",
                text: "Your course has been added.",
                type: "success",
                showCancelButton: false,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "OK",
                closeOnConfirm: true
            },
                               function () {
                                   location.replace(document.referrer);;
                               });


        });
    }

};