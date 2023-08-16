import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const canActivateAuthGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['login'])
    return false;
  }

  return true;
};
