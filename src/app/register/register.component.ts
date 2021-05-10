import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  errors = null;
  errorMsg = 'error-msg';
  successMsg = false;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {

      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        password_confirmation: ['', Validators.required],
      }, {
        validator: MustMatch('password','password_confirmation')
      });

   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('registerform');
    this.authService.register(this.registerForm.value).subscribe(
      result => {
        console.log(result);
      },

      error => {
        this.errors = error.error;
      },

      () => {        
        this.router.navigate(['register']);
        this.successMsg = true;
        this.registerForm.reset();
      }
    )
  }

}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}


