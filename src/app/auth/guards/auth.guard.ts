import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export function authenticationGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService);
    authService.updatedLoggedIn();

    if (localStorage.getItem('token')) {
      return true;
    } else {
      const router: Router = inject(Router);
      router.navigate(['/login']);
      return false;
    }
  };
}
