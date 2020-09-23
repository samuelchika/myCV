export type AttribObject = { name: string, value: string };
export interface BioTemplate {
    name: string;
    jobTitle: string;
    address: string;
    phone: number;
    email: string;
    linkedIn: string;
    briefBio: string;
    link: string;
    cvLink: string;
}

export interface JobTemplate {
    companyName: string;
    startDate: string;
    endDate: string;
    title: string;
    description: string;
    contribution: string[];
}

export interface EducationTemplate {
    title: string;
    date: string;
    schoolName: string;
    details: string[];
}

export interface LicenseTemplate {
  title: string;
  body: string;
}

export enum FontAwesome {
    EDUCATION = "fas fa-university",
    LINKEDIN ="fab fa-linkedin",
    PHONE = "fa fa-phone",
    EMAIL = "fa fa-envelope",
    LINK = "fa fa-link",
    CVBOOKMARK = "fa fa-bookmark"
}
export interface CVTemplate {
  bio: BioTemplate;
  expertises: string[];
  educations: EducationTemplate[];
  professions: JobTemplate[];
  license: LicenseTemplate[];
  projects: ProjectTemplate[];
  portfolio: string;
}
export interface ProjectTemplate {
    name: string;
    year: string;
    url: string;
}