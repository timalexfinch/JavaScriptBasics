window.onload = function () {
    document.getElementById("rdoMale").onchange = function () {
        document.getElementById("gender").innerHTML =
            "Male?" + this.checked;
    };
    document.getElementById("rdoFemale").onchange = function () {
        document.getElementById("gender").innerHTML =
            "Female?" + this.checked;
    };
    document.getElementById("rdoOther").onchange = function () {
        document.getElementById("gender").innerHTML =
            "Other?" + this.checked;
    };
    document.getElementById("milk").onchange = function () {
        document.getElementById("milk_sugar").innerHTML =
            "Got Milk?" + this.checked;
    };
    document.getElementById("sugar").onchange = function () {
        document.getElementById("milk_sugar").innerHTML =
            "Got Sugar?" + this.checked;
    };
};