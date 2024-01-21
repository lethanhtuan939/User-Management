import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-stogare.service';
import { inject } from '@angular/core';
import { User } from '../model/user';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  const user = localStorageService.getValue<User | null>('currentUser') || null;

  if (!user) {
    router.navigate(['/account/login']);
    return false;
  }

  return true;
};
