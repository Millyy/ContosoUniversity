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
                    console.log(data);
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