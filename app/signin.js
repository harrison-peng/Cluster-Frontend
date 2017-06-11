// document.getElementsByClassName('btn-google')[0].addEventListener("click", function(){
//     alert("google");
// });

// var fr = new FileReader();
// fr.onload = function(e) {
//     //e.target.result = base64 format picture
//     console.log(e.target.result);
//     // console.dir(e);
//     // $('#img').attr( "src", e.target.result );
// };
// fr.readAsDataURL( this.files[0] );
// // console.dir(document.getElementById('uploadFile'))
// // console.dir(event);

document.getElementsByClassName('btn-facebook')[0].addEventListener("click", function(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        alert("Hallo!!"+ result.user.displayName+"!!Welcome!!");
        var token = result.credential.accessToken;
        // console.log(token);


        let data = {
            'fbtoken': token
        }

        let options = {
            method: "POST",
            body: JSON.stringify(data),
            // body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            // credentials: "same-origin"
        }
        fetch("https://gotoclusterapi.herokuapp.com/members", options).then(function(response) {
            response.json().then(function(result){
                // console.log(result);
                sessionStorage.setItem("user", JSON.stringify(result));

                if(sessionStorage.getItem("user")){
                    // console.log("GET!!!"+sessionStorage.getItem("user"));
                    firebase.auth().signOut().then(ele=>{

                        // alert("Success login,firebase logout");
                        alert("Success Login!!");
                        window.history.go(-1);
                    }).catch(err=>{
                        alert(err);
                        window.history.go(-1);
                    });

                }else{
                    alert("woops");
                    window.history.go(-1);
                }

            }).catch(function(err){
                alert(err);
                window.history.go(-1);
            });
        }).catch(function(err){
            alert("woops!!ServerError");
            window.history.go(-1);
        });

    }).catch(function(error) {
        alert(error);
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
        window.history.go(-1);
    });
});

setTimeout(function(){ document.getElementById('signin').style.display = 'none'; }, 10);
