import './style.css';
import pizza_png from './pizza.jpg';
const render = function(){
    const mid = document.createElement('div');
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
    Home.classList.add('selected');
    const contact = document.createElement('div');
    contact.textContent='Contact';

    Home.addEventListener('click',()=>{
        Home.classList.add('selected');
        menu.classList.remove('selected');
        contact.classList.remove('selected');
        homerender(mid);
    });
    menu.addEventListener('click',()=>{
        Home.classList.remove('selected');
        menu.classList.add('selected');
        contact.classList.remove('selected');
        menurender(mid);
    });

    contact.addEventListener('click',()=>{
        Home.classList.remove('selected');
        menu.classList.remove('selected');
        contact.classList.add('selected');
        contactrender(mid);
    });
    
    header_content.appendChild(Home);
    header_content.appendChild(menu);
    header_content.appendChild(contact);

    header.appendChild(name);
    header.appendChild(header_content);
    
    content.appendChild(header);

    //const mid = document.createElement('div');
    mid.classList.add('mid');
    const mid_content = document.createElement('div');
    mid_content.classList.add('mid_content');
    mid.appendChild(mid_content);
    content.appendChild(mid);
    homerender(mid);
    //Home.addEventListener('click',homerender(mid));
    
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const github = document.createElement('div');
    github.textContent = 'Copyright © 2022 N3mB0t';
    footer.appendChild(github);
    content.appendChild(footer);
};

const homerender = function (mid){
    //console.log(e);
    mid.replaceChildren();
    const mid_container = document.createElement('div');
    mid_container.classList.add('mid_container');
    const top1 = document.createElement('div');
    top1.textContent='Best pizza in your country';
    mid_container.appendChild(top1);
    const pizza_img = new Image;
    pizza_img.src = pizza_png;
    mid_container.appendChild(pizza_img);

    mid.appendChild(mid_container);
};

const menurender = function(mid){
    mid.replaceChildren();
    const mid_container = document.createElement('div');
    mid_container.classList.add('mid_container_menu');
    const item1=document.createElement('div');
    item1.classList.add('card');
    const item1_head = document.createElement('div');
    item1_head.textContent='Item '
    item1_head.classList.add('item-head');
    const item1_content = document.createElement('div');
    item1_content.textContent = 'Item  ingedients';
    item1.appendChild(item1_head);
    item1.appendChild(item1_content);

    const item2=document.createElement('div');
    item2.classList.add('card');
    const item2_head = document.createElement('div');
    item2_head.textContent='Item '
    item2_head.classList.add('item-head');
    const item2_content = document.createElement('div');
    item2_content.textContent = 'Item ingedients';
    item2.appendChild(item2_head);
    item2.appendChild(item2_content);

    const item3=document.createElement('div');
    item3.classList.add('card');
    const item3_head = document.createElement('div');
    item3_head.textContent='Item '
    item3_head.classList.add('item-head');
    const item3_content = document.createElement('div');
    item3_content.textContent = 'Item ingedients';
    item3.appendChild(item3_head);
    item3.appendChild(item3_content);

    const item4=document.createElement('div');
    item4.classList.add('card');
    const item4_head = document.createElement('div');
    item4_head.textContent='Item '
    item4_head.classList.add('item-head');
    const item4_content = document.createElement('div');
    item4_content.textContent = 'Item ingedients';
    item4.appendChild(item4_head);
    item4.appendChild(item4_content);

    mid_container.appendChild(item1);
    mid_container.appendChild(item2);
    mid_container.appendChild(item3);
    mid_container.appendChild(item4);
    mid.appendChild(mid_container);
};

const contactrender = function (mid){
    //console.log(e);
    mid.replaceChildren();
    const mid_container = document.createElement('div');
    mid_container.classList.add('mid_container');
    const phone=document.createElement('div');
    phone.textContent = 'Phone : xxx-xxx-xxxx'
    phone.classList.add('card');
    const addr=document.createElement('div');
    addr.textContent = 'Address : Unknown Region'
    addr.classList.add('card');
    
    mid_container.appendChild(phone);
    mid_container.appendChild(addr);
    mid.appendChild(mid_container);
};

render();

