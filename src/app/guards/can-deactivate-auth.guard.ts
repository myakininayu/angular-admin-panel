import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';

export const canDeactivateAuthGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(confirm('Are you sure?')) {
    localStorage.removeItem('token');
    return true;
  }

  return false;
};
