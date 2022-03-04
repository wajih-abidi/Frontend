import { NgModule } from '@angular/core';
import { ProfessorsMainComponent } from './professors-main.component';
import { ProfessorsListComponent } from '../professors-list/professors-list.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorsService } from '../services/professors.service';

const routes: Routes = [
  {
    path: '',
    component: ProfessorsMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'professorsList',
        pathMatch: 'full'
      },
      {
        path: 'professorsList',
        component: ProfessorsListComponent
      },
      {
        path: 'details/:id',
        loadChildren: () => import('../professor-details/professor-details.module').then(m => m.ProfessorDetailsModule)
      },
      {
        path: 'editProfessor/:id',
        loadChildren: () => import('../add-professor/add-professor.module').then(m => m.AddProfessorModule)

      }
    ]
  }
]

@NgModule({
  declarations: [ProfessorsMainComponent, ProfessorsListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProfessorsService
  ]
})
export class ProfessorsModule { }
