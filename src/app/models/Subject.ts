export class SubjectToAdd {
    _id: string;
    name: string;
    shortName: string;
    type: string;
    descr: string;
    hours: number;
    coef: number;
    creationDate: Date;
    chapters: Chapter[];
}

export class SubjectToSelect {
    _id: string;
    name: string;
    type: string;
    hours: string;
    professorId: string;
}

export class Chapter {
    name: string;
    shortName: string;
    hours: number;
    semester: string;
    descr: string;
    attachements: [];
    creationDate: Date;
}