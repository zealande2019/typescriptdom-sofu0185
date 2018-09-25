// let elementNode = document.getElementById('one');

// elementNode.textContent = "Hallo";

 let listeusund = document.getElementById('listeUsund');
 let newLi = document.createElement('li');
 let newText = document.createTextNode('Sodavand')
 newLi.setAttribute('class','usundt');
newLi.appendChild(newText);
 listeusund.appendChild(newLi);

 console.log(listeusund);