import { Component } from '@angular/core';
import { AuthService } from '@mdv-sixteen/core-data';

@Component({
  selector: 'mdv-sixteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  links = [
    { path: '/drinks', icon: 'local_drink', title: 'Drinks' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}

}
