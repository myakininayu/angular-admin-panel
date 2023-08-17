import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent {
  id!: number;
  user!: Observable<User>

  constructor(private activedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.user = this.activedRoute.data.pipe(map((data) => data?.['user']));
  }
}
