import ElementCreate from "./utilities/ElementCreate";
export class Portfolio {
    constructor(link) {
        this.link = link;
    }
    getPortfolio() {
        const section = new ElementCreate('SECTION');
        const pPortfolio = new ElementCreate('P');
        pPortfolio.setElementText('Social media link and projects are available on my ');
        const a = new ElementCreate('A');
        if (this.link) {
            a.setAttribute({
                "name": "href",
                "value": `${this.link}`
            });
        }
        pPortfolio.setChild(a.getElement());
        section.setChild(pPortfolio.getElement());
        return section.getElement();
    }
}
