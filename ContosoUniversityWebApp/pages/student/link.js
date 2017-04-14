document.addEventListener("DOMContentLoaded", function () {
    setupEnrollmentSubmit();
});

function setupEnrollmentSubmit() {
    var form = document.forms.create;
    form.onsubmit = function (e) {
        e.preventDefault();
        var newEnrollment = {
            EnrollmentID: 0,
            CourseID: document.getElementById("CourseIDinput").value,
            StudentID: document.getElementById("StudentIDinput").value,
            Grade: 0,
        }
        EnrollmentModule.addEnrollment(newEnrollment, function () {

            swal({
                title: "Success!",
                text: "Your link has been connected.",
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