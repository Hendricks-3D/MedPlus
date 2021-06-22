import { PatientService } from './services/patient.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddPatientComponent } from './Components/add-patient/add-patient.component';
import { ViewPatientComponent } from './Components/view-patient/view-patient.component';
import { RemovePatientComponent } from './Components/remove-patient/remove-patient.component';


// FIREBASE DATABASE
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireModule} from 'angularfire2';

// ANGULAR ROUTING
import { RouterModule, Routes } from '@angular/router';

// ALLOW THE USE OF NG MODEL
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddPatientComponent,
    ViewPatientComponent,
    RemovePatientComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp({apiKey: 'AIzaSyAA5OWWSEXPfr4NCXAg9UEsB7gV3AUdTLI',
     authDomain: 'docitdatafile.firebaseapp.com',
     databaseURL: 'https://docitdatafile.firebaseio.com',
     projectId: 'docitdatafile',
     storageBucket: 'docitdatafile.appspot.com',
     messagingSenderId: '141029095676'}),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: AddPatientComponent},
      {path: 'remove', component: RemovePatientComponent},
      {path: 'view', component: ViewPatientComponent}
    ]),
    FormsModule
  ],
  providers: [  PatientService],
  bootstrap: [AppComponent],

})
export class AppModule { }
