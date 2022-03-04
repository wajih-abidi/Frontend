import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professors-list',
  templateUrl: './professors-list.component.html',
  styleUrls: ['./professors-list.component.scss']
})
export class ProfessorsListComponent implements OnInit {
 
  contentHeader = {
    headerTitle: 'Enseignants',
    actionButton: false,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Liste des enseignants',
          isLink: false
        }
      ]
    }
  };

  classes: [];
  types: ['Atelier', 'Cours'];
  subjects: any[];
  filteredSubjects: any[];
  constructor() { }

  ngOnInit(): void {
  }

  filterByClasse(classeId) {
    this.filteredSubjects = this.subjects.filter(x => x.classeId == classeId);
  }


  filterByType(type) {
    this.filteredSubjects = this.subjects.filter(x => x.type == type);
  }


  filterByKeyword(text) {
    this.filteredSubjects = this.subjects.filter(x => JSON.stringify(x).includes(text));
  }
  
}
