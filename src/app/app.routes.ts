// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { AuthGuardService } from './auth-guard.service';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'product-grid', component: ProductGridComponent, canActivate: [AuthGuardService] },
  { path: 'blank', component: BlankComponent},
  //{ path: '', redirectTo: '/product-grid', pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export default routes;