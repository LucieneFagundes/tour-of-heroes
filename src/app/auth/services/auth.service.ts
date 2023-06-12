import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from '../models/credentials.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {}

  login(credentials: Credentials): void {
    localStorage.setItem('token', credentials.email);
    this.loggedIn.next(true);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
