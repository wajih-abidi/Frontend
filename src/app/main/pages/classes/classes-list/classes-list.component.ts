import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  contentHeader: object;

  // classes = [
  
  //   {
  //     id: 'oilkeaaùkl',
  //     fullName: 'mzoelkz mzoiolkaeùa',
  //     shortName: 'MPDAM',
  //     year: 2022,
  //     students: 26,
  //     department: 'Informatique',
  //     creationDate: '01/01/2021'
  //   },
  //   {
  //     id: 'oilkeaaùkl',
  //     fullName: 'mzoelkz mzoiolkaeùa',
  //     shortName: 'MPDAM',
  //     year: 2022,
  //     students: 26,
  //     department: 'Informatique',
  //     creationDate: '01/01/2021'
  //   },
  //   {
  //     id: 'oilkeaaùkl',
  //     fullName: 'mzoelkz mzoiolkaeùa',
  //     shortName: 'MPDAM',
  //     year: 2022,
  //     students: 26,
  //     department: 'Informatique',
  //     creationDate: '01/01/2021'
  //   },
  //   {
  //     id: 'oilkeaaùkl',
  //     fullName: 'mzoelkz mzoiolkaeùa',
  //     shortName: 'MPDAM',
  //     year: 2022,
  //     students: 26,
  //     department: 'Informatique',
  //     creationDate: '01/01/2021'
  //   },
  //   {
  //     id: 'oilkeaaùkl',
  //     fullName: 'mzoelkz mzoiolkaeùa',
  //     shortName: 'MPDAM',
  //     year: 2022,
  //     students: 26,
  //     department: 'Informatique',
  //     creationDate: '01/01/2021'
  //   },
  // ];

  classes$ = this.classeService.classes$;
  
  public page = 1;
  public pageSize = 9;
  public searchText = '';

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Classes',
      actionButton: false,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste des classes',
            isLink: false,
          }
        ]
      }
    };
  }

}
