import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Answer, Question, Test } from 'app/models/Test';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {
  public questionsForm: FormGroup;
  public basicDPdata: NgbDateStruct;
  public spinnerTP = true;
  test = new Test();
  questToAdd = new Question();
  testDate = {year: 2020, month: 1, day: 1};
  testTime = {hour: 12, minutes: 30};
  ADDING = false;

  answerFields = new Array<Answer>();
  constructor() {

   }

  ngOnInit(): void {
  }

  addTest() {

  }

  addQuestion() {
    this.answerFields.push({answerText: '', correct: false});
    this.test.questions.push({questText: this.questToAdd.questText, questMarks: '5', answers: [], qcm: false});
  }

  addAnswer(index) {
    this.test.questions[index].answers.push(JSON.parse(JSON.stringify(this.answerFields[index])));
    if (this.test.questions[index].answers.filter(x => x.correct).length > 1)
    {
      this.test.questions[index].qcm = true
    }
  }



}
