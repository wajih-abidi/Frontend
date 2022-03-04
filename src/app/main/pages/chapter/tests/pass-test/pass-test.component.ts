import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassTestService } from './services/pass-test.service';

@Component({
  selector: 'app-pass-test',
  templateUrl: './pass-test.component.html',
  styleUrls: ['./pass-test.component.scss']
})
export class PassTestComponent implements OnInit {

  test: any;
  id = null;
  constructor(private passTestService: PassTestService, private route: ActivatedRoute) {

    this.id = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.loadTest();
  }

  loadTest() {
    this.passTestService.loadTestToPass(this.id).subscribe(data => {
      console.log(data);
      let questions = new Array<any>();
      data.Questions.forEach(x => {
        let qIndex = questions.filter(y => y.idQuest == x.idQuestion).length;

        if (qIndex == 0)
        {
          console.log('index -1');
          let q = {
            idQuest: x.idQuestion,
            questText: x.questionText,
            marks: x.Marks,
            answers: [{idReponse: x.idReponse, answerText: x.answerText, selected: false}]
          }
          questions.push(q);
        } else if (qIndex > 0) {
          let a = {
            idReponse: x.idReponse,
            answerText: x.answerText,
            selected: false
          }
          questions[questions.length - 1].answers.push(a);
        }
      });
      this.test = {
        questions: questions,
        chapitre: data.chapitre,
        semester: data.semester,
        duration: data.duration,
        date: data.date
      }
      //this.test = data;
    });
  }

  submit () {
    let testToSubmit = {
      idTest: this.id,
      id_user: 1,
      quesRep: this.test.questions.map(x => {
        let q = {
          idQuestion: x.idQuest,
          reponses: x.answers.filter(y => y.selected == true).map(y => {
            return y.idReponse
          })
        };
        return q;
      })
    };
    console.log(testToSubmit);
    console.log(this.test);

    this.passTestService.submitTest(testToSubmit).subscribe(data => {
      console.log(data);
    });
  }

}
