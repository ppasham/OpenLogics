import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSecurityModule } from './Security/app-security.module';

const routes: Routes = [
  { path: 'security', loadChildren: () => import('./Security/app-security.module').then(m => m.AppSecurityModule)},
  { path: '**', redirectTo: '/'}
  // { path: 'member', loadChildren: () => import('./Features/member/member.module').then(m => m.MemberModule) }
  // {path: 'signin', loadChildren: './app-security.module#AppSecurityModule'},
  // {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [AppSecurityModule, RouterModule.forRoot(routes)],
  exports: [AppSecurityModule, RouterModule]
})
export class AppRoutingModule { }
