/*
 * This JavaScript file has all the code for 
 * Chapter 1
 */

"use strict";
function HelloWorldAlert() {
    //alert("The needs of the many outweigh the needs of the few");
    alert("Hello World");
}

// Here's the alternative function syntax:
// var HelloWorldAlert = function () {
//      alert("Hello World");
//};

function HelloWorld() {
    // 1st, here's the old way to produce output:
    document.getElementById("lblSayHello").innerHTML = "Hello World!";
    //document.getElementById("lblSayHello5").innerHTML = "<h1>Hello,World!</h1><br>How are you today?<br /><hr /><p> Here's some more text</p>";

    // innerText can be more efficient, but you can't put HTML in it:
    // document.getElementById("lblSayHello5").innerText = "Hello World!";
}

function HelloWorld6() {
    // Now here's the more modern way:
    var l = document.createElement("label"); // Create a <label> element
    var t = document.createTextNode("This label was created dynamically!"); // Create a text node
    // unlike innerHTML, you can't embed HTML in a TextNode

    // This isn't required for this example, but if you need to give your 
    // new element an id, you use the following:
    l.setAttribute('id', 'lblSayHello6');

    // Now put the text into the label:
    l.appendChild(t);

    // Finally put the label onto the page:
    document.querySelector('#content').appendChild(l);
    // document.getElementById("content").appendChild(l);

    // the next line demostrates ProtoType syntax:
    //$("lblSayHello5").innerHTML = "Hello World!";

    // the next lines show concatenating some text: 
    //var page = "<h1>Welcome to my Page</h1>"
    //page += "<p>here's some stuff<br />";
    //page += "and some more</p>"
    //document.write(page);
    //document.getElementById("lblSayHello5").innerHTML = page;
}

