import ElementCreate from './utilities/ElementCreate.js';
import { Profession } from './utilities/Profession.js';
export class Professionals {
    constructor(profession) {
        this.profession = profession;
    }
    getProfessionals() {
        const section = new ElementCreate('SECTION');
        section.setElementText('<h2><u>Professions</u></h2>');
        this.profession.forEach(profession => {
            const job = new Profession(profession);
            section.setChild(job.getProfession());
        });
        return section.getElement();
    }
}
