import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SubjectToAdd } from 'app/models/Subject';
import { SubjectsService } from '../services/subjects.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddSubjectComponent implements OnInit, OnDestroy {

  contentHeader = {
    headerTitle: 'Matières',
    actionButton: false,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Ajouter une matière',
          isLink: false
        }
      ]
    }
  };
  subjectTypes = ['Atelier', 'Cours'];
  subjectToAdd = new SubjectToAdd();
  subjectsList$ = this.subjectService.subjectsList$;
  ADDING = false;
  constructor(private subjectService: SubjectsService) { }

  ngOnInit(): void {
  }

  addSubject(){
    this.ADDING = true;
    this.subjectService.addSubject(this.subjectToAdd).subscribe(result => {
      console.log(result);
      this.subjectToAdd = new SubjectToAdd();
      this.ADDING = false;
    });
  }


  ngOnDestroy(): void {
      
  }

  

}
