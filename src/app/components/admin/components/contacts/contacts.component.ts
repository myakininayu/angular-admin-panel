import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../user';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  personalList!: Observable<User[]>;

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(map((data) => data?.['users']));
  }
}
