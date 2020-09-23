import ElementCreate from './utilities/ElementCreate.js';
import { Education } from './utilities/Education.js';
import { EducationTemplate } from './utilities/Interfaces.js';

export class Educations {
    constructor(private education: EducationTemplate[]) {}

    getEducations():HTMLElement {
        const section = new ElementCreate('SECTION');
        section.setElementText('<h2><u>Education</u></h2>');
        this.education.forEach(element => {
            const education = new Education(element);
            section.setChild(education.getEducation());
        });
        return section.getElement();        
    }
}