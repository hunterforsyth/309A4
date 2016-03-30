$(document).ready(function() {
    $.ajaxSetup({
        contentType: "application/json; charset=utf-8"
    });
});

var allCookies;

function login() {
    var requestJSON = new Object();
    requestJSON.username = $("#username").val();

    requestJSON.hashed_password = $("#password").val();
    $.post("http://159.203.44.151:24200/authenticate_user", JSON.stringify(requestJSON))
        .done(function(data){
 
        var login_id = JSON.parse(data).login_id;
        if (login_id) {
            location.href = "index.html";
            //TODO 
            // somehow store data.login_id in a cookie
            set_cookie("login_id=",login_id);
        }
        else {
            $("#message").empty();
            $("#message").append("Incorrect username or password");
        }
        });    
}

function set_cookie(key,value) {
    document.cookie = key + value;
}

function get_cookie(key) {
    allCookies = document.cookie;
    return allCookies;
}