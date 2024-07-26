import { CanActivateFn } from '@angular/router';

export const yGuard: CanActivateFn = (route, state) => {
  return true;
};
