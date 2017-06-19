$(document).ready(function() {
    //get clun info
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            console.log(msg);
            var place = "#clubPlace option[value=" + msg.place + "]";
            var category = "#clubType option[value=" + msg.category + "]";
            $('#clubname').val(msg.name);
            $('#clubDescription').val(msg.description);
            $(place).attr('selected','selected');
            $(category).attr('selected','selected');
        }
    });



    //submit
    $('#submitbtn').click(function() {
        console.log('sdsa');
    });
});