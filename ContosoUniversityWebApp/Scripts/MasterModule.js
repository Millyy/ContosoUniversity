var StudentModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getStudents: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Students",
                success: function (data) {
                    callback(data);
                }
            });

        },

        addStudent: function (student, callback) {

            $.ajax({
                url: "http://contoso-university-app.azurewebsites.net/api/Students",
                type: "POST",
                data: student,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        getStudentById: function (id, callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Students/" + id,
                success: function (data) {
                    //console.log(data);
                    callback(data);
                }
            });

        },
    };
}());

var EnrollmentModule = (function () {
    return {
        getEnrollments: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Enrollments",
                success: function (data) {
                    callback(data);
                }
            });

        },

        addEnrollment: function (enrollment, callback) {

            $.ajax({
                url: "http://contoso-university-app.azurewebsites.net/api/Enrollments",
                type: "POST",
                data: enrollment,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        editEnrollment: function (id, enrollment, callback) {

            $.ajax({
                url: "http://contoso-university-app.azurewebsites.net/api/Enrollments/" + id,
                type: "PUT",
                data: enrollment,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        getEnrollmentById: function (id, callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Enrollments/" + id,
                success: function (data) {
                    //console.log(data);
                    callback(data);
                }
            });

        },

        deleteEnrollment: function (id, callback) {

            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Enrollments/" + id,
                success: function (data) {
                    callback();
                }
            });
        }

    };
}());

var CourseModule = (function () {
    return {
        getCourses: function (callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Courses",
                success: function (data) {
                    callback(data);
                }
            });

        },

        addCourse: function (course, callback) {

            $.ajax({
                url: "http://contoso-university-app.azurewebsites.net/api/Courses",
                type: "POST",
                data: course,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        editCourse: function (id, course, callback) {

            $.ajax({
                url: "http://contoso-university-app.azurewebsites.net/api/Courses/" + id,
                type: "PUT",
                data: course,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        getCourseById: function (id, callback) {

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Courses/" + id,
                success: function (data) {
                    //console.log(data);
                    callback(data);
                }
            });

        },

        deleteCourse: function (id, callback) {

            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "http://contoso-university-app.azurewebsites.net/api/Courses/" + id,
                success: function (data) {
                    callback();
                }
            });
        }

    };
}());