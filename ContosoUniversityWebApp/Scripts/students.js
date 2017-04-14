function loggedIn() {
    document.getElementById("loginCheck").classList.add("hidden");
    document.getElementById("facebookButton").classList.add("hidden");
    document.getElementById("loginSuccessTable").classList.remove("hidden");

    FB.api('/me', function (response) {
        console.log(JSON.stringify(response));

        //if (response["id"] == 10153747691339539) {
        //    console.log("The same!")
        //}
        loadCourses(response["id"]);

        function loadCourses(id) {
            console.log(response["id"], "The same!")
            // We need a reference to the div/table that we are going to chuck our data into
            var coursesTable = document.getElementById("tblstudents");

            CourseModule.getCourses(function (coursesList) {
                setupCoursesTable(coursesList);
            });


            // This is the callback for when the data comes back in the studentmodule
            function setupCoursesTable(courses) {
                console.log(courses);
                for (i = 0; i < courses.length; i++) {

                    // Create row 
                    var row = document.createElement('tr');
                    row.setAttribute("data-id", courses[i].CourseID);

                    // Add the columns in the row (td / data cells)
                    var courseIDNumber = document.createElement('td');
                    courseIDNumber.innerHTML = "#" + courses[i].CourseID;
                    row.appendChild(courseIDNumber);

                    var courseName = document.createElement('td');
                    courseName.innerHTML = courses[i].Title;
                    row.appendChild(courseName);

                    var courseCredits = document.createElement('td');
                    courseCredits.innerHTML = courses[i].Credits;
                    row.appendChild(courseCredits);

                    var editCourseOption = document.createElement('td');
                    var editCourseButton = document.createElement('button');
                    editCourseButton.className = "btn btn-default";
                    editCourseButton.innerHTML = "Edit";
                    editCourseButton.setAttribute("data-id", courses[i].CourseID);
                    editCourseButton.setAttribute("data-btntype", "edit");
                    editCourseOption.appendChild(editCourseButton);
                    row.appendChild(editCourseOption);

                    var removeCourseOption = document.createElement('td');
                    var removeCourseButton = document.createElement('button');
                    removeCourseButton.className = "btn btn-default";
                    removeCourseButton.innerHTML = "Remove";
                    removeCourseButton.setAttribute("data-id", courses[i].CourseID);
                    removeCourseButton.setAttribute("data-btntype", "remove");
                    removeCourseOption.appendChild(removeCourseButton);
                    row.appendChild(removeCourseOption);

                    // Append the row to the end of the table
                    coursesTable.appendChild(row);

                }

                // Event delegation, explain this well
                coursesTable.addEventListener('click', function (e) {
                    var target = e.target;

                    // Bubble up to tbody
                    while (target.nodeName.toLowerCase() !== "tbody") {

                        if (target.getAttribute("data-btntype") === "edit") {
                            window.location.href = 'editcourse.html' + '?id=' + target.getAttribute("data-id");
                            return;
                        } else if (target.getAttribute("data-btntype") === "remove") {
                            CourseModule.deleteCourse(target.getAttribute("data-id"), function () {
                                window.location.reload(true);
                            });
                            return;
                        } else if (target.nodeName.toLowerCase() === "tr") {
                            window.location.href = 'coursedetail.html' + '?id=' + target.getAttribute("data-id");
                            return;
                        }
                        // Bubble up the nodes
                        target = target.parentNode;
                    }
                });
            }
        }

        
    });
}

//// This event triggers on page load
//document.addEventListener("DOMContentLoaded", function () {
//    loadCourses();
//    //var controller = document.body.getAttribute("data-controller");
//});

