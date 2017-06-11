// document.getElementsByClassName('btn-google')[0].addEventListener("click", function(){
//     alert("google");
// });

document.getElementsByClassName('btn-facebook')[0].addEventListener("click", function(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        alert("Hallo!!"+ result.user.displayName+"!!Welcome!!");

        let options = {
            method: "GET",
            // body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            },
            // credentials: "same-origin"
        }
        var token = result.credential.accessToken;
        console.log(token);

        fetch("https://graph.facebook.com/v2.9/me/picture?redirect=false&access_token="+token, options).then(function(response) {
            response.json().then(function(picture){
                console.log(picture.data.url);
                function toDataURL(url, callback) {
                  var xhr = new XMLHttpRequest();
                  xhr.onload = function() {
                    var reader = new FileReader();
                    reader.onloadend = function() {
                      callback(reader.result);
                    }
                    reader.readAsDataURL(xhr.response);
                  };
                  xhr.open('GET', url);
                  xhr.responseType = 'blob';
                  xhr.send();
                }

                toDataURL(picture.data.url, function(dataUrl) {
                  console.log('RESULT:', dataUrl)
                })


            },function(error) {
            // handle network error
                console.log(error);
            });

            var user = result.user.displayName;
            console.log(user);
            sessionStorage.setItem("user", user);
            console.log("SET!!!"+sessionStorage.getItem("user"));
        // handle HTTP response
        }, function(error) {
        // handle network error
            console.log(error);
        });

        // The signed-in user info.

        //window.history.go(-1);
        // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
});

setTimeout(function(){ document.getElementById('signin').style.display = 'none'; }, 10);
