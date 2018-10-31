/*
 * Appendix B - Cookies. 
 */

'use strict';

window.onload = function () {
    // the first 3 lines do the cookies with fairly crude, raw javascript

    document.getElementById("btnLogin").onclick = checkCookie;
    document.getElementById("btnLogout").onclick = expireCookie;
    checkCookie();

    // the next 3 lines do the same, but using the js-cookie library

    document.getElementById("btnLogin2").onclick = checkCookie;
    document.getElementById("btnLogout2").onclick = expireCookie;
    checkCookie();
};

// First all the raw JavaScript:

function setCookie(cname, cvalue, exdays) {
    if (exdays === 0) {
        document.cookie = cname + "=" + cvalue + "; ";
    }
    else {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user !== "") {
        document.getElementById("lblCookie").innerHTML =
            "Logged in as: " + user;
    }
    else {
        var cvalue = encodeURI(document.getElementById("txtUserName").value);
        var rememberMe = document.getElementById("chkRemember");
        if (rememberMe.checked === true) {
            setCookie("username", cvalue, 365);
        }
        else {
            setCookie("username", cvalue, 0);
        }
    }
}

function expireCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

//---------------------------------------------------------------
// Now the js-cookie library

//function checkCookie2() {
//    var user = Cookies.get("username2");
//    if (user) {
//        document.getElementById("lblCookie2").innerHTML =
//                    "Logged in as: " + user;
//    }
//    else {
//        var cvalue = encodeURI(document.getElementById("txtUserName2").value);
//        var rememberMe = document.getElementById("chkRemember2");
//        if (rememberMe.checked === true) {
//            Cookies.set("username2", cvalue, { expires: 365 });
//        }
//        else {
//            Cookies.set("username2", cvalue);
//        }
//    }
//}

//function expireCookie2() {
//    Cookies.remove("username2");
//}

// Here's an alternative way, done using named functions:

//function registerAllEvents() {
//    document.getElementById("btnLogin").onclick = checkCookie;
//    document.getElementById("btnLogout").onclick = expireCookie;
//}

//function initialise() {
//    registerAllEvents();
//    checkCookie();
//}

//window.onload = initialise;