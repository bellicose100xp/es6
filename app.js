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
    console.log(typeof p);
    console.log(p.length);
    console.log(p);

    for(let i=0; i< p.length; i++) {
     p[i].parentNode.removeChild(p[i]);
    }
};

document.querySelector('#clear-copies').addEventListener('click', clearCopies, false);
