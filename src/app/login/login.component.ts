import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductGridComponent } from '../product-grid/product-grid.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted=false

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  async onSubmit(): Promise<void> {
    this.submitted=true
    if (this.loginForm.invalid) {
      return;
    }
    try {
      await this.authService.login(this.loginForm.value);
      alert("inicio");
      this.router.navigate(['blank']);

    } catch (error: any) {
      console.log(error)
      alert('Error en el inicio de sesión');
    }
  }
}
