$(document).ready(function(){ 
    $.get("navBar.html",function(data){
        $("#navbar").html(data);
    });
});