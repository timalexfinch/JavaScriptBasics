/*
 * This JavaScript file has all the code for Chapter 4
 */
'use strict';

//window.onload = function () {
document.getElementById("btnOne").onclick = function () {
    document.getElementById("lblEventAnswer1").innerHTML = "Hello from Button One";
};
document.getElementById("btnTwo").onclick = function () {
    document.getElementById("lblEventAnswer2").innerHTML = "Hello from Button Two";
};
document.getElementById("face1").onmouseover = function () {
    document.getElementById("face1").src = "Content/Images/animatedBlurgh.gif";
};
document.getElementById("face1").onmouseout = function () {
    document.getElementById("face1").src = "Content/Images/smiley.jpg";
};
document.getElementById("btnThree").addEventListener('click', fun1, false);
document.getElementById("btnThree").addEventListener('click', fun2, false);
document.getElementById("btnTry").onclick = btnTry;
//};

//Below is same as above, but done as named functions, instead of anonymous functions:

//function registerAllEventHandlers() {
//    document.getElementById("btnOne").onclick = btnOne;
//    document.getElementById("btnTwo").onclick = btnTwo;
//    document.getElementById("btnThree").addEventListener('click', fun1, false)
//    document.getElementById("btnThree").addEventListener('click', fun2, false)
//    document.getElementById("btnTry").onclick = btnTry;
//}

//window.onload = registerAllEventHandlers;

//function btnOne() {
//    document.getElementById("lblEventAnswer1").innerHTML =
//        "Hello from Button One";
//}

//function btnTwo() {
//    document.getElementById("lblEventAnswer2").innerHTML =
//        "Hello from Button Two";
//}

function fun1() {
    document.getElementById("lblEventAnswer3").innerHTML =
        "Hello from function 1";
}

function fun2() {
    document.getElementById("lblEventAnswer4").innerHTML =
        "and Hello from function 2";
}
function btnTry() {
    try {
        document.getElementById("lblTry").innerHTML = "Hello from btnTry";
    } catch (e) {
        document.getElementById("lblError").innerHTML = "Error <br />" + e.message;
    }
}