import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassTestComponent } from './pass-test.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { PassTestService } from './services/pass-test.service';

const routes: Routes = [
  {
    path: '',
    component: PassTestComponent
  }
]

@NgModule({
  declarations: [PassTestComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [PassTestService]
})
export class PassTestModule { }
