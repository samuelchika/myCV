import { CV } from './CV.js';
//import $  from 'jquery';
window.addEventListener("load", () => {
    $.getJSON("./dist/data.json", (data) => {
        showCV(data);
    });
});
function showCV(data) {
    const cv = new CV(data);
    document.title = data.bio.name.toUpperCase();
    cv.getCV(document.body);
}
