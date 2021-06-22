import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Patient } from './../classes/patient';
import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class PatientService {
  patient: Patient;
  patientRef$ = 'patients';
  constructor(private afDatabase: AngularFireDatabase) {}

  // RETURN ALL THE PATIENTS FROM THE PATIENT FIREBASE NODE.
  public retrieveAllPatients(): FirebaseListObservable <Patient[]> {
    return this.afDatabase.list(`${this.patientRef$}/`);
  }

  // ADD NEW PATIENT
  public addPatient(patient: Patient): void {
    patient.patientId = patient.patientTRN;
      this.afDatabase.object(`/${this.patientRef$}/${patient.patientId}`).set(patient).then((promise) => {
        alert(patient.patientName + 'Was successfully registered.');
      }).catch((error) => {
        alert(error);
      });
  }// END OF ADD PATIENT.

}// END OF PATIENT SERVICE.
