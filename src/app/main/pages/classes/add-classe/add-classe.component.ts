import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Classe } from 'app/models/Classe';
import { SubjectToSelect } from 'app/models/Subject';
import Stepper from 'bs-stepper';
import { ClasseService } from '../services/classe.service';
@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddClasseComponent implements OnInit {
  contentHeader = {
    headerTitle: 'Classe',
    actionButton: false,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Ajouter une classe',
          isLink: false
        }
      ]
    }
  };
  classeToAdd = new Classe();
  professors = this.classeService.professorsToSelect$;
  selectedSubjects = new Array<SubjectToSelect>();
  subjectsToSelect = this.classeService.subjectsToSelect$;
  studentsToSelect = this.classeService.studentsToSelect$;
  // private
  public modernVerticalWizardStepper: Stepper;
  public bsStepper;

  modernVerticalNext() {
    this.modernVerticalWizardStepper.next();
  }

  modernVerticalPrevious() {
    this.modernVerticalWizardStepper.previous();
  }


  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    this.modernVerticalWizardStepper = new Stepper(document.querySelector('#stepper4'), {
      linear: false,
      animation: true
    });
    this.bsStepper = document.querySelectorAll('.bs-stepper');
  }


  onSubmit() {
    let body = {
      classe: this.classeToAdd,
      matieres: [1, 2, 4],
      etudiant: [1]
    }
    this.classeService.addClasse(body).subscribe(data => {
      console.log(data);
    });
  }

  subjectSelected($target) {
    this.selectedSubjects = $target;
    console.log(this.selectedSubjects);
  }



}
