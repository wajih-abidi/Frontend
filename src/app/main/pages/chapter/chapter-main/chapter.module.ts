import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/main/shared/shared.module';
import { AddChapterComponent } from '../add-chapter/add-chapter.component';
import { AddTestComponent } from '../tests/add-test/add-test.component';
import { ChapterMainComponent } from './chapter-main.component';

const routes: Routes = [
  {
    path: '',
    component: ChapterMainComponent,
    children: [
      {
        path: '',
        component: AddChapterComponent
      }
    ]
  },
  
]

@NgModule({
  declarations: [ChapterMainComponent, AddChapterComponent, AddTestComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ChapterModule { }
