import { NgModule } from '@angular/core';
import { ClassesListComponent } from '../classes-list/classes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ClassesMainComponent } from './classes-main.component';
import { ClasseDetailsComponent } from '../classe-details/classe-details.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { ClassesListItemComponent } from '../classes-list/classes-list-item/classes-list-item.component';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { ClasseService } from '../services/classe.service';



const routes: Routes = [
  {
    path: '',
    component: ClassesMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'classesList',
        pathMatch: 'full'
      },
      {
        path: 'classesList',
        component: ClassesListComponent
      },
      {
        path: 'editClasse/:id',
        loadChildren: () => import('../add-classe/add-classe.module').then(m => m.AddClasseModule)
      },
      {
        path: 'details/:id',
        component: ClasseDetailsComponent
      },
      {
        path: 'calendar/:id',
        loadChildren: () => import('../../../calendar/calendar.module').then(m => m.CalendarModule)
      }
    ]
  },
]

@NgModule({
  declarations: [
    ClassesListComponent,
    ClassesMainComponent,
    ClasseDetailsComponent,
    ClassesListItemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CorePipesModule
  ],
  providers: [ClasseService]
})
export class ClassesModule { }
