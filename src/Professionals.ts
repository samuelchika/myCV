import ElementCreate from './utilities/ElementCreate.js';
import { Profession } from './utilities/Profession.js';
import { JobTemplate } from './utilities/Interfaces.js';

export class Professionals {
    constructor(private profession: JobTemplate[]) {}

    getProfessionals():HTMLElement {
        const section = new ElementCreate('SECTION');
        section.setElementText('<h2><u>Professions</u></h2>');
        this.profession.forEach( profession => {
            const job = new Profession(profession);
            section.setChild(job.getProfession());
        });
        return section.getElement();
    }
}