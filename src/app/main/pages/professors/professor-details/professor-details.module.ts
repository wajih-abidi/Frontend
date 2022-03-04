import { NgModule } from '@angular/core';
import { ProfessorDetailsComponent } from './professor-details.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorsService } from '../services/professors.service';

const routes: Routes = [
  {
    path: '',
    component: ProfessorDetailsComponent
  } 
]

@NgModule({
  declarations: [ProfessorDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProfessorsService
  ]
})
export class ProfessorDetailsModule { }
