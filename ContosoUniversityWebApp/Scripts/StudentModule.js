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
                    console.log(data);
                    callback(data);
                }
            });

        },
    };
}());