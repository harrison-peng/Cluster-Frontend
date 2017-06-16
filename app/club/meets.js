$(document).ready(function() {
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            msg.forEach(function(element) {
                // console.log(element.meeting_time.slice(0,element.meeting_time.indexOf(",")));
                // console.log(element.meeting_time.slice(element.meeting_time.indexOf(",")+1));

                var item = "<div class='panel panel-default shaddow'><div class='panel-body'><h3>" + element.name + "</h3><div class='row'><div class='col-xs-8 col-sm-8 col-md-8 col-lg-8'><h5>" + element.place + "</h5><p>" + element.address + "</p><br><p>5 人將參加</p></div><h3>"+element.meeting_time.slice(0,element.meeting_time.indexOf(","))+"</h3><h3>"+element.meeting_time.slice(element.meeting_time.indexOf(",")+1)+"</h3></div>";
                $('.meets').append(item);
                
            }, this);
        }
    });

    $('#createMeeting').click(function () {
        console.log('sadasd');
        window.location.href = "/Cluster-Frontend/view/club/clubCreateMeeting.html";
    });

    var meetingName = '';
    var meetingPlace = '';
    var meetingAddress = '';
    var month = "01";
    var date = "01";
    var hour = "01";
    var minute = "00";    
    var daynight = "pm";

    $('#meetingName').on('change', function () {
        meetingName = $("#meetingName").val();        
    }).change();
    $('#meetingPlace').on('change', function () {
        meetingPlace = $("#meetingPlace").val();        
    }).change();
    $('#meetingAddress').on('change', function () {
        meetingAddress = $("#meetingAddress").val();        
    }).change();
    $('#month').on('change', function () {
        month = this.value;        
    }).change();
    $('#date').on('change', function () {
        date = this.value;        
    }).change();
    $('#hour').on('change', function () {
        hour = this.value;        
    }).change();
    $('#minute').on('change', function () {
        minute = this.value;        
    }).change();
    $('#daynight').on('change', function () {
        daynight = this.value;        
    }).change();
            
    

    $('#submitMeeting').click(function() {
        var user = JSON.parse(sessionStorage.getItem('user'));
        if(daynight == "pm") {        
            hourInt = parseInt(hour) + 12;
            hour = hourInt.toString();        
        }
        var time = new Date('2017-' + month + '-' + date + 'T' + hour + ':' + minute + 'Z').toISOString();
        
        $.ajax({
            url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem('club'),
            type: "POST",
            data: {
                clubID: sessionStorage.getItem('club'),
                token: user.token,
                meetingtime: time,
                name: meetingName,
                place: meetingPlace,
                address: meetingAddress
            },
            dataType: "text",
            success: function(data, status) {                
                window.location.href = "/Cluster-Frontend/view/club/clubMeets.html";
            },
            error: function(error) {                
                console.log(error.responseText);
            }
        });
    });
});