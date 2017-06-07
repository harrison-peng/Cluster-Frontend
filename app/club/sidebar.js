$(document).ready(function() {
    $.ajax({
        url: "http://140.119.137.186:30969/clubs/sidebar/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {
            console.log(msg);
            $("#clubSidebarName").append(msg.name);
            $("#clubImg").attr("src", msg.photo);
        }
    });
});