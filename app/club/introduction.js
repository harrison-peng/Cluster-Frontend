$(document).ready(function() {
     $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem("club") + "?begin=0&number=1",
        type: "GET",
        dataType: "json",
        success: function(msg) {
            console.log(msg);
            var item = "<div class='col-xs-8 col-sm-8 col-md-8 col-lg-8'><h3>" + msg[0].name + "</h3><h5>" + msg[0].place + "</h5><p>" + msg[0].address + "</p><br><p>5 人將參加</p></div><h3>" + msg[0].meeting_time + "</h3>";
            
            $('.recentMeet').append(item);
        }
    });
});