import _ from 'lodash';
import './style.css';
import { LoaderUp } from './pageload';
import { menuPage } from './menupage';
import { aboutPage } from './aboutpage';
import { homePage } from './homepage';
import { contactPage } from './contactpage';

const pageObj = LoaderUp();
pageObj.LoadPage();
createNavBar(pageObj);

function createNavBar(pageObj) {
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    li1.append(homeBtn);
    const li2 = document.createElement('li');
    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About';
    li2.append(aboutBtn);
    const li3 = document.createElement('li');
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    li3.append(menuBtn);
    const li4 = document.createElement('li');
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact Us';
    li4.append(contactBtn);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    pageObj.header.append(ul);
    homeBtn.addEventListener('click', function() {
        pageObj.body.textContent = '';
        homePage(pageObj);
    });
    aboutBtn.addEventListener('click', function() {
        pageObj.body.textContent = '';
        aboutPage(pageObj);
    });
    menuBtn.addEventListener('click', function() {
        pageObj.body.textContent = '';
        menuPage(pageObj);
    });
    contactBtn.addEventListener('click', function() {
        pageObj.body.textContent = '';
        contactPage(pageObj);
    });
}

export { createNavBar };
