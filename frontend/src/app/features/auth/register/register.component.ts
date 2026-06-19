import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  isLoading = false;
  errorMsg = '';

  authService = inject(AuthService);
  router = inject(Router);

  onSubmit() {
    this.isLoading = true;
    this.errorMsg = '';
    
    this.authService.register({
      username: this.username,
      email: this.email,
      password: this.password,
      password2: this.password
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = 'Registration failed. Please try again.';
        console.error(err);
      }
    });
  }
}
