import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private accessService: AccessService, private router: Router) { }

  async login() {
    const authenticated = await this.accessService.authenticateWithBiometrics();
    if (authenticated) {
      this.router.navigate(['/inside']);
    } else {
      this.router.navigate(['/locked']);
    }
  }
}
