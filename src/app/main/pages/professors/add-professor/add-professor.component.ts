import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/User';
import { ProfessorsService } from '../services/professors.service';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.scss']
})
export class AddProfessorComponent implements OnInit {

  contentHeader = {
    headerTitle: 'Enseignants',
    actionButton: false,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Ajouter un enseignants',
          isLink: false
        }
      ]
    }
  };
  professorToAdd = new User();
  mailToSend = {};
  constructor(private professorService: ProfessorsService) { }

  ngOnInit(): void {
  }

  sendMail()
  {
    
  }

}
