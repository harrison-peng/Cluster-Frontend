if(sessionStorage.getItem('user')){
    var user = JSON.parse(sessionStorage.getItem('user'));
    // console.log(user);
    // console.log(("login: "+user.name));
    document.getElementById('loginname').innerHTML = user.name;
}else{
    alert("notlogin");
}

document.getElementById('signout').addEventListener('click',function(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('memberIsInClub');
    alert("signout!!");
    window.location.href = "/Cluster-Frontend/view/index.html";
});

function getUserToken() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    var token = user.token;
    sessionStorage.setItem('portfolio', token);
}