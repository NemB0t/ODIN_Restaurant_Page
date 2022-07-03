import './style.css';

const render = function(){
    const content= document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    const name = document.createElement('div');
    name.textContent='NemPizza';
    name.classList.add('name');

    const header_content = document.createElement('div');
    header_content.classList.add('header-content');
    const menu = document.createElement('div');
    menu.textContent='Menu';
    const Home = document.createElement('div');
    Home.textContent='Home';
    const contact = document.createElement('div');
    contact.textContent='Contact';
    header_content.appendChild(Home);
    header_content.appendChild(menu);
    header_content.appendChild(contact);

    header.appendChild(name);
    header.appendChild(header_content);
    
    content.appendChild(header);

    const mid = document.createElement('div');
    mid.classList.add('mid');
    const mid_content = document.createElement('div');
    mid_content.classList.add('mid_content');
    mid.appendChild(mid_content);
    content.appendChild(mid);
    homerender(mid);
    
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const github = document.createElement('div');
    github.textContent = 'Copyright © 2022 N3mB0t';
    footer.appendChild(github);
    content.appendChild(footer);
};

const homerender = function (mid){
    const mid_container = document.createElement('div');
    mid_container.classList.add('mid_container');
    const top1 = document.createElement('div');
    top1.textContent='Best pizza in your country';
    mid_container.appendChild(top1);
    

    mid.appendChild(mid_container);
};

render();

