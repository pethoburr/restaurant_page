function contactPage(pageObj) {
    const someBs = document.createElement('div');
    someBs.textContent = 'dont contact me on no bs';
    pageObj.body.append(someBs);
};

export { contactPage };