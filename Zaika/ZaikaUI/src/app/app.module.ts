// @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// @appFramework
import { AppRoutingModule } from './app-routing.module';
import { AppSecurityModule } from './app-security.module';
import { SharedModule } from './app-shared.module';
import { AppUserInterfaceModule } from './framework/ui/app-ui.module';

// @appComponents
import { AppComponent } from './Home/app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AppUserInterfaceModule,
    AppSecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
