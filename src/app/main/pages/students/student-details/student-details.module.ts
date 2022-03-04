import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details.component';
import { SharedModule } from 'app/main/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StudentDetailsComponent
  }
]

@NgModule({
  declarations: [StudentDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentDetailsModule { }
