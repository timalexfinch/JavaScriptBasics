/*
 *  Quick library of functions that can be called
 *   from any other script.
 * 
 */


// -- quick cheat to write out text:
function type(text) { document.write(text); }

// -- quick cheat to display text with a newline:
function echo(text) { type(text + "<br>"); }

// -- and to perform an alert.
function yell(text) { alert(text); }

/*
 * Now the chapter 10 code:
 */

// -- let's create an alias for document.getElementById()
function $(obj) { return document.getElementById(obj); }

// =====================
// -- just writes something out to the logbox to show activity
function report(info) {
    $('logbox').innerHTML = info;
}
// =====================

// -- just colours the legend to illustrate which colour was chosen
function style(colour) {
    $('tone').innerHTML = colour + "<br>";
}


function heatRoom() {
    function opinion(text) { $('room').innerHTML = text; }

    // --
    var amount = $('myform').temperature.value;
    if (amount < 18) {
        opinion(amount + "? oohh.. bit nippy, that...");
    }
    else if (amount > 20) {
        opinion("Phew! " + amount + " is bit warm, innit?");
    }
    else {
        opinion("Ahhh..." + amount + " is just right!");
    }
}

/*
    qtyInk.fillStyle=greenScale;
    qtyInk.fillRect(0,0,qtyPaper.width,qtyPaper.height);
*/

function update_qty(level) {
    // -- Using CANVAS to do some fancy scales
    var qtyPaper = $('quantity_scale');
    var pen = qtyPaper.getContext('2d');

    // -- how much is each "tick" spaced apart?
    var l = 0, xstep = Math.floor(qtyPaper.width / 10), ystep = Math.floor(qtyPaper.height / 10);

    // -- create a colour gradient
    var greenScale = pen.createLinearGradient(0, 0, 0, qtyPaper.height);
    // -- now set colour stops:
    greenScale.addColorStop(0, "white");
    greenScale.addColorStop(1, "green");
    pen.lineWidth = 18;
    pen.strokeStyle = greenScale;

    // -- clear previous details then draw ticks up to this level
    pen.clearRect(0, 0, qtyPaper.width, qtyPaper.height);
    for (l = 0; l < level; l++) {
        pen.beginPath();      // start a new path.
        pen.moveTo(l * xstep, qtyPaper.height - (l * ystep));    // move to the top of the line
        pen.lineTo(l * xstep, qtyPaper.height);    // draw down to the base
        pen.closePath();
        pen.lineCap = 'round'; // -- can't get this to work!
        pen.stroke();         // ink it in
    }
}


// ########## now the event handlers ####################
function define_handlers() {
    // ++++ checkbox handlers +++++++++++++++++++++++++
    var theForm = $("myform");

    theForm.elements["milk"].onchange = function () {
        $('milk_sugar').innerHTML = ("got milk? " + theForm.elements["milk"].checked);
    };

    theForm.elements["sugar"].onchange = function () {
        $('milk_sugar').innerHTML = ("Sweet is.. " + theForm.elements["sugar"].checked);
    };

    // +++ handlers for first set of radio buttons (colour picker)
    var colourButton = $('myform').elements["mycolour"];

    colourButton[0].onchange = function () {
        $('tone').style.color = colourButton[0].value;
    };

    colourButton[1].onchange = function () {
        $('tone').style.color = colourButton[1].value;
    };

    colourButton[2].onchange = function () {
        $('tone').style.color = colourButton[2].value;
    };

    // ++++ second set of radio buttons +++++++++++++++++++++++++
    var drinkButtons = $('myform').elements["mydrink"];

    // -- obtain the "value" from the selected radio button instead of position.
    function display(activeButton) {
        $('drink').innerHTML = ("Ordered a drink of " + activeButton.value);
    }

    // -- loop through and bind an anonymous function to each button
    for (var b = 0; b < drinkButtons.length; b++) {
        drinkButtons[b].onchange = function () { display(this); };
    }

    // ++++ Button to lock/unlock memo field +++++++++++++++++++++++++
    $('lockButton').onclick = function () {
        if ($('memo').disabled)  // +++ unlock actions here
        {
            // -- disable text area and change style to illustrate
            $('memo').disabled = false;
            $('memo').className = "enabled";

            // -- reflect this in the button
            $('lockButton').className = "locked";
            $('lockButton').innerHTML = "Lock Field";
        }
        else  // +++ lock actions here
        {
            // -- enable text area and change style to illustrate
            $('memo').disabled = true;
            $('memo').className = "disabled";

            // -- reflect this in the button
            $('lockButton').className = "unlocked";
            $('lockButton').innerHTML = "Unlock Field";
        }
    };

    // ++++ update character count with the "length" of the memo field +++++++++++++++++++++++++
    $('memo').oninput = function () { $('letter_count').innerHTML = $('memo').value.length; };
    // -- note: use $('memo').onkeydown if .oninput is unsupported.


    // ++++ update progress bar as password is typed +++++++++++++++++++++++++
    $('myform').elements["pass"].oninput = function () {
        var passLength = $('myform').pass.value.length;
        (passLength < 8) ? $('security').value = passLength / 8 : $('security').value = 1;
    };

    // ++++ show scale as the quantity spinner is changed +++++++++++++++++++++++++
    $('myform').elements["qty"].onchange = function () { update_qty($('myform').elements["qty"].value); };

    // ++++ update status as slider is changed +++++++++++++++++++++++++
    $('myform').elements["temperature"].onchange = heatRoom;


    // -- colour picker
    $('myform').elements["shade"].onchange = function () {
        $('choice').innerHTML = "You picked: " + $('myform').elements["shade"].value;
    };

    // -- Using CANVAS to do some fancy colour scales
    var thermPage = $('warmth_scale');
    var thermInk = thermPage.getContext('2d');

    var heatScale = thermInk.createLinearGradient(0, 0, thermPage.width, 0);
    // -- now set colour stops:
    heatScale.addColorStop(0, "blue");
    heatScale.addColorStop(0.5, "yellow");
    heatScale.addColorStop(1, "red");

    thermInk.fillStyle = heatScale;
    thermInk.fillRect(0, 0, thermPage.width, thermPage.height);

}

// #### finally register all these events against the body loading ###
if (window.addEventListener) // <-- DOM Level2
    window.addEventListener("load", define_handlers, false);
else if (window.attachEvent) // <-- IE workaround only
    window.attachEvent("onload", define_handlers);

