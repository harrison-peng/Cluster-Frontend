$(document).ready(function(){         
    $.get("../navBar.html",function(data) {               
        $("#navbar").html(data);           
    });
    $.get("/view/sideBar.html", function(data) {
        $("#sidebar").html(data);        
    });
    
    $.ajax({
        url: "http://140.119.137.186:30969/clubs/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            $("#description").append(msg.description);
            $("#clubCreateTime").append(msg.create_time);
            $("#clubPlace").append(msg.place);
            $("#clubMemberNumber").append(msg.member_number);
        }
    });

    $.ajax({
        url: "http://140.119.137.186:30969/clubs/sidebar/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            $("#clubName").append(msg.name);            
        }
    });
});
