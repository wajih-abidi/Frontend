import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'hammerjs';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { ConnectedGuard } from './auth/helpers/connected.guards';
import { AuthGuard , JwtInterceptor} from './auth/helpers';
import { LayoutModule } from './layout/layout.module';
import { CoreSidebarModule } from '@core/components';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TestsMainComponent } from './main/pages/chapter/tests/tests-main/tests-main.component';
import { AddTestComponent } from './main/pages/chapter/tests/add-test/add-test.component';
import { ChapterMainComponent } from './main/pages/chapter/chapter-main/chapter-main.component';
import { PassTestComponent } from './main/pages/chapter/tests/pass-test/pass-test.component';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import ('./main/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'register',
    //canActivate:[ConnectedGuard],
    loadChildren: () => import ('./main/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    canActivate:[ConnectedGuard],
    loadChildren: () => import ('./main/Login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    loadChildren: () => import('./main/pages/miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy',
    }),
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    LayoutModule

  ],
  bootstrap: [AppComponent],
  providers:[
    {provide : LocationStrategy , useClass: HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  {
    provide: LOCALE_ID, useValue: 'fr'
  }]
})
export class AppModule {}
