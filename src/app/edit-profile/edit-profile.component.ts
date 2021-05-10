import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

export class User {
  id: Number;
  name: String;
  email: String;
  addresses: [{
    address: String;
    city: String;
    state: String;
  }]
} 

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements OnInit {

  editProfileForm : FormGroup | any;
  errors = null;

  userProfile: User | undefined;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.userProfile().subscribe((params) => {
      this.userProfile = params;
      console.log('profile params');
      console.log(params);
      this.editProfileForm.patchValue({
        name: this.userProfile.name,
        email: this.userProfile.email,
      })
    });

    this.editProfileForm = this.fb.group({
      name: '',
      email: '',
      addresses: this.fb.array([]),
    });
   }

  addresses(): FormArray {
    return this.editProfileForm.get('addresses') as FormArray
  }

  newAddress(): FormGroup {
    return this.fb.group({
      address: '',
      city: '',
      state: ''
    })
  }

  
  addAddress() {
    this.addresses().push(this.newAddress());
  }

  removeAddress(i:number) {
    this.addresses().removeAt(i);
  }

  ngOnInit(): void {
  }  

  onSubmit() {
    console.log(this.editProfileForm.value);
    console.log(this.userProfile.id);
    this.authService.updateProfile(this.userProfile.id, this.editProfileForm.value).subscribe(
      result => {
        console.log(result);
      },

      error => {
        this.errors = error.error;
      },

      () => {
        this.router.navigate(['profile']);
        this.editProfileForm.reset();
      }
    )
  }

}
