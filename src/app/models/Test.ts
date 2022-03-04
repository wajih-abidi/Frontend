
export class Test {
    date = {year: null, month: null, day: null};
    time = {hour: null, minutes: null};
    duration = null;
    questions = new Array<Question>();

}

export class Question {
    questText = null;
    questMarks = null;
    qcm = false;
    answers = new Array<Answer>();
}

export class Answer {
    answerText = null;
    correct = null;
}