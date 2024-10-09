import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/home'], { state: { username: this.username } });
    } else {
      this.errorMessage = 'Usuário ou senha inválido';
    }
  }
}
