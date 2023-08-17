import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { delay, catchError, EMPTY, Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { User } from '../user';

export const usersResolver: ResolveFn<Observable<User[]>> = (route, state) => {
  const adminService: AdminService = inject(AdminService);
  const router = inject(Router);

  
  return adminService.getPersonalList().pipe(
    delay(2000)
  )
};
