import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-classes-list-item',
  templateUrl: './classes-list-item.component.html',
  styleUrls: ['./classes-list-item.component.scss']
})
export class ClassesListItemComponent implements OnInit {
  @Input() classe;
  constructor() { }

  ngOnInit(): void {
  }

}
