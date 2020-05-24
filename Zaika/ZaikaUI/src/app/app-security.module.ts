// @angular
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// @appFramework
import { AppUserInterfaceModule } from './framework/ui/app-ui.module';

// @moduleComponents
import { SignInComponent } from './Security/sign-in/sign-in.component';
import { SignOutComponent } from './Security/sign-out/sign-out.component';
import { SignUpComponent } from './Security/sign-up/sign-up.component';

const routes: Routes = [
    { path: '**', redirectTo: 'signin' },
    { path: 'signin', component: SignInComponent }, // canActivate: [AuthGuard],
    { path: 'signup', component: SignUpComponent },
    { path: 'signout', component: SignOutComponent }
  ]
;

@NgModule({
  declarations: [
  SignInComponent,
  SignOutComponent,
  SignUpComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
    AppUserInterfaceModule
  ],
  exports: [AppUserInterfaceModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSecurityModule { }
