import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'app/models/Subject';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.scss']
})
export class AddChapterComponent implements OnInit {

  chapterToAdd = new Chapter();
  ADDING = false;
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
   }

  ngOnInit(): void {
  }

  addChapter() {
    
  }

}
