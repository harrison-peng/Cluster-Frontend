window.addEventListener('pageshow', function(event) {
    if(sessionStorage.getItem('user')){
        $.get("/Cluster-Frontend/view/navBarLogin.html",function(data){
            $("#navbar").html(data);
        });
    }else{
        $.get("/Cluster-Frontend/view/navBar.html",function(data){
            $("#navbar").html(data);
        });
    }
});
$(document).ready(function(){
    if(sessionStorage.getItem('user')){
        $.get("/Cluster-Frontend/view/navBarLogin.html",function(data){
            $("#navbar").html(data);
        });
    }else{
        $.get("/Cluster-Frontend/view/navBar.html",function(data){
            $("#navbar").html(data);
        });
    }

    $.get("/Cluster-Frontend/view/footer.html",function(data){
        $("#footer").html(data);
    });

    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs",
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            msg.forEach(function(element) {
                var item = "<div class='col-xs-3 col-sm-3 col-md-3 col-lg-3' onClick='clickClub(this)' key='" + element.id + "'><div class='panel panel-default clubitem'><a key='" + element.id + "' ><div class='panel-heading'><img src='" + element.photo + "' class='img-responsive' alt='Image' style='width:250px;height:250px;'></div><div class='panel-body text-center'>" + element.name + "</div></a></div></div>";
                ///Cluster-Frontend/view/club/clubIndex.html
                $("#clubList").append(item);
            }, this);
        }
    })

    // category select
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/all/category",
        type: "GET",
        dataType: "json",
        success: function(msg) {
            msg.forEach(function(element) {
                var item = "<option value='" + element.name + "'>" + element.name + "</option>";
                $('#category').append(item);
            }, this);                        
        },
        error: function(error) {
            console.log(error);
        }
    });

    //place select
        $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/all/place",
        type: "GET",
        dataType: "json",
        success: function(msg) {
            msg.forEach(function(element) {
                var item = "<option value='" + element.name + "'>" + element.name + "</option>";
                $('#cPlace').append(item);
            }, this);                        
        },
        error: function(error) {
            console.log(error);
        }
    });
});

function clickClub(element) {
    function setClub() {
        return new Promise(function(resolve, reject) {
            var clubKey = element.getAttribute('key');
            sessionStorage.setItem("club", clubKey);
            resolve('done');
        });        
    }

    function setMemberIsInClub() {
        return new Promise(function(resolve, reject) {
            var user = JSON.parse(sessionStorage.getItem('user'));
            var isInClub = false;

            if(user) {
                $.ajax({
                    url: " https://gotoclusterapi.herokuapp.com/memberlists/" + sessionStorage.getItem('club'),
                    type: "GET",
                    dataType: "json",
                    success: function(msg){
                        if (msg.length) {
                            msg.forEach(function(element) {
                                var id = element.id;                    
                                if (user.id == id) {
                                    isInClub = true;                                                                   
                                }
                            }, this);
                        }
                        sessionStorage.setItem("memberIsInClub", isInClub);
                        resolve('member login');
                    }
                }); 
            } else {
                sessionStorage.setItem("memberIsInClub", "false");
                resolve('member not login');
            }
        });        
    }

    setClub().then(function(content) {        
        return setMemberIsInClub();
    }).then(function (content) {        
        window.location.href = "/Cluster-Frontend/view/club/clubIndex.html";
    });
}
