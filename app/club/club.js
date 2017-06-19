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
    var memberIsInClub = sessionStorage.getItem('memberIsInClub');
        
    //side bar
    if(memberIsInClub){
        if(memberIsInClub == 'true') {      
            $.get("/Cluster-Frontend/view/sideBar.html", function(data) {
                $("#sidebar").html(data);
            });
        } else {        
            $.get("/Cluster-Frontend/view/sideBarPreview.html", function(data) {
                $("#sidebar").html(data);                
            });            
        }
    } else {
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

        setMemberIsInClub().then(function(content) {            
            if(memberIsInClub == 'true') {      
                $.get("/Cluster-Frontend/view/sideBar.html", function(data) {
                    $("#sidebar").html(data);
                });
            } else {        
                $.get("/Cluster-Frontend/view/sideBarPreview.html", function(data) {
                    $("#sidebar").html(data);
                });
            }
        });   
    }

    //footer
    $.get("/Cluster-Frontend/view/footer.html",function(data){
        $("#footer").html(data);
    });

    //club information
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            $("#description").append(msg.description);
            $("#clubCreateTime").append(msg.create_time);
            $("#clubPlace").append(msg.place);
            $("#clubMemberNumber").append(msg.member_number);
            $('#clubType').append(msg.category);
        }
    });

    //side bar club info
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/sidebar/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {
            $("#clubName").append(msg.name);
        }
    });

    //latest meet info
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            msg.forEach(function(element) {
                var name = element.name;
                var date = element.meeting_time.split(',')[0];
                var month = date.split('/')[1]; 
                var time = date.split('/')[2];
                var dateID = '#date' + time;
                
                if(month == '06')
                $(dateID).append("<br>" + name);
            }, this);
        }
    });

    //edit club
    $('#editClub').click(function() {
        window.location.href = "/Cluster-Frontend/view/club/clubEditInfo.html";
    });
});

