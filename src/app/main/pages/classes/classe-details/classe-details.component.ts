import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.component.html',
  styleUrls: ['./classe-details.component.scss']
})
export class ClasseDetailsComponent implements OnInit {
  contentHeader: object;
  students = [
    {
      id: 1,
      name: 'Etudiant ',
      photo: '',
      status: 'Redoublant'
    },
    {
      id: 1,
      name: 'Etudiant ',
      photo: '',
      status: 'Redoublant'
    },
    {
      id: 1,
      name: 'Etudiant ',
      photo: '',
      status: 'Redoublant'
    },
    {
      id: 1,
      name: 'Etudiant ',
      photo: '',
      status: 'Redoublant'
    },
    {
      id: 1,
      name: 'Etudiant ',
      photo: '',
      status: 'Redoublant'
    }
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: "Détails d'une classe",
      actionButton: true,
      actionButtonContent: [
        {
          name: 'Calendrier',
          link: '/home/classes/calendar/' + this.route.snapshot.params.id,
          icon: 'calendar'
        }
      ],
      breadcrumb: {
        type: '',
        links: [
          {
            name: "Liste des classes",
            isLink: true,
            link: '/home/classes'
          },
          {
            name: "Détails d'une classe",
            isLink: false,
          }
        ]
      }
    };
  }

}
