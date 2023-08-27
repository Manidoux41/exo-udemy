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
        let link = document.createElement('a')
        let slash =document.createElement('a');
        slash.style.cursor = "none";
        slash.innerText = '/'
        slash.style.paddingRight = "18px";
        link.href = '#';
        link.style.paddingRight = "18px"
        link.innerText = item;
        if (menuArray.indexOf(item) < 1 ) {
            nav.append(link)
            nav.append(slash)            
        } else {            
            nav.append(link)
        }
    } 
}
createMenu(menus);
sousheader.appendChild(nav);

let content = document.createElement('div');
content.style.padding = "25px 45px"
let paragraphContent = document.createElement("p");
paragraphContent.innerText = "Ceci est un paragraph créé avec Javascript !"
content.append(paragraphContent)




document.body.appendChild(header);
document.body.appendChild(sousheader);
document.body.appendChild(content);
