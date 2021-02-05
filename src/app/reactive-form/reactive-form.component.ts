import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validators';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  implements OnInit{

  registrationForm !:FormGroup ;

  get userName(){
    return this.registrationForm.get('userName');
  }
    
  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }
  

   constructor(private fb: FormBuilder, private _registrationService :RegistrationService){}

   ngOnInit(){

    this.registrationForm=this.fb.group({
      userName:['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email:[''],
      subscribe:[false],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city: [''],
        state:[''],
        postalCode:['']
      }),
      alternateEmails:this.fb.array([])
    }, {validator: PasswordValidator});
    
     this.registrationForm.get('subscribe')?.valueChanges
     .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if(checkedValue){
          email?.setValidators(Validators.required);
        }else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
     });

   }

  
  /* registrationForm = new FormGroup({
    userName:new FormControl('Prasad'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
 */
  loadApiData(){

    /*      setvalue is strict type it need fill all value 
    this.registrationForm.setValue({
      userName: 'Surya',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123455'
      }
        */
 /*      patchvalue is not strict type it allow fill the value which are need */
       this.registrationForm.patchValue({
        userName: 'Surya',
        password: 'test',
        confirmPassword: 'test'
    })
  }

  onSubmit(){
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('success', response),
      error => console.error('Error!', error)
    );
  }
}
