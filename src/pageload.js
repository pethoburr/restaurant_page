function LoaderUp() {
    const content = document.getElementById('content');
    const header = makeHeader();
    const body = makeBody();
    const footer = makeFooter();
    console.log(content, header, body, footer);
    return { content, header, body, footer,
    LoadPage: function () {
        content.append(header);
        content.append(body);
        content.append(footer);
    } }; 
};

function makeHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = "Mikey's Munchies";
    return header.appendChild(h1);   
};

function makeBody () {
    const body = document.createElement('div');
    body.textContent = 'shabba ranks';
    return body;
};

function makeFooter() {
    const footer = document.createElement('footer');
    const h3 = document.createElement('h3');
    h3.textContent = 'copyright by dw bout it u fed ass nigga';
    return footer.appendChild(h3);
}
export { LoaderUp };