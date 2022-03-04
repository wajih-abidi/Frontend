import { NgModule } from '@angular/core';
import { RegisterService } from './services/register.service';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [RegisterService]
})
export class RegisterModule { }
