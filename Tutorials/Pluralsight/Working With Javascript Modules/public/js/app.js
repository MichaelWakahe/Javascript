import getSessions from './sessionRepository.js';
import { sessionTemplate } from './sessionRepository.js';
// import getSessions, { sessionTemplate } from './sessionRepository.js'; // yet another alternative
// import * as template from './sessionRepository.js'; // yet another alternative
// import { sessionTemplate as template} from './sessionRepository.js'; // yet another alternative

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });

