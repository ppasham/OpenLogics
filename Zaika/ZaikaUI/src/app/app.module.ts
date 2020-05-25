// @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @appFramework
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './app-shared.module';
import { AppUserInterfaceModule } from './framework/ui/app-ui.module';
import { AppSecurityModule } from './Security/app-security.module';

// @appComponents
import { AppComponent } from './Home/app.component';

@NgModule({
  declarations: [
    AppComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
