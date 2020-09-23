import ElementCreate from './utilities/ElementCreate.js';
import { CVTemplate } from './utilities/Interfaces.js';
import { Bio } from './Bio.js';
import { Educations } from './Educations.js';
import { Experties } from './Experties.js';
import { License } from './License.js';
import { Professionals } from './Professionals.js';
import { Projects } from "./Projects.js";

export class CV {
    constructor(private cvDetails: CVTemplate) {}

    getCV(rootElement: HTMLElement):void {
        const section = new ElementCreate("SECTION");
        const bio = new Bio(this.cvDetails.bio);
        const educations = new Educations(this.cvDetails.educations);
        const experties = new Experties(this.cvDetails.expertises);
        const license = new License(this.cvDetails.license);
        const professions = new Professionals(this.cvDetails.professions);
        const project = new Projects(this.cvDetails.projects);

        section.setClasses([
            'row', 'd-block', 'p-3', 'w-100'
        ]);
        section.setChild(bio.getBio());
        section.setChild(experties.getExperties());
        section.setChild(professions.getProfessionals());
        section.setChild(educations.getEducations());
        section.setChild(license.getLicense());
        section.setChild(project.getProjects());

        rootElement.appendChild(section.getElement());
        //console.log(rootElement);
        
    }
}