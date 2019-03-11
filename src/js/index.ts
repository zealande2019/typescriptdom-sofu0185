//Her skal du skrive din typescriptkode

let element1: HTMLElement = document.getElementById('1');
let elements1: HTMLCollectionOf<Element> = document.getElementsByClassName('usundt');

for (let i = 0; i  < elements1.length; ++i) {
    document.getElementById('listeUsund').appendChild(elements1[0]);
    
}

document.getElementById('2').setAttribute('hidden', 'true');

let parentToElement1: HTMLElement = document.getElementById('2').parentElement;

let newElement: HTMLElement =  document.createElement('li');
newElement.setAttribute('class', 'usundt');
newElement.innerText = 'Sodavand';

parentToElement1.appendChild(newElement);

let liste: HTMLElement = document.getElementById('liste');
let newElement2: HTMLElement = document.createElement('li');
newElement2.setAttribute('class', 'sundt');
newElement2.innerText = 'Mel';

liste.insertBefore(newElement2, liste.children[0]);

let newElement3: HTMLElement = document.createElement('li');
newElement3.setAttribute('class', 'sundt');
newElement3.innerText = 'Mælk';
liste.children[1].insertAdjacentElement('afterend', newElement3);



document.getElementById('butn').addEventListener('click', function()
{
    let thing: string = document.getElementById('name').innerText;
    let type: string = document.getElementById('type').innerHTML;
    
    let newElement3: HTMLElement = document.createElement('li');
    newElement3.setAttribute('class', type);
    newElement3.innerText = thing;
    document.getElementById('liste').appendChild(newElement3);
});