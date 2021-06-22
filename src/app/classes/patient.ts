export class Patient {


        // Patient Personal Information
        public   patientId: string;
         public patientName: string;
         public patientTRN: string;
         public patientEmail: string;
         public patientTelephone: string;
         public patientLandmark: string;
         public patientOccupation: string;
         public patientDOB: string;
         public patientAddress: string;
         public patientParish: string;
         public patientGender: string;
         public patientMaritalStatus: string;
         public toilet: string;
         public watersupply: string;
         public waterstorage: string;
       // Next of Kin Information
         public patientNOKName: Boolean;
         public patientNOKPhone: Boolean;
         public patientNOKLandmark: Boolean;
         public patientNOKAddress: Boolean;
        // Family Medical Data/Family History
         public  patientFAsthma: Boolean;
         public  patientFDiabetes: Boolean;
         public  patientFEpilepsy: Boolean;
         public  patientFHBPressure: Boolean;
         public  patientFMentalIllness: Boolean;
         public  patientFStroke: Boolean;
         public  patientFHeartDisease: Boolean;
         public  patientFTubercolosis: Boolean;
         public  patientFOther: Boolean;
        // Patient Medical Data
         public  patientAsthma: Boolean;
         public  patientDiabetes: Boolean;
         public  patientEpilepsy: Boolean;
         public  patientHBPressure;
         public  patientMentalIllness: Boolean;
         public  patientStroke: Boolean;
         public  patientHeartDisease: Boolean;
         public  patientTubercolosis: Boolean;
         public  patientOther: Boolean;
         public  patientCancer: Boolean;
         public  patientJaundice: Boolean;
         public  patientAllergies: Boolean;
         public  patientSyphilis: Boolean;
         public  patientGonorrhea: Boolean;
         public  patientCongenialDeformity: Boolean;
         public  patientMeasles: Boolean;
         public  patientMumps: Boolean;
         public  patientRubella: Boolean;
         public  patientRheumaticFever: Boolean;
         public  patientWhoopingCough: Boolean;
         public  patientRheumaticHD: Boolean;
         public  patientOperation: Boolean;
         public  patientInjuries: Boolean;
         public  patientKidneyDisease: Boolean;
         public weight: string;
         public height: string;
         public bloodPressure: string;
         public Cholestorol: string;
         public bloodType: string;
         public trn_dob: string;
        public docketNumber: string;
        public patientNumber: string;
    // constructor
        constructor ( patientId: string,  patientName: string,  patientTelephone: string,  patientAddress: string,
              weight,  height,  bloodPressure ) {
            this.patientId = patientId;
            this.patientName = patientName;
            this.patientAddress = patientAddress;
            this.patientTelephone = patientTelephone;
            this.weight = weight;
            this.height = height;
            this.bloodPressure = bloodPressure;
        }
}// END OF PATIENT CLASS
