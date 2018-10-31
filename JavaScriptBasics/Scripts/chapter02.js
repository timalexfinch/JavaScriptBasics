/*
 * This JavaScript file has all the 
 * code for Chapter 2
 */
"use strict";

function hello() {
    // 1st, here's the old way to get input:
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;

    // Now here's a more flexible way:
    //var firstName = document.querySelector('#txtFirstName').value;
    //var lastName = document.querySelector('#txtLastName').value;

    // Here's the old way:
    document.getElementById("lblSayHello").innerHTML =
        "Hello " + firstName + " " + lastName + "!";

    // Now here's the new ES6+ syntax for using variables,
    // called "template strings". These work with Edge, Chrome, FF, but not IE11:
    //document.getElementById("lblSayHello").innerHTML =
    //    "Hello " + `${firstName} ${lastName}` + "!";
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function add() {
    var num1 = document.querySelector("#txtNumber1").value;
    var num2 = document.querySelector("#txtNumber2").value;

    if (isNumber(num1) && isNumber(num2)) {
        document.getElementById("lblMathsAnswer").innerHTML =
            "Added: <strong>" + (parseFloat(num1) + parseFloat(num2)) + "</strong>";
    }
    else {
        document.getElementById("lblMathsAnswer").innerHTML = "Input must be numbers";
    }
}

function subtract() {
    var num1 = document.querySelector("#txtNumber1").value;
    var num2 = document.querySelector("#txtNumber2").value;

    document.getElementById("lblMathsAnswer").innerHTML =
        "Subtracted: <strong>" + (parseFloat(num1) - parseFloat(num2)) + "</strong>";
}
function multiply() {
    var num1 = document.querySelector("#txtNumber1").value;
    var num2 = document.querySelector("#txtNumber2").value;

    // this function shows another JavaScript feature - 
    // how to display numbers in a locale-specific way:

    var answer = parseFloat(num1) * parseFloat(num2);

    document.getElementById("lblMathsAnswer").innerHTML =
        "Multiplied: <strong>" + answer.toLocaleString() + "</strong>";
}
function divide() {
    var num1 = document.querySelector("#txtNumber1").value;
    var num2 = document.querySelector("#txtNumber2").value;

    document.getElementById("lblMathsAnswer").innerHTML =
        "Divided: <strong>" + parseFloat(num1) / parseFloat(num2) + "</strong>";
}


var namesList = [];

function addToArray() {

    var newName = document.querySelector("#txtName").value;
    namesList.push(newName);
    document.getElementById("txtName").value = "";
    document.getElementById("lblList").innerHTML =
        "Your List contains the following names: <strong>" + namesList.join(', ') + "</strong>";
}

function howMany() {
    document.getElementById("lblHowMany").innerHTML =
        "Your Array contains : <strong>" + namesList.length + "</strong> names";
}


function pickaCard() {
    var suit = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
    //var suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
    var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    var s = Math.round(Math.random() * 3);
    var v = Math.round(Math.random() * 12);

    if (s === 0 || s === 1) {
        document.getElementById("lblPickaCard").style.color = "red";
    } else {
        document.getElementById("lblPickaCard").style.color = "black";
    }

    document.getElementById("lblPickaCard").innerHTML =
        "<strong>" + value[v] + suit[s] + "</strong>";
}

function dealaHand() {
    var suit = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
    var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (var i = 1; i < 6; i++) {

        var s = Math.round(Math.random() * 3);
        var v = Math.round(Math.random() * 12);

        if (s === 0 || s === 1) {
            document.getElementById("lblCard" + i).style.color = "red";
        } else {
            document.getElementById("lblCard" + i).style.color = "black";
        }

        document.getElementById("lblCard" + i).className = "card";

        document.getElementById("lblCard" + i).innerHTML =
            "<strong>" + value[v] + suit[s] + "</strong>";
    }
}