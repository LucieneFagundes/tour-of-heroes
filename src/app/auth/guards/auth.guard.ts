import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
};
