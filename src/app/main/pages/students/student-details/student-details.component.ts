import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  contentHeader = {
    headerTitle: 'Etudiants',
    actionButton: false,
    breadcrumb: {
      type: '',
      links: [
        {
          name: "Details d'un étudiant",
          isLink: false
        }
      ]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
