/*
 *  This JavaScript file has all the code for Chapter 8
 */
'use strict';

function showBirthday() {
    var response = document.getElementById("txtBirthday").value;
    var birthday = new Date(response);
    document.getElementById("lblShowBirthday").innerHTML =
        "You were born on: " + birthday.toDateString();
}

var people = ["fred", "barney", "dino", "bam-bam", "wilma", "betty"];
function showArray() {
    people.push("jane");
    people.push("jim");
    document.getElementById("lblFamilyNames").innerHTML = people.join(', ');
}

function sortArray() {
    document.getElementById("lblSorted").innerHTML = people.sort().join(', ');
}

function reverseArray() {
    document.getElementById("lblReversed").innerHTML = people.reverse().join(', ');
}

var numbers = [7, 4, 100, 1, 10, 34, 2, 20, 300];
function showNumArray() {
    document.getElementById("lblNumbers").innerHTML = numbers.join(', ');
}

function sortNumArray() {
    document.getElementById("lblSortedNumbers").innerHTML =
        numbers.sort(function (a, b) { return a - b; }).join(', ');
}

function reverseNumArray() {
    document.getElementById("lblReversedNumbers").innerHTML =
        numbers.reverse(function (a, b) { return b - a; }).join(', ');
}

// First, here's the "Java-like" way of writing a function ("Statement syntax"):
// function Employee(fname, lname, postCode) {
//    this.fname = fname;
//    this.lname = lname;
//    this.postCode = postCode;

//    this.fullName = function () {
//        return this.fname + " " + this.lname;
//    };

//    this.toString = function () {
//        return this.fname + " " + this.lname + " " + this.postcode;
//    };
//}


// Now here's the alternative JavaScript way ("Expression syntax"):

var Employee = function (fname, lname, postCode) {
    this.fname = fname;
    this.lname = lname;
    this.postCode = postCode;

    this.fullName = function () {
        return this.fname + " " + this.lname;
    };

    this.toString = function () {
        return this.fname + " " + this.lname + " " + this.postCode;
    };
};

var empList = [];
function createEmployee() {
    //var emp = new Employee("jim", "smith", "HR1 2TD");
    //empList.push(emp);
    var emp = new Employee();
    emp.fname = document.getElementById("txtFirstName").value;
    emp.lname = document.getElementById("txtLastName").value;
    emp.postCode = document.getElementById("txtPostCode").value;
    emp.mojo = true;
    empList.push(emp);
    document.getElementById("lblOutput").innerHTML = "<strong>" + emp.fullName() + "</strong> added to list of employees";
    document.getElementById("lblAllEmployees").innerHTML = "<h4>All Employees in the Array:</h4>" + disco(empList);
    document.getElementById("lblOneEmployee").innerHTML = "<h4>Details of just the last Employee, including functions and Expando Properties:</h4>" + disco(emp);
}

/*
 * This function discovers all the key:value pairs of 
 * any object that you give it.
 */
function disco(ob) {
    var s = "";
    for (var x in ob) 
        // Comment this next line in if you only want to see data - not functions, and nothing from the prototype chain. See Crockford p23, 24
        //if (typeof ob[x] !== 'function') 
            s += "<strong>" + x + "</strong>" + "  =>  " + ob[x] + "<br />";
    return s;
    // The loop given above will call toString(). 
    // If you don't have your own toString() method in your object, you'll get the 
    // JavaScript built-in from the prototype.
    // This will return: [object Object]
}

function showDoc() {
    document.getElementById("lblNav").innerHTML = disco(document);
}

function showNav() {
    document.getElementById("lblNav").innerHTML = disco(navigator);
}

function clearlbl() {
    document.getElementById("lblNav").innerHTML = "";
}



// This next function works, but is cumbersome...
//function displayEmployees() {
//    var names = [];
//    for (var key in empList) {
//        var e = empList[key];
//        names.push(e.fullName());
//    }
//    document.getElementById("lblAllEmployees").innerHTML = names;
//}

function createProduct() {
    var product = new Object();
    product.id = document.getElementById("txtProductID").value;
    product.name = document.getElementById("txtProductName").value;
    document.getElementById("lblOutput2").innerHTML = "<strong>" + product.name + "</strong> created";
}

function daysTillXmas() {
    // -- Current date & year
    var now = new Date(), thisYear = now.getFullYear();

    // -- Christmas morning for this year:
    var xmasDay = new Date(thisYear, 11, 25, 0, 0, 0, 0);
    var toGo = xmasDay - now;  // <-- difference in milliseconds:
    var msec = 24 * 60 * 60 * 1000;  //  <-- one day in milliseconds
    var numDays = Math.floor(toGo / msec);
    document.getElementById("lblDaysTillXmas").innerHTML = "Christmas in <strong>" + numDays + "</strong> days!";
}

function daysOld() {
    // -- Current date & milliseconds in a year:
    var now = new Date(), msec = 24 * 60 * 60 * 1000;
    // -- for someone born lunchtime on 1st of April, 1970:
    // var birthday = new Date("April 1, 1970 12:00:00");

    var response = document.getElementById("txtBirthday2").value;
    var birthday = new Date(response);

    var ageIn_msec = now - birthday;  // <-- difference in ms
    // == write it out in days, rather than milliseconds:
    var numDaysOld = Math.floor(ageIn_msec / msec);

    document.getElementById("lblDaysOld").innerHTML =
        "You are: <strong> " + numDaysOld.toLocaleString() + "</strong> days old!";
}

function minsInaWeek() {
    var mins = 60 * 37.5;
    document.getElementById("lblMinsInaWeek").innerHTML =
        "There are: <strong> " + mins.toLocaleString() + "</strong> minutes in a working week";
}

function smokingTime() {
    var sBreak = 5 * 2 * 365; // <-- 5 mins * twice *  365 days

    document.getElementById("lblSmokingTime").innerHTML =
        "In one year, you will have smoked for: <strong> " + sBreak.toLocaleString() + "</strong> minutes, which is: <strong> " +
        Math.round(sBreak / 60) + "</strong>  hours, which is about: <strong> " +
        Math.round(sBreak / (60 * 24)) + "</strong> whole days non-stop";

}

