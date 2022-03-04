import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/main/shared/shared.module';
import { AddStudentComponent } from './add-student.component';

const routes: Routes = [
  {
    path: '',
    component: AddStudentComponent
  }
]

@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AddStudentModule { }
