import { PatientService } from './../../services/patient.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../../classes/patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patientRef$: FirebaseListObservable<Patient[]>;

  constructor(private patientservice: PatientService) {

  }

  ngOnInit() {

    this.patientRef$ = this.patientservice.retrieveAllPatients(); // GET ALL THE PATIENTS FROM FIREBASE AND USE ASYNC TO UNWRAP THEM.
    console.log(this.patientRef$);
  }

}
