import { Component, OnInit } from '@angular/core';
import { Patient } from '../../classes/patient';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient = {} as Patient;

  constructor(private patientservice: PatientService) { }

  ngOnInit() {
  }

  public addPatient(): void {
    console.log(this.patient);

     this.patientservice.addPatient(this.patient);
  }

}
