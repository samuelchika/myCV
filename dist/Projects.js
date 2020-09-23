import ElementCreate from "./utilities/ElementCreate.js";
export class Projects {
    constructor(projects) {
        this.projects = projects;
    }
    getProjects() {
        const section = new ElementCreate('SECTION');
        section.setClass('row');
        const h2 = new ElementCreate('H2');
        h2.setElementText('<u>Projects</u>');
        h2.setClass('col-12');
        const ul = new ElementCreate('UL');
        ul.setClass('ml-5');
        this.projects.forEach(project => {
            ul.setChild(this.addProject(project));
        });
        section.setChildren([h2.getElement(), ul.getElement()]);
        return section.getElement();
    }
    addProject(project) {
        const li = new ElementCreate('LI');
        const a = new ElementCreate('A');
        a.setElementText('View Project');
        li.setElementText(`${((project.name) && (project.name))} ${((project.year) && (' - ' + project.year))}  ${((project.url)) && (' - ')}`);
        if (project.url) {
            a.setAttribute({
                "name": "href",
                "value": `${project.url}`
            });
            li.setChild(a.getElement());
        }
        return li.getElement();
    }
}
