import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = "http://127.0.0.1:8000/api/auth";

export class User {
  name: String;
  email: string;
  password: string;
  password_confirmation: string;
};

export class Contact {
  name: string;
  email: string;
  mobile: number;
  message: string;
};

export class UserProfile {
  name: String;
  email: String;
  addresses: [{
    address: String,
    state: String,
    city: String
  }];
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    console.log(user);
    return this.http.post(`${baseURL}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${baseURL}/login`, user);
  }

  contactus(contact: Contact): Observable<any> {
    return this.http.post(`${baseURL}/contactus`,contact);
  }
  
  userProfile(): Observable<any> {
    return this.http.get(`${baseURL}/user-profile`);
  }

  updateProfile(id: any,userProfile: UserProfile): Observable<any> {
    return this.http.post(`${baseURL}/update-profile/${id}`, userProfile);
  }

  userList(): Observable<any> {
    return this.http.get(`${baseURL}/user-list`);
  }
}
