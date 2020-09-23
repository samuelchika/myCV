import ElementCreate from './utilities/ElementCreate.js';
import { Education } from './utilities/Education.js';
export class Educations {
    constructor(education) {
        this.education = education;
    }
    getEducations() {
        const section = new ElementCreate('SECTION');
        section.setElementText('<h2><u>Education</u></h2>');
        this.education.forEach(element => {
            const education = new Education(element);
            section.setChild(education.getEducation());
        });
        return section.getElement();
    }
}
