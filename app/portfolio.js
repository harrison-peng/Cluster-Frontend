$(document).ready(function() {
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/members?token=" + sessionStorage.getItem('portfolio'),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            // console.log(msg);
            var imgURL = msg.photo;
            var name = msg.name;
            var clubList = msg.clubList;

            $('.memberPhoto').attr('src', imgURL);
            $('#memberName').append(name);

            clubList.forEach(function(element) {
                // console.log(element);

                // var item = "<div class='col-xs-3 col-sm-3 col-md-3 col-lg-3' onClick='clickClub(this)'><div class='panel panel-default shaddow'><div class='panel-body'><img src='" + element.photo + "' alt='clubImg' style='width:220px;height:220px'><h4 style='text-align:center;'>" + element.name + "</h4></div></div></div>";
                var item = "<div class='col-xs-3 col-sm-3 col-md-3 col-lg-3' onClick='clickClub(this)' key='" + element.id + "'><div class='panel panel-default clubitem shaddow'><a key='" + element.id + "' ><div class='panel-heading'><img src='" + element.photo + "' class='img-responsive' alt='Image' style='width:250px;height:250px;'></div><div class='panel-body text-center'>" + element.name + "</div></a></div></div>";
                $('.joinClubList').append(item);
            }, this);
        }
    })
});