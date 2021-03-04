import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.sass']
})
export class MainFormComponent implements OnInit {

  angForm: FormGroup;
  displayPasswError = false;
  displayEmailError = false;

  constructor(private fb: FormBuilder) {
   }

   
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({       
       email: ['', [Validators.required,Validators.email]],
       passw: ['', Validators.required ]
    });
  }

  checkSendButton(){
    this.displayPasswError = this.angForm.controls['passw'].status === 'INVALID';
    this.displayEmailError = this.angForm.controls['email'].status === 'INVALID';
    if (!this.displayEmailError && !this.displayPasswError){
      // Hacer lo que sea aquí
      console.log ('OK');
    }
    
  }

}
