/*
 * This JavaScript file has all the code for 
 * Chapter 3
 */

"use strict";

function bigOrSmall() {
    var num1 = document.getElementById("txtNumber1").value;

    if (!num1) {
        document.getElementById("lblMathsAnswer").innerHTML = "You must supply a number";
    }
    else {
        num1 = parseFloat(num1);
        if (num1 < 100) {
            document.getElementById("lblMathsAnswer").innerHTML = "little number";
        }
        else if (num1 > 100) {
            document.getElementById("lblMathsAnswer").innerHTML = "BIG NUMBER";
        }
        else if (num1 === 100) {
            document.getElementById("lblMathsAnswer").innerHTML = "Exactly One Hundred!";
        }
        else {
            document.getElementById("lblMathsAnswer").innerHTML = "Something went wrong";
        }
    }
}

function login() {
    var name = document.getElementById("txtUserName").value;
    var pwd = document.getElementById("txtPassword").value;

    if (pwd === "sausages") {
        document.getElementById("lblLoginStatus").innerHTML =
            "Logged in as: <strong> " + name + "</strong>";
    }
    else {
        document.getElementById("lblLoginStatus").innerHTML = "Incorrect Password";
    }
    // That last "if" statement could be re-written using the ternary operator,
    // giving something like this:

    //document.getElementById("lblLoginStatus").innerHTML =
    //    ((pwd === "sausages") ? "Correct!" : "Incorrect Password");
}

function whatDay() {
    var day = "";
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    document.getElementById("lblSwitch").innerHTML = "Today is actually: " + day;

    var whatDay = document.getElementById("txtWeekDay").value;
    var text = "";
    switch (whatDay.toLowerCase()) {
        case "monday":
        case "mon":
        case "tuesday":
        case "tues":
        case "wednesday":
        case "wed":
            text = "It's ages till the weekend";
            break;
        case "thursday":
        case "thu":
        case "friday":
        case "fri":
            text = "Nearly the weekend...";
            break;
        case "saturday":
        case "sat":
        case "sunday":
        case "sun":
            text = "It's the weekend!";
            break;
        default:
            text = "Hmmm, I'm not sure what you mean - try again....";
    }
    document.getElementById("lblSwitch2").innerHTML = text;
}

function whatDept() {
    var deptName = document.getElementById("txtDepartment").value;

    switch (deptName) {
        case "it":
            document.getElementById("lblSwitch").innerHTML = "Demigods!";
            break;
        case "marketing":
            document.getElementById("lblSwitch").innerHTML = "Liars!";
            break;
        case "sales":
            document.getElementById("lblSwitch").innerHTML = "Rip off!";
            break;
        default:
            document.getElementById("lblSwitch").innerHTML =
                "We don't have a department called: <strong>" + deptName + "</strong>";
    }
}

function doWhile() {
    var answer = "<h3>While Loop</h3>";
    var count = 1;
    while (count <= 100) {
        answer += "Count is: " + count++ + "<br />";
    }
    document.getElementById("lblLoop").innerHTML = answer;
}

function doWhileFragment() {
    // If you really want to loop round adding lots of HTML, 
    // it's more efficient with a Fragment, eg:
    var div = document.getElementById('container');
    div.innerHTML = "<h3>While Loop</h3>";
    var i = 0;
    var el;
    var fragment = document.createDocumentFragment();

    while (i < 100) {
        el = document.createElement('li');
        el.innerText = 'Count is: ' + i++;
        fragment.appendChild(el);
    }

    div.appendChild(fragment);
}

function doFor() {
    var answer = "<h3>For Loop</h3>";
    for (var count = 1; count < 100; count++) {
        answer += "Count is: " + count + "<br />";
    }
    document.getElementById("lblLoop").innerHTML = answer;
}

function showArray() {
    let months = ["Jan", "Apr", "Jun", "Aug", "Dec"];
    let answer = "<h3>Array contains:</h3>";

    // First as a for..in loop. Common but NOT recommended:
    //for (var mn in months) {
    //    answer += "Month: " + months[mn] + "<br />";
    //}
    //document.getElementById("lblShowArray").innerHTML = answer;

    // Next as a for loop:
    for (var mn = 0, len = months.length; mn < len; mn++) {
        answer += "Month: " + months[mn] + "<br />";
    }
    document.getElementById("lblShowArray").innerHTML = answer;

    // Next as the new ES6 for..of loop. 
    // This will work in Chrome, FF and Edge, but not IE11
    //for (let mn of months) {
    //    answer += "Month: " + mn + "<br />";
    //}
    //document.getElementById("lblShowArray").innerHTML = answer;


    // Finally, as a While loop:
    //var mn = 0;
    //while (mn < months.length) {
    //    answer += "Month: " + months[mn++] + "<br />";
    //}
    //document.getElementById("lblShowArray").innerHTML = answer;

}

