// This event triggers on page load
document.addEventListener("DOMContentLoaded", function () {
    var id = getUrlParameters("id", "", true);
    loadEnrollments();
    loadStudentEnrollments(id);
    loadStudentEnrollmentsWithInfo(id);
    //var controller = document.body.getAttribute("data-controller");
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

function loadEnrollments() {

    // We need a reference to the div/table that we are going to chuck our data into
    var enrollmentsTable = document.getElementById("tblenrollments");

    EnrollmentModule.getEnrollments(function (enrollmentsList) {
        setupEnrollmentsTable(enrollmentsList);
    });


    // This is the callback for when the data comes back in the studentmodule
    function setupEnrollmentsTable(enrollments) {
        console.log(enrollments);
        for (i = 0; i < enrollments.length; i++) {

            // Create row 
            var row = document.createElement('tr');
            //row.setAttribute("data-id", courses[i].CourseID);

            // Add the columns in the row (td / data cells)
            var enrollmentIDNumber = document.createElement('td');
            enrollmentIDNumber.innerHTML = "#" + enrollments[i].EnrollmentID;
            row.appendChild(enrollmentIDNumber);

            var courseID = document.createElement('td');
            courseID.innerHTML = enrollments[i].CourseID;
            row.appendChild(courseID);

            var enrollmentStudentID = document.createElement('td');
            enrollmentStudentID.innerHTML = enrollments[i].StudentID;
            row.appendChild(enrollmentStudentID);

            var enrollmentGrade = document.createElement('td');
            enrollmentGrade.innerHTML = enrollments[i].Grade;
            row.appendChild(enrollmentGrade);

            // Append the row to the end of the table
            enrollmentsTable.appendChild(row);

        }
    }
}

function loadStudentEnrollments(id) {

    // We need a reference to the div/table that we are going to chuck our data into
    var enrollmentsTable = document.getElementById("tblstudentenrollments");

    EnrollmentModule.getEnrollments(function (enrollmentsList) {
        setupEnrollmentsTable(enrollmentsList);
    });


    // This is the callback for when the data comes back in the studentmodule
    function setupEnrollmentsTable(enrollments) {
        //console.log(enrollments);
        for (i = 0; i < enrollments.length; i++) {
            if (enrollments[i].StudentID == id) {
                // Create row 
                var row = document.createElement('tr');
                //row.setAttribute("data-id", courses[i].CourseID);

                // Add the columns in the row (td / data cells)
                var enrollmentIDNumber = document.createElement('td');
                enrollmentIDNumber.innerHTML = "#" + enrollments[i].EnrollmentID;
                row.appendChild(enrollmentIDNumber);

                var courseID = document.createElement('td');
                courseID.innerHTML = enrollments[i].CourseID;
                row.appendChild(courseID);

                var enrollmentStudentID = document.createElement('td');
                enrollmentStudentID.innerHTML = enrollments[i].StudentID;
                row.appendChild(enrollmentStudentID);

                var enrollmentGrade = document.createElement('td');
                enrollmentGrade.innerHTML = enrollments[i].Grade;
                row.appendChild(enrollmentGrade);

                // Append the row to the end of the table
                enrollmentsTable.appendChild(row);
            }

        }
    }
}

function loadStudentEnrollmentsWithInfo(id) {

    // We need a reference to the div/table that we are going to chuck our data into
    var enrollmentsTableWithInfo = document.getElementById("tblstudentenrollmentswithinfo");

    EnrollmentModule.getEnrollments(function (enrollmentsList) {
        setupEnrollmentsTable(enrollmentsList);
    });


    // This is the callback for when the data comes back in the studentmodule
    function setupEnrollmentsTable(enrollments) {
        //console.log(enrollments);
        for (i = 0; i < enrollments.length; i++) {
            if (enrollments[i].StudentID == id) {
                CourseModule.getCourseById(enrollments[i].CourseID, function (course) {
                    displayCourse(course);
                });

                function displayCourse(course) {
                    // Create row 
                    var row = document.createElement('tr');
                    row.setAttribute("data-id", course.CourseID);

                    // Add the columns in the row (td / data cells)
                    var courseID = document.createElement('td');
                    courseID.innerHTML = "#" + course.CourseID;
                    row.appendChild(courseID);

                    var courseTitle = document.createElement('td');
                    courseTitle.innerHTML = course.Title;
                    row.appendChild(courseTitle);

                    var courseAssignment = document.createElement('td');
                    courseAssignment.innerHTML = course.Assignment + ", " + course.AssignmentDueDate;
                    row.appendChild(courseAssignment);

                    var courseTest = document.createElement('td');
                    courseTest.innerHTML = course.Test;
                    row.appendChild(courseTest);

                    var courseExam = document.createElement('td');
                    courseExam.innerHTML = course.Exam;
                    row.appendChild(courseExam);

                    var courseCredit = document.createElement('td');
                    courseCredit.innerHTML = course.Credits;
                    row.appendChild(courseCredit);

                    var editCourseOption = document.createElement('td');
                    var editCourseButton = document.createElement('button');
                    editCourseButton.className = "btn btn-default";
                    editCourseButton.innerHTML = "Edit";
                    editCourseButton.setAttribute("data-id", course.CourseID);
                    editCourseButton.setAttribute("data-btntype", "edit");
                    editCourseOption.appendChild(editCourseButton);
                    row.appendChild(editCourseOption);

                    var removeCourseOption = document.createElement('td');
                    var removeCourseButton = document.createElement('button');
                    removeCourseButton.className = "btn btn-default";
                    removeCourseButton.innerHTML = "Remove";
                    removeCourseButton.setAttribute("data-id", course.CourseID);
                    removeCourseButton.setAttribute("data-btntype", "remove");
                    removeCourseOption.appendChild(removeCourseButton);
                    row.appendChild(removeCourseOption);

                    // Append the row to the end of the table
                    enrollmentsTableWithInfo.appendChild(row);
                }
                
            }

        }

        // Event delegation, explain this well
        enrollmentsTableWithInfo.addEventListener('click', function (e) {
            var target = e.target;

            // Bubble up to tbody
            while (target.nodeName.toLowerCase() !== "tbody") {

                if (target.getAttribute("data-btntype") === "edit") {
                    window.location.href = 'edit.html' + '?id=' + target.getAttribute("data-id") + "&student=" + id;
                    return;
                } else if (target.getAttribute("data-btntype") === "remove") {
                    var courseToRemove = target.getAttribute("data-id");
                    EnrollmentModule.getEnrollments(function (enrollmentsList) {
                        //findEnrollmentID(enrollmentsList);
                        for (i = 0; i < enrollmentsList.length; i++) {
                            if (enrollmentsList[i].CourseID == courseToRemove) {
                                if (enrollmentsList[i].StudentID == id) {
                                    //console.log("Ok we got this far.", courseToRemove, enrollmentsList[i].EnrollmentID, enrollmentsList[i].StudentID)
                                    EnrollmentModule.deleteEnrollment(enrollmentsList[i].EnrollmentID, function () {
                                        window.location.reload(true);
                                    })
                                }
                            }
                        }
                    });
                    return;
                } else if (target.nodeName.toLowerCase() === "tr") {
                    window.location.href = 'detail.html' + '?id=' + target.getAttribute("data-id") + "&student=" + id;
                    return;
                }
                // Bubble up the nodes
                target = target.parentNode;
            }
        });
    }
}