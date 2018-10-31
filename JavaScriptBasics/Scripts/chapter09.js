/*
 * Chapter 9
 */

"use strict";

window.onload = registerAllHandlers;

function registerAllHandlers() {
    document.getElementById("face1").onmouseover = blurgh;
    document.getElementById("face1").onmouseout = smiley;
    document.getElementById("face2").onmouseover = function () {
        document.getElementById("face2").src = "Content/Images/animatedRasp.gif";
        document.getElementById("face3").src = "Content/Images/waaaht.png";
        document.getElementById("face4").src = "Content/Images/face_raspberry.png";
    };
    document.getElementById("face2").onmouseout = function () {
        document.getElementById("face2").src = "Content/Images/smiley.jpg";
        document.getElementById("face3").src = "Content/Images/ooerr.jpg";
        document.getElementById("face4").src = "Content/Images/smile_2.png";
    };

   // document.getElementById("body").onunload = sayGoodbye;
}

function blurgh() {
    document.getElementById("face1").src = "Content/Images/animatedBlurgh.gif";
}

function smiley() {
    document.getElementById("face1").src = "Content/Images/smiley.jpg";
}

function sayGoodbye() {
    alert("bye");
}

/*
 * The following code does the same thing, but with anonymous functions
 */
//window.onload = function () {
//    document.getElementById("face1").onmouseover = function () {
//        document.getElementById("face1").src = "Content/Images/animatedBlurgh.gif";
//    }
//    document.getElementById("face1").onmouseout = function smiley() {
//        document.getElementById("face1").src = "Content/Images/smiley.jpg";
//    }
    //document.getElementById("body").onunload = function sayGoodbye() {
    //    alert("bye");
    //}





