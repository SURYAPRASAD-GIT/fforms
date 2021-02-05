import { EnrollmentService } from './../enrollment.service';
import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdforms',
  templateUrl: './tdforms.component.html',
  styleUrls: ['./tdforms.component.css']
})
export class TDFormsComponent {


  options!: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');


 topics = ['Angular','React','Vue'];
 topicHasError=true;
  submitted=false;
  successMsg="";
  errorMsg="";

 userModel=new User("","Baddi","surya@gmail.com",9874565459,"default","morning", false);

 constructor(private _enrollmentService: EnrollmentService, fb: FormBuilder)
 {
  this.options = fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
}

 validateTopic(value:any){
   if(value === 'default'){
     this.topicHasError=true;
   }else {
     this.topicHasError=false;
   }

 }

 email = new FormControl('', [Validators.required, Validators.email]);

 getErrorMessage() {
   if (this.email.hasError('required')) {
     return 'You must enter a email';
   }

   return this.email.hasError('email') ? 'Not a valid email' : '';
 }

 onSubmit(){
   this.submitted=true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => this.successMsg=data.statusText,
      error => this.errorMsg=error.statusText
    )
}

}
