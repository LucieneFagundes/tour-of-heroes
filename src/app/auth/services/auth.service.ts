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
    localStorage.setItem('token', credentials.password);
    this.updatedLoggedIn();
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.clear();
    this.updatedLoggedIn();
    this.router.navigate(['/login']);
  }

  updatedLoggedIn(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }
}