function clearLabel() {
    document.getElementById("lblLoop").innerHTML = "";
    document.getElementById("container").innerHTML = "";
}

//var a = 23;
//function myfunction1() {
//    a = 3;
//    alert("Inside function1, a = " + a);
//    myfunction2();
//    alert("Inside function1, a = " + a);
//}

//function myfunction2() {
//    a = 7;
//    alert("Inside function2, a = " + a);
//}

function myfunction1() {
    //this will call myfunction2
    myfunction2();
}

function myfunction2() {
    //this will call myfunction3, with an argument
    myfunction3("fred");
}

function myfunction3(arg1) {
    alert("my arg was: " + arg1);
    // now call a function called "addemup"
    let num1 = 3;
    let num2 = 4;
    let answer = 0;
    answer = addemup(num1, num2);
    alert("3 + 4 = " + answer);
    answer = Math.sqrt(15);
    alert("Square Root of 15 = " + answer);
}

function addemup(num1, num2){
    return num1 + num2;
}

function createArray() {
    let people = ["fred", "barney", "dino", "bam-bam", "wilma", "betty"];
    writeOut(people);
}

function writeOut(array) {
    // First as a for..in loop. Common but NOT recommended:
    //var index =0;
    //var answer="";
    //for (index in array) {
    //    answer += "Name " + index + " is <strong>" + array[index] + "</strong><br />";
    //}
    //document.getElementById("lblFamilyNames").innerHTML = answer;

    let answer = "";
    for (let index = 0, len = array.length; index < len; index++) {
        answer += "Name " + index + " is <strong>" + array[index] + "</strong><br />";
    }
    document.getElementById("lblFamilyNames").innerHTML = answer;
}

function lottery() {
    //  returns a random number 1 – 49 
    function picknum() {
        return Math.floor(Math.random() * 49) + 1;
    }

    //  Checks if passed value exists in passed array. 
    //  Returns BOOLEAN. 
    function duplicate(new_value, list) {
        var current_value;

        for (current_value in list) {
            if (list[current_value] === new_value) return true;
        }
        return false;
    }

    //  Just writes the array out. 
    function writeout(array) {
        var answer = "<h3>Lottery Numbers</h3>";
        for (var element in array) {
            answer += "Number " + element + " = ";
            answer += "<em>" + array[element] + "</em><br />";
        }
        document.getElementById("lblLotteryNumbers").innerHTML = answer;
    }

    //  used for numberical sorting 
    function checknumbers(x, y) { return x - y; }

    // *********** main program starts here ****
    var rnd, numbers = [];

    // pick first value
    numbers[0] = picknum();

    // pick next 5
    for (var choice = 1; choice < 6; choice++) {
        rnd = picknum();
        // check value not already picked 
        while (duplicate(rnd, numbers)) { rnd = picknum(); }
        numbers[choice] = rnd;
    }

    // write out sorted array 

    numbers.sort(checknumbers);
    writeout(numbers);
}

function scope() {
    // === Shows the scope of global v local variables ==

    // *** quick cheat to display text with a newline ***
    function echo(text) {
        document.getElementById("lblScope").innerHTML += text + "<br />";
    }
    // *** this is used in successive examples ***

    // --- prints out global "colour"
    function sky() {
        echo("The sky is " + colour);
    }

    // --- changes GLOBALLY the value of colour
    function sea() {
        colour = "wine red";
        echo("The sea is " + colour);
        echo(".. what colour is the sky?");
        sky(); // <-- this now sees "wine red"
    }

    // --- sets (and uses) TWO local colours - 
    // one function-level, the other block-level:
    function grass() {
        var colour = "green";      // a function-level local value
        echo("The grass is " + colour);
        var month = "August";
        if (month === "August") {
            let colour = "golden"; // a block-level local var
            echo("The wheat is " + colour);
        }
        echo("The grass is still " + colour);
        echo(".. and what colour is the sky?");
        sky();       // <-- this now sees "wine red"
    }

    // ***  main program starts here ***
    var colour = "blue"; // <-- "global" variable
    echo(colour);
    sky();
    sea();
    grass();
    echo("Finally, colour is now: " + colour);
    // ^^ colour was changed by the "sea()" function. ^^
}




