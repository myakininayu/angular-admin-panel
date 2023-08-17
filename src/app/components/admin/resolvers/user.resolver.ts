import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, Observable, catchError, delay } from 'rxjs';
import { User } from '../user';
import { AdminService } from '../services/admin.service';

export const userResolver: ResolveFn<Observable<User>> = (route, state) => {
  const adminService: AdminService = inject(AdminService);
  const router = inject(Router);

  
  return adminService.getPerson(route.params?.['id']).pipe(
    delay(2000),
    catchError( () => {
      router.navigate(['admin/contacts'])
      return EMPTY
    })
  )
};
