const sessionURL = 'sessions.json';

let sessionList = [];

function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response
            resolve(sessionList);
        };
        oReq.open('GET', sessionURL, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

export { getSessions as default };
// when 'default' is used, you can import the function into another module without needing to know the name.
// For example: import anyName from './sessionRepository';
// Here 'anyName' will have the value of 'getSessions'.
    
export { sessionTemplate } from './template.js';
