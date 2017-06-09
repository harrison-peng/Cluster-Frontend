$(document).ready(function() {
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem('club'),
        type: "GET",
        dataType: "json",
        success: function(msg) {
            msg.forEach(function(element) {
                var meetsName = element.name;
                var item = "<option value='" + meetsName + "'>" + meetsName + "</option>";

                $('#meetsSelect').append(item);
            }, this);
        }
    });
});