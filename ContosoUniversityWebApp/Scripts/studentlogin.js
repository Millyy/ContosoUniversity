document.addEventListener("DOMContentLoaded", function () {
    loginStudentSubmit();
});

function loginStudentSubmit() {
    var form = document.forms.login;
    form.onsubmit = function (e) {
        e.preventDefault();

        var studentID = document.getElementById("userIDinput").value;
        var studentPassword = document.getElementById("userPasswordinput").value;
        
        //console.log(studentID, studentPassword)
        
        StudentModule.getStudentById(studentID, function (student) {
            //console.log("This bit " + student);

            checkPassword(student, studentPassword);
        });
    }

};

function checkPassword(student, password) {
    if (student.Password == password) {
        console.log("Congratulations, log in successful!")
        window.location.href = "../pages/student/index.html?id=" + student.ID;
    }
    else {
        swal("Oops!", "Sorry, your password is incorrect.", "warning");
    }
}