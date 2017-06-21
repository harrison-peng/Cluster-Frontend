var imageBase64URL;

$(document).ready(function() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    var imageBase64;
    var clubName;
    var clubDescription;
    var clubPlace;
    var clubType;
    var token = user.token;
    // function getBase64(file) {
    //     var reader = new FileReader();
    //
    //     reader.onload = function () {
    //         imageBase64 = reader.result;
    //         // console.log(imageBase64);
    //     };
    //     reader.onerror = function (error) {
    //         imageBase64 = 'Error: ' + error;
    //         // console.log(imageBase64);
    //     };
    //
    //     reader.readAsDataURL(file);
    // }

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



    $("#inputImg").change(function(){
       readImage( this );       
    });

    function readImage(input) {
        if ( input.files && input.files[0] ) {
            var FR= new FileReader();
            FR.onload = function(e) {
            // console.log(e.target.result);
            imageBase64URL =e.target.result;
            //    $('#img').attr( "src", e.target.result );
            };
         FR.readAsDataURL(input.files[0]);
        }

        // var item = "<img src='" + imageBase64URL + "' alt='clubPhoto'>";
        // $('#photoDisplay').append(item);
    }

    $('#submitbtn').click(function() {
        var reqData = {
            token: token,
            name: clubName,
            category: clubType,
            place: clubPlace,
            photo: imageBase64URL,
            description: clubDescription
        };

        $.ajax({
            url: "https://gotoclusterapi.herokuapp.com/clubs",
            type: "POST",
            headers:{
                'Content-Type':'application/json',
            },
            data: JSON.stringify(reqData),
            // dataType: "text",
            success: function(res, status) {
                console.log('success');
                // console.log(reqData);
                console.log(res);
                console.log('insert');
                window.location.href = "/Cluster-Frontend/view/index.html";
            },
            error: function(error) {
                console.log('error');
                // console.log(reqData);
                console.log(error.responseText);
            }
        });
        // var image = $('#inputImg')[0].files[0];
        // getBase64(image);
        // readImage($("#inputImg"));

        // setTimeout(function() {
        //
        //     console.log(imageBase64);
        // }, 100);
        //
        // console.log(imageBase64);
    });
});
