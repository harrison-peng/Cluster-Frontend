$(document).ready(function() {
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/sidebar/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {
            console.log(msg);
            $("#clubSidebarName").append(msg.name);
            $("#clubImg").attr("src", msg.photo);
        }
    });
});