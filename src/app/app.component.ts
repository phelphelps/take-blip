import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_ROUTE } from './shared/constants/route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TakeBlip';

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigateByUrl(HOME_ROUTE);
  }
}
