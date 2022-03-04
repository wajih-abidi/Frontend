import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'app/main/pages/miscellaneous/error/error.component';

// routing
const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    data: { animation: 'misc' }
  }
];

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MiscellaneousModule {}
