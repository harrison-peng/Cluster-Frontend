$(document).ready(function() {
    var user = JSON.parse(sessionStorage.getItem('user'));    
    var imageBase64;
    var clubName;
    var clubDescription;
    var clubPlace;
    var clubType;
    var token = user.token;

    //get clun info
    function getInfo() {
        return new Promise(function(resolve, reject) {            
            $.ajax({
                url: "https://gotoclusterapi.herokuapp.com/clubs/" + sessionStorage.getItem("club"),
                type: "GET",
                dataType: "json",
                success: function(msg) {            
                    // console.log(msg);                    
                    $('#clubname').val(msg.name);
                    $('#clubDescription').val(msg.description);                    
                    $('#clubPlace').val(msg.place);
                    $('#clubType').val(msg.category);

                    resolve('done');
                }
            });
        });
    }

    getInfo().then(function(content) {
        // console.log(content);
        clubName = $("#clubname").val();;
        clubDescription = $("#clubDescription").val();
        clubPlace = $("#clubPlace").val();
        clubType = $("#clubType").val();
    });
    
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
            // imageBase64URL =e.target.result;
            imageBase64 =e.target.result;
            //    $('#img').attr( "src", e.target.result );
            };
         FR.readAsDataURL(input.files[0]);
        }
    }

    //submit
    $('#submitbtn').click(function() {
        // console.log(imageBase64URL);
        var reqData;
        if(imageBase64 == undefined) {
            reqData = {
                token: token,
                name: clubName,
                category: clubType,
                place: clubPlace,                
                description: clubDescription
            };    
        } else {            
            reqData = {
                token: token,
                name: clubName,
                category: clubType,
                place: clubPlace,
                photo: imageBase64,
                description: clubDescription
            };            
        }

        $.ajax({
            url: "https://gotoclusterapi.herokuapp.com/clubs/" + sessionStorage.getItem('club'),
            type: "PUT",
            headers:{
                'Content-Type':'application/json',
            },
            data: JSON.stringify(reqData),            
            success: function(res, status) {
                console.log('success');
                // console.log(reqData);
                // console.log(res);
                // console.log('insert');
                window.location.href = "/Cluster-Frontend/view/club/clubIndex.html";
            },
            error: function(error) {
                console.log('error');
                // console.log(reqData);
                console.log(error.responseText);
            }
        });
        
    });
});