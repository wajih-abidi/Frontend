import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClasseToSelect } from 'app/models/Classe';
import { SubjectToAdd } from 'app/models/Subject';
import { User } from 'app/models/User';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddStudentComponent implements OnInit {

  contentHeader = {
    headerTitle: 'Matières',
    actionButton: false,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Liste des matières',
          isLink: false
        }
      ]
    }
  };
  studentToAdd = new User();
  classes: ClasseToSelect[];
  mailToSend = {};
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

  sendMail()
  {
    this.studentsService.sendMail(this.studentToAdd).subscribe(data => {
      console.log(data);
    });
  }

}
