import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

interface UserProfile {
  name: String;
  email: String;
  addresses: [{
    address: String;
    city: String;
    state: String;
  }];
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  searchTerm: String;
  userLists: UserProfile[];
  term: String;

  constructor(private authService: AuthService) { 
      this.authService.userList().subscribe((params) => {
        console.log(params);
        this.userLists = params;
      });
    }

  ngOnInit(): void {
  }

}
