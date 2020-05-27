// @angular
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @appFramework
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './app-shared.module';
import { AppUserInterfaceModule } from './framework/ui/app-ui.module';
import { AppSecurityModule } from './Security/app-security.module';

// @appComponents
import { DefaultComponent } from './Home/default/default.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AppUserInterfaceModule,
    AppSecurityModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
