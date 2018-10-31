/*
 * Chapter 7 - ES6+
 * 
 */
'use strict';

function blockLevelScoping1() {
    // This fn just demos "let" block-level scoping
    // All browsers can do this without babel

    let num1 = 3;
    let flag = true;
    while (flag) {
        let num1 = 7;
        flag = false;
    }
    let div = document.getElementById('container1');
    div.innerHTML = 'num1 = ' + num1;
    // If the browser doesn't understand "let", this last line 
    // will say num1 = 7.
    // If the browser understands "let", it will give no error, 
    // just say num1 = 3
}


function blockLevelScoping2() {
    // This fn also just demos let block-level scoping
    // IE11 *can't* do this without babel

    var div, container = document.getElementById('container2');
    for (let i = 0; i < 5; i++) {
        div = document.createElement('div');
        div.onclick = function () {
            alert('This is div #' + i);
        };

        div.innerText = 'div number: ' + i;
        container.appendChild(div);
    }
}

function templateStrings() {
    var articleTitle = "Tim's Article 1";
    var articleBody = "<p>Tim's Article Body</p>  <p>Vel dapibus a, blandit quis erat vivamus elementum aliquam luctus etiam fringilla pretium sem vitae sodales mauris id nulla est praesent laoreet, metus vel auctor aliquam, eros purus vulputate leo, eget consequat neque quam id tellus duis ultricies tempor tortor, vitae dignissim ligula mattis nec in hac habitasse platea dictumst ut arcu enim, dictum quis ultrices id, sagittis eget nulla sed nunc mi, congue ut ultricies ac, varius a eros donec porttitor, libero fermentum fringilla laoreet, eros arcu sodales ante, ut dictum risus lectus vel quam integer ultricies, nunc eget elementum euismod, orci enim vestibulum orci, nec suscipit urna odio et tellus suspendisse suscipit orci sit amet sem venenatis nec lobortis sem suscipit nullam nec imperdiet velit mauris eu nisi a felis imperdiet porta at ac nulla vivamus faucibus felis nec dolor pretium eget pellentesque dolor suscipit maecenas vitae enim arcu, at tincidunt nunc pellentesque eleifend vulputate lacus, vel semper.</p >";

    document.getElementById('lblTemplateStrings').innerHTML =
        `
        <section>
        <header>
            <h1>Template Strings</h1>
        </header>
        <article>
            <h2>${articleTitle}</h2>
            ${articleBody}
        </article>
    </section>
    <footer>
        <p>
            &copy; ${new Date().getFullYear()} | Inserted using ES6 a Template String
        </p>
    </footer>
        `;
}

function defaultParam() {
    // whatCountry('belgium');
    whatCountry();
}

function whatCountry(country = 'uk') {
    document.getElementById('lblCountry').innerHTML = country;
}

function HelloPerson() {
    // 1st with no arg:
    hello1();

    // Now with 2 args:
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;

    hello2(firstName, lastName);

    // Finally, takes 2 args and returns a value
    var greeting = hello3(firstName, lastName);
    document.getElementById('lblFatArrow3').innerHTML = greeting;
}

// Fat Arrow with no args:
var hello1 = () => document.getElementById('lblFatArrow1').innerHTML = 'Hello!';

// Fat Arrow with 2 args:
var hello2 = (fname, sname) => document.getElementById('lblFatArrow2').innerHTML = `Hello ${fname} ${sname}!`;

// Fat Arrow with 2 args and a return value:
var hello3 = (fname, sname) => {
    return `Hello ${fname} ${sname}!`;
};

var destructuring = () => {
    var sandwich = {
        bread: 'granary',
        meat: 'ham',
        cheese: 'emmental',
        fillings: ['lettuce', 'tomato', 'cucumber', 'mayo']
    };

    var { bread, cheese } = sandwich;

    document.getElementById('lblDestructuring').innerHTML = `${bread} ${cheese}`;

    //var fname = 'tim';
    //var sname = 'finch';
    //var person = { fname, sname };
    //document.getElementById('lblDestructuring').innerHTML = `${person.fname} ${person.sname}`;

};

const spread = () => {
    const list1 = ['one', 'two', 'three', 'four', 'five'];

    const [first] = list1;
    const [last] = [...list1].reverse();
    const [firstone, ...rest] = list1;

    document.getElementById('lblSpreadOriginal').innerHTML = `Original List = <strong>${list1}</strong>`;
    document.getElementById('lblSpreadFirstElement').innerHTML = `First = <strong>${first}</strong>`;
    document.getElementById('lblSpreadLastElement').innerHTML = `Last = <strong>${last}</strong>`;
    document.getElementById('lblSpreadFirstThenRest').innerHTML = `First = <strong>${firstone}</strong>, Rest = <strong>${rest}</strong>`;
    document.getElementById('lblSpreadFinal').innerHTML = `The original list is unchanged: <strong>${list1}</strong>`;

};

// This last function shows how to use raw javascript and promises instead of jquery
// to call the RandomUser Web Service
function getRandomUser() {

    var promise =
        new Promise((resolves, rejects) => {
            const apiURL = 'https://randomuser.me/api/';
            const request = new XMLHttpRequest();
            request.open('GET', apiURL);
            request.onload = () =>
                (request.status === 200) ?
                    resolves(JSON.parse(request.response).results) :
                    rejects(Error(request.statusText));
            request.onerror = (err) => rejects(err);
            request.send();
        });

    promise.then(
        gotUser,
        // members => console.log(members),
        err => console.error(
            new Error('Cant load random user'))
    );
}

function gotUser(user) {
    var thisUser = user[0];

    document.getElementById('randomUser').innerHTML =

        '<img id=userPicture src=' + thisUser.picture.large + ' /><br /><br />' +
        thisUser.name.title + ' ' +
        thisUser.name.first + ' ' +
        thisUser.name.last + '<br />' +
        thisUser.location.street + '<br />' +
        thisUser.location.city + '<br />' +
        thisUser.nat + '<br />' +
        thisUser.email + '<br />' +
        'Username: ' +
        thisUser.login.username + '<br /><br />';
}

// Alternative syntax (needs some work....)

//class HttpClient {
//    static get(url, headerOptions) {
//        return fetch(url, {
//            method: 'GET',
//            cache: 'no-cache',
//            headers: headerOptions,
//            mode: 'cors',
//        }).then((res) => {
//            // promise
//            return new Promise((resolve, reject) => {
//                if (res.ok) {
//                    console.log(`Response Status: ${res.status}`);
//                    resolve(res.json());
//                } else {
//                    reject(new Error(res.statusText));
//                }
//            });
//        });
//    }

//    static post(url, body, headerOptions) {
//        return fetch(url, {
//            method: 'POST', // *GET, POST, PUT, DELETE, etc.
//            body: JSON.stringify(body),
//            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//            headers: headerOptions,
//            mode: 'cors', // no-cors, cors, *same-origin
//            redirect: 'follow', // manual, *follow, error
//            referrer: 'no-referrer', // *client, no-referrer
//        });
//    }
//}
