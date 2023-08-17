import { Component } from '@angular/core';
import { Router, ActivatedRoute, ResolveEnd, ResolveStart } from '@angular/router';
import { Observable, filter, mapTo, merge } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  isLoading!: Observable<boolean>;

  constructor(private authService: AuthService, private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true));

    this.isLoading = merge(this.hideLoader, this.showLoader);
  }


  logout() {
    this.authService.logout();
  }
}
