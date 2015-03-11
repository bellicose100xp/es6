import * as a from './module/note.js'

console.log(`note is: ${a.default.note} and tape is: ${a.default.tape}`);

let [x,y] = [2, 3];

console.log(`x is ${x} and y is ${y}`);

let doWork = () => [y, x];

[x,y] = doWork();

console.log(`x is ${x} and y is ${y}`);

let doObjectWork = () => {
    return {
        first: "scott",
        second: "Allen",
        handles: {
            twitter: "OdeToCode"
        }
    }
};

let {
        first: firstName,
        handles: { twitter: twitterName }
    } = doObjectWork();

console.log(`First Name: ${firstName} & Twitter Account: ${twitterName}`);