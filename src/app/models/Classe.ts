export class Classe {
    id: string;
    name: string;
    shortName: string;
    year: number;
    department: string;
    creationDate = new Date();
    subjects: SubjectPerClass[];
    students: string[];
}

export class ClasseToSelect {
    name: string;
    id: string;
}

export class SubjectPerClass {
    subject: string;
    professor: string
}