import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // Creating an instance of Formgrop
  myForm:FormGroup;

  constructor(public fb: FormBuilder) {

    this.myForm= this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]]
    })
   }
   // Creating onSubmit function to log the form values in the browser console
   onSubmit(signupform)
   {
     console.log(signupform.value);
   }

  ngOnInit(): void {
  }

}
