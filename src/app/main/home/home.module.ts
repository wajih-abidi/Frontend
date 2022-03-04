import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from 'app/layout/layout.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'classes',
            pathMatch: 'full'
          },
          {
            path: 'classes',
            loadChildren: () => import('../pages/classes/classes-main/classes.module').then(m => m.ClassesModule)
          },
          {
            path: 'addClasse',
            loadChildren: () => import('../pages/classes/add-classe/add-classe.module').then(m => m.AddClasseModule)
          },
          // {
          //   path: 'accountSettings',
          //   loadChildren: () => import('./../pages/account-settings/account-settings.module').then(m => m.AccountSettingsModule)
          // },
          {
            path: 'students',
            loadChildren: () => import('../pages/students/students-main/students.module').then(m => m.StudentsModule)
          },
          {
            path: 'addStudent',
            loadChildren: () => import('../pages/students/add-student/add-student.module').then(m => m.AddStudentModule)
          },
          {
            path: 'subjects',
            loadChildren: () => import('../pages/subjects/subjects-main/subjects.module').then(m => m.SubjectsModule)
          },
          {
            path: 'addSubject',
            loadChildren: () => import('../pages/subjects/add-subject/add-subjects.module').then(m => m.AddSubjectsModule)
          },
          {
            path: 'professors',
            loadChildren: () => import('../pages/professors/professors-main/professors.module').then(m => m.ProfessorsModule)
          },
          {
            path: 'addProfessor',
            loadChildren: () => import('../pages/professors/add-professor/add-professor.module').then(m => m.AddProfessorModule)
          }
          
        ],
        
      },
      
    ]),
    SharedModule,
    // App modules
    LayoutModule,
  ]
})
export class HomeModule { }
