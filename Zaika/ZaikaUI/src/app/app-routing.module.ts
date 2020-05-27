import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './Home/default/default.component';
import { AppSecurityModule } from './Security/app-security.module';

const routes: Routes = [

  { path: 'default', pathMatch: 'full', component: DefaultComponent},
  { path: 'auth', loadChildren: () => import('./Security/app-security.module')
  .then(m => m.AppSecurityModule)},
  { path: '**', redirectTo: 'default'}
];

@NgModule({
  imports: [AppSecurityModule, RouterModule.forRoot(routes)],
  exports: [AppSecurityModule, RouterModule]
})
export class AppRoutingModule { }
// TODO: Fix page repeats page in url On refresh - Stack Overflow
