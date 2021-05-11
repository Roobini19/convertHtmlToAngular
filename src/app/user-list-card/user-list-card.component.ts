import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

interface UserProfile {
  name: String,
  email: String,
  addresses: [
    {
      address: String,
      city: String,
      state: String
    }
  ]
}

@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.scss']
})
export class UserListCardComponent implements OnInit {

  userlists: UserProfile[];
  searchTerm: String;
  term: String;

  constructor(private authService: AuthService) {
    this.authService.userList().subscribe((params) => {
      this.userlists = params;
    })
   }

  ngOnInit(): void {
  }

}
