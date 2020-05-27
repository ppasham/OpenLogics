// @angular
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// @appFramework
import { AppUserInterfaceModule } from '../framework/ui/app-ui.module';

// @moduleComponents
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    {
      path: 'auth',
      children: [
      { path: 'checkin', pathMatch: 'full', component: SignInComponent },
      { path: 'joinus', pathMatch: 'full', component: SignUpComponent },
      { path: 'signoff', pathMatch: 'full', component: SignOutComponent }
      ]
    }
];

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
// TODO: Fix page repeats page in url On refresh - Stack Overflow
