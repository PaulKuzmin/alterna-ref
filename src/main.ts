import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {routes} from './app/app.routes';
import {AppComponent} from './app/app.component';
import {environment} from './environments/environment';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiInterceptor} from "./app/services/api.interceptor";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    importProvidersFrom(
      IonicModule.forRoot({}),
      HttpClient,
      HttpClientModule
    ),
    provideRouter(routes),
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
  ],
});
