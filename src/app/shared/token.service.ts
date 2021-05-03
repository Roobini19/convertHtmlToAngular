import { Injectable } from '@angular/core';

const baseURL = "http://127.0.0.1:8000/api/auth";

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private issuer = {
    login: `${baseURL}/login`,
    register: `${baseURL}/register`
  }

  constructor() { }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  handleData(token: string) {
    localStorage.setItem('auth_token', token);
  }

  removeToken() {
    return localStorage.removeItem('auth_token');
  }

  isValidToken() {
    const token = this.getToken();

    if(token !== null && token) {
      const payload = this.payload(token);

      if(payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
      }
    } else {
      return false;
    }
  }

  payload(token: string) {
    const jwtPayload = token.split('.')[1];

    return JSON.parse(atob(jwtPayload));
  }

  isLoggedIn() {
    return this.isValidToken();
  }
}
