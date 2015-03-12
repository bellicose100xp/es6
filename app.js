let count = 0;

let copyTemplate = () => {
    let template = document.querySelector('template');
    let clone = document.importNode(template.content, true);

    clone.querySelector('.expression').textContent = "ultra awesome";
    clone.querySelector('.number-of-times').textContent = ++count;

    document.body.appendChild(clone);
};

document.querySelector('#copy-button').addEventListener('click', copyTemplate, false);

let clearCopies = () => {
    let p = document.querySelectorAll('p');
    console.log(`type of p is ${Object.prototype.toString.call(p)}`);
    for (let i = 0; i < p.length; i++) {

        p[i].parentNode.removeChild(p[i]);

    }
};

document.querySelector('#clear-copies').addEventListener('click', clearCopies, false);

let elementProto = Object.create(HTMLElement.prototype);

elementProto.createdCallback = function () {
    this.innerHTML = '<h1>Comment Section</h1><textarea></textarea><br><button type="submit">Submit</button>';
};

let element = document.registerElement('my-element', {
    prototype: elementProto
});

//let e1 = new element();
let e1 = document.createElement('my-element');
console.log(Object.prototype.toString.call(e1));
document.body.appendChild(e1);

let button_proto = Object.create(HTMLButtonElement.prototype);
console.log(Object.prototype.toString.call(button_proto));
button_proto.createdCallback = function () {
    this.innerHTML = "Extension";
    this.value = "ex value";
    this.style.color = "red";
};

let myButton = document.registerElement('my-button',{
    prototype: button_proto,
    extends : 'button'
});

let myButton1 = document.createElement('button','my-button');
let clearCopyElement = document.querySelector('#clear-copies');
clearCopyElement.parentNode.insertBefore(myButton1, clearCopyElement.nextSibling);




