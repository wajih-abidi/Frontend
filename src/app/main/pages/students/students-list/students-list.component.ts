import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  
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
