// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true; // Permitir acceso si el token existe
    } else {
      this.router.navigate(['login']); // Redirigir al login si no hay token
      return false;
    }
  }
}
