import { CV } from './CV.js';
import { CVTemplate } from "./utilities/Interfaces.js";
//import $  from 'jquery';

window.addEventListener("load", () => {
  $.getJSON("./dist/data.json", (data) => {
    showCV(data);
  });
  
});

function showCV(data: CVTemplate) {
  const cv = new CV(data);
  document.title = data.bio.name.toUpperCase();
  cv.getCV(document.body);
}