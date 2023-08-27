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

let sousheader = document.createElement('div');
sousheader.style.backgroundColor = '#abdbe3';
sousheader.style.padding = '55px'
let nav = document.createElement('nav');
nav.style.display = "flex";

let menus = ['Accueil', 'Une autre page']

function createMenu(menuArray) {
    for (const item of menuArray) {
        if (menuArray.indexOf(item) < 1 ) {
            let link = document.createElement('a')
            let slash =document.createElement('a');
            slash.innerText = '/'
            slash.style.paddingRight = "18px";
            link.href = '#';
            link.innerText = item;
            link.style.paddingRight = "18px"
            nav.append(link)
            nav.append(slash)
            
        } else {
            let link = document.createElement('a')
            link.href = '#';
            link.innerText = item;
            link.style.paddingRight = "18px"
            nav.append(link)
        }
    } 
}

createMenu(menus);

sousheader.appendChild(nav);



document.body.appendChild(header);
document.body.appendChild(sousheader);
