import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactForm : FormGroup | any;
  errors = null;

  constructor(
    public fb: FormBuilder,
    public auth: AuthService,
    public router: Router
  ) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      message: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.contactus(this.contactForm.value).subscribe(
      result => {
        console.log(result);
      },

      error => {
        this.errors = error;
      },

      () => {
        this.contactForm.reset();
        this.router.navigate(['/contactus']);
      }
    )
  }

}
