import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSecurityModule } from './app-security.module';

const routes: Routes = [
  // {path: 'signin', loadChildren: './app-security.module#AppSecurityModule'},
  // {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [AppSecurityModule, RouterModule.forRoot(routes)],
  exports: [AppSecurityModule, RouterModule]
})
export class AppRoutingModule { }
