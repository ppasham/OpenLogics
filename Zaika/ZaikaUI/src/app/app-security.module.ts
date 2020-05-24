// @angular
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// @appFramework
import { AppUserInterfaceModule } from './framework/ui/app-ui.module';

// @moduleComponents
import { SignInComponent } from './Security/sign-in/sign-in.component';
import { SignOutComponent } from './Security/sign-out/sign-out.component';
import { SignUpComponent } from './Security/sign-up/sign-up.component';

@NgModule({
  declarations: [
  SignInComponent,
  SignOutComponent,
  SignUpComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'signin' },
      { path: 'signin', component: SignInComponent }, // canActivate: [AuthGuard],
      { path: 'signup', component: SignUpComponent },
      { path: 'signout', component: SignOutComponent }
    ])
  ],
  exports: [AppUserInterfaceModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSecurityModule { }
