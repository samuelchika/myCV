import ElementCreate from './ElementCreate.js';
import { JobTemplate } from './Interfaces.js';

export class Profession {
    constructor(private job: JobTemplate) {}

    public getProfession():HTMLElement {
        const jobDiv = new ElementCreate('DIV');
        const company = this.job.companyName;
        const jobTitle = this.job.title;

        const h2 = new ElementCreate('H4');
        h2.setElementText(company);

        const date = `${this.job.startDate} ${((this.job.endDate) && (' - ' + this.job.endDate))}`;
        //build the UL tag for the list of Contributions
        const ul = new ElementCreate('UL');
        ul.setClass('ml-5')
        this.job.contribution.forEach( contributions => {
            const li = new ElementCreate('LI');
            li.setElementText(contributions);
            ul.setChild(li.getElement());
        });

        const pDescription = new ElementCreate('P');
        pDescription.setClasses(['text-justify']);
        pDescription.setElementText(this.job.description);

        //different divs needed.
        const divA = new ElementCreate('DIV');
        divA.setClass('row');
        const divB = new ElementCreate('DIV');
        divB.setClasses(['col-md-8', 'col-sm-12']);
        const divC = new ElementCreate('DIV');
        divC.setClasses(['col-md-4', 'col-sm-12', 'text-right']);
        
        divB.setChild(h2.getElement());
        divB.setElementText(jobTitle);
        divC.setElementText(date);

        divA.setChildren([
            divB.getElement(),
            divC.getElement()
        ]);
        
        const p = new ElementCreate('P');
        p.setElementText('Key Contributions:');

        jobDiv.setChildren([
            divA.getElement(),
            pDescription.getElement(),
            p.getElement(),
            ul.getElement()
        ]);

        return jobDiv.getElement();
    }
}