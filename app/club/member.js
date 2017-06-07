$(document).ready(function() {
    $.ajax({
        url: " http://140.119.137.186:30969/memberlists/" + sessionStorage.getItem('club'),
        type: "GET",
        dataType: "json",
        success: function(msg){
            console.log(msg);

            msg.forEach(function(element) {
               var item = "<div class='col-xs-3 col-sm-3 col-md-3 col-lg-3'><div class='panel panel-default'><div class='panel-heading'><img src='" + element.photo + "' class='img-responsive' alt='Image'></div><div class='panel-body text-center'>" + element.name + "</div></div></div>"; 

               $('.memberList').append(item);
            }, this);
        }
    });
});