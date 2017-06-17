$(document).ready(function() {
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/clubs/sidebar/" + sessionStorage.getItem("club"),
        type: "GET",
        dataType: "json",
        success: function(msg) {            
            $("#clubSidebarName").append(msg.name);
            $("#clubImg").attr("src", msg.photo);                   
        }
    });

    $('#joinClubbtn').click(function() {        
        var user = JSON.parse(sessionStorage.getItem('user'));
        if(user) {
            $.ajax({
            url: "https://gotoclusterapi.herokuapp.com/clubs/" + sessionStorage.getItem('club'),
            type: "POST",
            data: {                
                token: user.token,                
            },
            dataType: "text",
            success: function(data, status) {
                sessionStorage.setItem("memberIsInClub", "true");
                console.log('success'); 
                sessionStorage.setItem('memberIsInClub', 'true');              
                window.location.href = "/Cluster-Frontend/view/club/clubIndex.html";
            },
            error: function(error) {                
                console.log(error.responseText);
            }
        });
        } else {
            window.location.href = "/Cluster-Frontend/view/signin.html";
        }        
    });

    $('#dropClub').click(function() {        
        var user = JSON.parse(sessionStorage.getItem('user'));
        $.ajax({            
        // url: "http://140.119.137.186:30969/clubs/5",
        url:"https://gotoclusterapi.herokuapp.com/clubs/" + sessionStorage.getItem('club'),
        type: "DELETE",
        headers:{
            'token': user.token,
            'Content-Type':'application/json'
        },
        success: function(res) {
            console.log(res);
            sessionStorage.setItem('memberIsInClub', 'false');
            window.location.href = "/Cluster-Frontend/view/club/clubIndex.html";       
        },
        error: function(res) {
            console.log(res.responseText);            
        }
    });
    });
});

