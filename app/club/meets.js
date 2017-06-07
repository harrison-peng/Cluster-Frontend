$(document).ready(function() {
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {
            console.log(msg);
            msg.forEach(function(element) {
                var item = "<div class='panel panel-default'><div class='panel-body'><h3>" + element.name + "</h3><div class='row'><div class='col-xs-8 col-sm-8 col-md-8 col-lg-8'><h5>" + element.place + "</h5><p>" + element.address + "</p><br><p>5 人將參加</p></div><h3>" + element.meeting_time + "</h3></div></div></div>";
                $('.meets').append(item);
            }, this);
        }
    });

    $('#submitMeeting').click(function() {
        var name = $('#meetingName').val();
        console.log(name);
    });
});