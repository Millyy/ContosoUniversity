document.addEventListener("DOMContentLoaded", function () {
    setupStudentSubmit();
});

function setupStudentSubmit() {
    var form = document.forms.create;
    form.onsubmit = function (e) {
        e.preventDefault();
        var newStudent = {
            ID: 0,
            LastName: document.getElementById("userLastNameinput").value,
            FirstMidName: document.getElementById("userFirstMidNameinput").value,
            EnrollmentDate: document.getElementById("userEnrollmentDateinput").value,
            Password: document.getElementById("userPasswordinput").value
        }
        StudentModule.addStudent(newStudent, function () {

            StudentModule.getStudents(function (studentsList) {
                findStudentID(studentsList);
            });

            function findStudentID(studentsList) {
                for (i = 0; i < studentsList.length; i++) {
                    if (studentsList[i].LastName == newStudent["LastName"]) {
                        if (studentsList[i].FirstMidName == newStudent["FirstMidName"]) {
                            
                            swal({
                                title: "Your log in ID is:\n" + studentsList[i].ID,
                                text: "You have been added to the database.\n\nPlease log in with your ID, and keep it in a safe place.",
                                type: "success",
                                showCancelButton: false,
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "OK",
                                closeOnConfirm: true
                                },
                                function(){
                                window.location.href = 'studentlogin.html';
                                });

                            //swal({"Your log in ID is " + studentsList[i].ID + "!", "You have been added to the database.\n\nPlease log in with your ID, and keep it in a safe place.", "success"},
                              //  function () { window.location.href = 'studentlogin.html' });
                            //window.location.href = 'studentlogin.html';

                        }
                    }
                }
            }

           
        });

      
    }

};