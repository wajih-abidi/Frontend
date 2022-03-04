import { NgModule } from '@angular/core';
import { AddProfessorComponent } from './add-professor.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorsService } from '../services/professors.service';

const routes: Routes = [
  {
    path: '',
    component: AddProfessorComponent
  }
]

@NgModule({
  declarations: [AddProfessorComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProfessorsService
  ]
})
export class AddProfessorModule { }
