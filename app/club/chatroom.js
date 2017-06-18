//  function myFunction(){
//    var msg;
//    msg = document.getElementById("message").value;
//         chatZone.innerHTML += '<div class="chatmsg"><b>' + name + '</b>: ' + msg + '<br/></div>';
//         oldata = '<div class="chatmsg"><b>' + name + '</b>: ' + msg + '<br/></div>';
// }

$(document).ready(function() {
  // GET discuss
  $.ajax({
    url: "https://gotoclusterapi.herokuapp.com/discuss/" + sessionStorage.getItem("club") + "?begin=0&number=100",
    type: "GET",
    dataType: "json",
    success: function(msg) {
      // console.log(msg);       
      msg.forEach(function(element) {
        var name = element.name;
        var message = element.message;
        var item = "<div>" + name + ": " + message + "</div>";
        $('#chatZone').append(item);
      }, this);
    }
  });


  //POST discuss
  var user = JSON.parse(sessionStorage.getItem('user'));
  var name = user.name;
  var postToken = user.token;
  var postMessage = "";
  $('#message').on('change', function () {
        postMessage = $("#message").val();        
    }).change();

  $('#chatbtn').click(function() {
    $.ajax({
      url: "https://gotoclusterapi.herokuapp.com/discuss/" + sessionStorage.getItem("club"),
      type: "POST",
      data: {
        club_id: sessionStorage.getItem("club"),
        // token: postToken,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJfaWQiOjYsImlhdCI6MTQ5NjY1MjAzMiwiZXhwIjo0MzIwMDAwMDE0OTY2NTIwMDB9.8tQUEkjdAOzBO8nNnqY10PsF3z5KSzbYFUvIweWKffk",
        message: postMessage
      },
      dataType: "text",
      success: function(data, status) {
        console.log('insert');
        $('#message').val('');
        var addMessage = "<div>" + name + ": " + postMessage + "</div>";
        $('#chatZone').append(addMessage);
      },
      error: function(error) {                
        console.log(error.responseText);
      }
  });
  });  
});