import { NgModule } from '@angular/core';
import { SharedModule } from 'app/main/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AddClasseComponent } from './add-classe.component';
import { ClasseService } from '../services/classe.service';

const routes: Routes = [
  {
    path: '',
    component: AddClasseComponent
  },
]

@NgModule({
  declarations: [AddClasseComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [ClasseService]
})
export class AddClasseModule { }
