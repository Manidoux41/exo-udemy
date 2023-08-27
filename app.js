document.querySelector('#a-supprimer').remove();
let body = document.body;
body.style.margin = '0';
body.style.padding = '0';
body.style.boxSizing = 'border-box';
body.style.fontFamily = 'Arial';

let header = document.createElement('header')
header.style.backgroundColor = '#e3b04b';
header.style.width = '100%';
header.style.margin = '0';
header.style.padding = '15px 0';
let titre = document.createElement('h1');
titre.style.fontWeight = '300';
titre.style.color = 'white';
titre.style.textAlign = 'center';
titre.style.fontSize = '50px';
titre.textContent = 'Bienvenue';
header.appendChild(titre);


document.body.appendChild(header);
