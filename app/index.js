$(document).ready(function(){
    $.get("navBar.html",function(data){
        $("#navbar").html(data);
    });
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs",
        type: "GET",
        dataType: "json",
        success: function(msg) {

            msg.forEach(function(element) {
                var item = "<div class='col-xs-3 col-sm-3 col-md-3 col-lg-3' onClick='clickClub(this)' key='" + element.id + "'><div class='panel panel-default'><div class='panel-heading'><a href='/Cluster-Frontend/view/club/clubPreview.html' key='" + element.id + "' ><img src='" + element.photo + "' class='img-responsive' alt='Image' href='/Cluster-Frontend/view/club/clubPreview.html' style='weight:250px;height:250px'></a></div><div class='panel-body text-center'><a href='/Cluster-Frontend/view/club/clubPreview.html'>" + element.name + "</a></div></div></div>";

                $("#clubList").append(item);
            }, this);
        }
    })
});

function clickClub(element) {
    var clubKey = element.getAttribute('key');    
    sessionStorage.setItem("club", clubKey);
}
