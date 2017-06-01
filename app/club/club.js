$(document).ready(function(){         
    $.get("../navBar.html",function(data) {               
        $("#navbar").html(data);        
    });
    $.get("../sideBar.html", function(data) {
        $("#sidebar").html(data);
    });
});
