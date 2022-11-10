function aboutPage(pageObj) {
    const someBs = document.createElement('div');
    someBs.textContent = 'some more bs';
    pageObj.body.append(someBs);
};

export { aboutPage };