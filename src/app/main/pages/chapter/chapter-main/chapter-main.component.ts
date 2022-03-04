import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-main',
  templateUrl: './chapter-main.component.html',
  styleUrls: ['./chapter-main.component.scss']
})
export class ChapterMainComponent implements OnInit {
  contentHeader = {
    headerTitle: 'Chapitre',
    actionButton: false,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Gérer un chapitre',
          isLink: false
        }
      ]
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
