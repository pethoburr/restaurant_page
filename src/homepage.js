import { LoaderUp } from './pageload';
import { createNavBar } from './index';
import { some } from 'lodash';

function homePage(pageObj) {
    const someBs = document.createElement('div');
    someBs.textContent = 'some bs';
    pageObj.body.append(someBs);
};

export { homePage };