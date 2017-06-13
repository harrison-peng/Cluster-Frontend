$(document).ready(function() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    var imageBase64;
    var clubName;
    var clubDescription;
    var clubPlace;
    var clubType;
    var token = user.token;
    function getBase64(file) {        
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            
            imageBase64 = reader.result;
            // console.log(imageBase64);
            
        };
        reader.onerror = function (error) {
            imageBase64 = 'Error: ' + error;
            // console.log(imageBase64);           
        };        
    }
    
    $('#clubname').on('change', function () {
        clubName = $("#clubname").val();        
    }).change();
    $('#clubDescription').on('change', function () {
        clubDescription = $("#clubDescription").val(); 
    }).change();
    $('#clubPlace').on('change', function () {
        clubPlace = this.value;        
    }).change();
    $('#clubType').on('change', function () {
        clubType = this.value;        
    }).change();

    $('#inputImg').on('change', function () {
        var image = $('#inputImg')[0].files[0];       
        getBase64(image);
    }).change();

    $('#submitbtn').click(function() {
        // var image = $('#inputImg')[0].files[0];       
        // getBase64(image);
        // setTimeout(function() {
        //     // $.ajax({
        //     //     url: "http gotoclusterapi.herokuapp.com/clubs",
        //     //     type: "POST",
        //     //     data: {
        //     //         token: token,
        //     //         name: clubName,
        //     //         category: clubType,
        //     //         place: clubPlace,
        //     //         photo: imageBase64,
        //     //         description: clubDescription
        //     //     },
        //     //     dataType: "text",
        //     //     success: function(data, status) {                
        //     //         // window.location.href = "/Cluster-Frontend/view/club/clubMeets.html";
        //     //         console.log('insert');
        //     //     },
        //     //     error: function(error) {                
        //     //         console.log(error.responseText);
        //     //     }
        //     // });
        //     console.log(imageBase64);
        // }, 100);   

        console.log(imageBase64);  
    });
});