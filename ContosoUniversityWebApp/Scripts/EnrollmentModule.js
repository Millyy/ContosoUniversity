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
                    console.log(data);
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