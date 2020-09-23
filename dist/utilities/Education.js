import ElementCreate from './ElementCreate.js';
export class Education {
    constructor(edu) {
        this.edu = edu;
    }
    getEducation() {
        const eduDiv = new ElementCreate('DIV');
        const summary = new ElementCreate('DIV');
        const schoolDiv = new ElementCreate('DIV');
        const dateDiv = new ElementCreate('DIV');
        summary.setClasses(['row']);
        schoolDiv.setClasses(['col-sm-12', 'col-md-10']);
        dateDiv.setClasses(['col-sm-12', 'col-md-2']);
        const course = new ElementCreate('H4');
        const schoolName = new ElementCreate('P');
        schoolName.setClass('summaryDiv');
        dateDiv.setElementText(this.edu.date);
        dateDiv.setClass('text-right');
        course.setElementText(this.edu.title);
        schoolName.setElementText(this.edu.schoolName);
        const learningOutcomes = new ElementCreate('UL');
        learningOutcomes.setClasses(['ml-5', 'w-75']);
        this.edu.details.forEach(outcome => {
            const li = new ElementCreate('LI');
            li.setElementText(outcome);
            learningOutcomes.setChild(li.getElement());
        });
        schoolDiv.setChildren([
            course.getElement(),
            schoolName.getElement()
        ]);
        summary.setChildren([
            schoolDiv.getElement(),
            dateDiv.getElement()
        ]);
        eduDiv.setChildren([
            summary.getElement(),
            learningOutcomes.getElement()
        ]);
        return eduDiv.getElement();
    }
}
