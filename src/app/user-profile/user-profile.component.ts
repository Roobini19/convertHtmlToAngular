import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

export class User {
  name: String | undefined;
  email: String | undefined;
  id: Number | undefined;
  addresses: [{
    address: String;
    city: String;
    state: String;
  }];
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  userProfile : User | undefined;

  constructor(public authService: AuthService) {
    this.authService.userProfile().subscribe((data:any) => {
      this.userProfile = data;
      this.userProfile.addresses = data.profile;
      console.log(data);
      console.log(data.profile);
    })
   }

  ngOnInit(): void {
  }

}
function data(data: any) {
  throw new Error('Function not implemented.');
}

