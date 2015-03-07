/**
 * Created by HSO on 3/3/15.
 */

//let add = (x,y) => x+y;
//document.write(add(5,7));
//console.log(add(4,2));

var done = setTimeout(function () {
    return 9;
}, 3000);

//Promises
var promise = new Promise(function (resolve, reject) {
reject(Error('Oh Nooooo!'));
});

promise.then(function (data) {
    console.log(data);
}, function (error) {
    console.log(error);
});

let first = "bellicose";
let second = "agnostic";


var button = document.createElement('button');
button.textContent = first;
document.body.appendChild(button);