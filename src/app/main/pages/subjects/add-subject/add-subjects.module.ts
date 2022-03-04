import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './add-subject.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { SubjectsService } from '../services/subjects.service';
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
  {
    path: '',
    component: AddSubjectComponent
  }
]

@NgModule({
  declarations: [AddSubjectComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot()
  ],
  providers: [SubjectsService]
})
export class AddSubjectsModule { }
