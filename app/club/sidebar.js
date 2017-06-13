$(document).ready(function() {
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/sidebar/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            $("#clubSidebarName").append(msg.name);
            $("#clubImg").attr("src", msg.photo);
        }
    });

    // $('#joinClubbtn').click(function() {
    //     function postClubMember() {
    //         return new Promise(function(resolve, reject) {
    //             $.ajax({
    //                 url: "https://gotoclusterapi.herokuapp.com/members",
    //                 type: "POST",
    //                 data: {
    //                     clubID: sessionStorage.getItem('club'),
    //                     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJfaWQiOjYsImlhdCI6MTQ5NjY1MjAzMiwiZXhwIjo0MzIwMDAwMDE0OTY2NTIwMDB9.8tQUEkjdAOzBO8nNnqY10PsF3z5KSzbYFUvIweWKffk",
    //                     meetingtime: time,
    //                     name: meetingName,
    //                     place: meetingPlace,
    //                     address: meetingAddress
    //                 },
    //                 dataType: "text",
    //                 success: function(data, status) {                
    //                     window.location.href = "/Cluster-Frontend/view/club/clubMeets.html";
    //                 },
    //                 error: function(error) {                
    //                     console.log(error.responseText);
    //                 }
    //             });
    //         });
    //     }
    // });
});