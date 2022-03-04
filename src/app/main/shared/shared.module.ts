import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [],
  imports: [NgxMaskModule.forRoot()],
  exports: [
    CommonModule,
    ContentHeaderModule,
    NgbModule,
    TranslateModule,
    NgSelectModule,
    FormsModule,
    NgxMaskModule,
    ReactiveFormsModule,
    CoreDirectivesModule
  ],
})
export class SharedModule { }
