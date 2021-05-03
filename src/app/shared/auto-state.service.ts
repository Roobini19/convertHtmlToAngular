import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AutoStateService {

  constructor(public token: TokenService) { }

  private userState = new BehaviorSubject(this.token.isLoggedIn());

  userAuthState = this.userState.asObservable();

  setAuthState(value: boolean) {
    this.userState.next(value);
  }
}
