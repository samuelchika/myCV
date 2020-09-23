import ElementCreate from './utilities/ElementCreate.js';
export class Experties {
    constructor(expertiesDetails) {
        this.expertiesDetails = expertiesDetails;
    }
    getExperties() {
        const section = new ElementCreate('SECTION');
        const ul = new ElementCreate('UL');
        ul.setClasses(['row', 'd-block', 'ml-4']);
        this.expertiesDetails.forEach(detail => {
            const li = new ElementCreate('LI');
            //li.setClasses(['col-md-4', 'col-sm-6', 'col-12']);
            li.setElementText(detail);
            ul.setChild(li.getElement());
        });
        section.setElementText('<u>Area of Expertise</u>');
        section.setChild(ul.getElement());
        return section.getElement();
    }
}
