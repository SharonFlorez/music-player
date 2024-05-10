import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

import { AppRouting } from './app.routes';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './core/environments/enviroment';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    DialogService,
    provideHttpClient(withFetch()),
    importProvidersFrom(
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(AppRouting),
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore())
    ),
  ],
};
