import { NgModule } from '@angular/core';
import { StudentsMainComponent } from './students-main.component';
import { StudentsListComponent } from '../students-list/students-list.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StudentsService } from '../services/students.service';

const routes: Routes = [
  {
    path: '',
    component: StudentsMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'studentsList',
        pathMatch: 'full'
      },
      {
        path: 'studentsList',
        component: StudentsListComponent,
      },
      {
        path: 'editStudent/:id',
        loadChildren: () => import('../add-student/add-student.module').then(m => m.AddStudentModule)
      },
      {
        path: 'details/:id',
        loadChildren: () => import('../student-details/student-details.module').then(m => m.StudentDetailsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    StudentsMainComponent,
    StudentsListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
    ],
  providers: [StudentsService]
})
export class StudentsModule { }
