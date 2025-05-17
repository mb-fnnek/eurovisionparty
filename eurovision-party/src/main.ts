import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {ApplicationConfig} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
