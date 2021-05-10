import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoStateService } from 'src/app/shared/auto-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup | any;
  errors = null;

  constructor(
    private token: TokenService, 
    public fb: FormBuilder,
    public router: Router,
    public authService: AuthService,
    private authState: AutoStateService
  ) { 

    this.loginForm = this.fb.group({
      email: [],
      password: []
    });

  }

  ngOnInit(): void {
  }

  responseHandler(data: { access_token: string; }) {
    this.token.handleData(data.access_token);
  }

  onSubmit() {
    console.log('submit');
    this.authService.login(this.loginForm?.value).subscribe(
      result => {
        console.log("result");
        console.log(result);
        this.responseHandler(result);
      },
      error => {        
        if( error instanceof HttpErrorResponse ) {
          console.log("error");
          this.errors = error.error.error
          console.log(this.errors);
        }
      },
      () => {
        this.authState.setAuthState(true)
        this.loginForm?.reset()
        this.router.navigate(['profile']);
      }
    )
  }

}
