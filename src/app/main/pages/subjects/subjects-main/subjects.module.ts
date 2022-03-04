import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsMainComponent } from './subjects-main.component';
import { SubjectsListComponent } from '../subjects-list/subjects-list.component';
import { AddSubjectComponent } from '../add-subject/add-subject.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { SubjectsService } from '../services/subjects.service';
import { SubjectDetailsComponent } from '../subject-details/subject-details.component';

const routes: Routes = [
  {
    path : '',
    component: SubjectsMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'subjectsList',
        pathMatch: 'full'
      },
      {
        path: 'subjectsList',
        component: SubjectsListComponent
      },
      {
        path: 'editSubject/:id',
        loadChildren: () => import('../add-subject/add-subjects.module').then(m => m.AddSubjectsModule)
      },
      {
        path: 'details/:id',
        component: SubjectDetailsComponent,
        children: [
          {
            path: 'addChapter',
            loadChildren: () => import('../../chapter/chapter-main/chapter.module').then(m => m.ChapterModule)
          },
          {
            path: 'editChapter/:id',
            loadChildren: () => import('../../chapter/chapter-main/chapter.module').then(m => m.ChapterModule)
          },
          {
            path: 'passTest/:id',
            loadChildren: () => import('../../chapter/tests/pass-test/pass-test.module').then(m => m.PassTestModule)
          }
        ]

      }
    ],
  } 
]

@NgModule({
  declarations: [SubjectsMainComponent, SubjectsListComponent, SubjectDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [SubjectsService]
})
export class SubjectsModule { }
