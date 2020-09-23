import ElementCreate from './utilities/ElementCreate.js';
import { BioTemplate, FontAwesome } from './utilities/Interfaces.js';

export class Bio {
    constructor (private bio: BioTemplate) {}

    private leftDiv(): HTMLElement {
        const left = new ElementCreate('SECTION');
        const h2 = new ElementCreate('H2');
        const name = this.bio.name.toUpperCase();
        const jobTitle: string = this.bio.jobTitle;
        left.setClasses(['col-sm-12','col-md-6']);
        h2.setElementText(name);
        left.setChild(h2.getElement());
        left.setElementText(jobTitle);

        return left.getElement();
    }

    private rightDiv():HTMLElement {
        const right = new ElementCreate('SECTION');
        right.setClasses(['col-sm-12', 'col-md-6', 'text-right']);
        const email: string = this.bio.email;
        const address: string = this.bio.address;
        const phone: string = this.bio.phone.toString();
        const linkedLink:string = this.bio.linkedIn;

        const hr = new ElementCreate('HR');

        // 3 Span is used for the address, phone and email, linkedIn
        const spanA = new ElementCreate('DIV');
        const spanB = new ElementCreate('DIV');
        const spanC = new ElementCreate('DIV');
        const spanD = new ElementCreate('DIV');

        const iconAddress: string[] = FontAwesome.EDUCATION.split(" ");
        const iconEmail: string[] = FontAwesome.EMAIL.split(" ");
        const iconPhone: string[] = FontAwesome.PHONE.split(" ");
        const iconLinkedIn: string[] = FontAwesome.LINKEDIN.split(" ");
        const iconLink: string[] = FontAwesome.LINK.split(" ");
        const iconCvLink: string[] = FontAwesome.CVBOOKMARK.split(" ");
        
        const emailAnchorTag = new ElementCreate('A');
        const telAnchorTag = new ElementCreate('A');
        const linkedInAnchor = new ElementCreate('A');
        const linkAnchor = new ElementCreate('A');
        const cvAnchor = new ElementCreate('A');

        emailAnchorTag.setAttribute({
          name: "href",
          value: `mailto:${this.bio.email}?subject:From%20my%20Portfolio`,
        });
        emailAnchorTag.setElementText(this.bio.email);
        telAnchorTag.setAttribute({
          name: "href",
          value: `tel:+${this.bio.phone}`,
        });
        telAnchorTag.setElementText(` +${this.bio.phone.toString()}`);
        linkedInAnchor.setAttribute({
          name: "href",
          value: `${this.bio.linkedIn}`,
        });
        linkedInAnchor.setElementText(` ${this.bio.linkedIn}`);
        linkAnchor.setAttribute({
            name: "href",
            value: `${this.bio.link}`,
        });
        linkAnchor.setElementText(` ${this.bio.link}`);
        cvAnchor.setAttribute({
            name: "href",
            value: `${this.bio.cvLink}`,
        });
        cvAnchor.setElementText(` ${this.bio.cvLink}`);

        spanA.setChild(this.getFontAwesome(iconAddress));
        spanA.setElementText(`&nbsp; ${address}`);
        spanB.setChild(this.getFontAwesome(iconPhone));
        spanB.setElementText("&nbsp;");
        spanB.setChild(telAnchorTag.getElement());
        spanB.setElementText("&emsp; | &emsp;");
        spanB.setChild(this.getFontAwesome(iconEmail));
        spanB.setElementText("&nbsp;");
        spanB.setChild(emailAnchorTag.getElement());
        spanC.setChild(this.getFontAwesome(iconLinkedIn));
        spanC.setElementText('&nbsp;');
        spanC.setChild(linkedInAnchor.getElement());
        if((this.bio.cvLink)) {
            spanD.setChild(this.getFontAwesome(iconCvLink));
            spanD.setElementText("&nbsp;");
            spanD.setChild(cvAnchor.getElement());
        }
        if((this.bio.link) && (this.bio.cvLink)) {
            spanD.setElementText("&emsp; | &emsp;");
        }
        if(this.bio.link) {
            spanD.setChild(this.getFontAwesome(iconLink));
            spanD.setElementText('&nbsp;');
            spanD.setChild(linkAnchor.getElement());
        }



        spanA.setClass('mb-2');
        spanC.setClass('mt-2');
        spanD.setClass('my-2');

        right.setChildren([
            spanA.getElement(),
            spanB.getElement(),
            spanC.getElement()
        ]);
        ((this.bio.link) || (this.bio.cvLink) ) && (right.setChild(spanD.getElement()));
        return right.getElement();
    }

    private getFontAwesome(classes: string[]): HTMLElement {
        const i = new ElementCreate('I');
        classes.forEach(element => {
            i.setClass(element);
        });
        i.setClass('text-info');
        return i.getElement();
    }

    public getBio():HTMLElement {
        const section = new ElementCreate("SECTION");
        section.setClasses(['row', 'font-weight-bold']);
        const br = new ElementCreate('BR');
        const p = new ElementCreate('h5');
        p.setClasses(['font-italic', 'text-justify', 'line-height-2']);
        p.setElementText(this.bio.briefBio);
        p.setClasses(['my-3', 'font-weight-bolder']);
        section.setChildren([this.leftDiv(), this.rightDiv(), p.getElement()]);
        return section.getElement();
    }
}